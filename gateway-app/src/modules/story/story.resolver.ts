import { HttpService } from '@nestjs/axios'
import { Inject } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Field, ID, ObjectType, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { lastValueFrom } from 'rxjs'
import { Sdk, StoryFragmentFragment } from '../../generated/strapi-sdk'

// TODO: added for POC, delete (or update for actual requirements) before production
@ObjectType()
class StoryAttributesType {
    @Field()
    public title: string

    @Field({ nullable: true })
    public slug?: string

    @Field({ nullable: true })
    public createdAt?: string

    @Field({ nullable: true })
    public updatedAt?: string

    @Field({ nullable: true })
    public publishedAt?: string
}

// TODO: added for POC, delete (or update for actual requirements) before production
@ObjectType()
class PeopleType {
    @Field({ nullable: true })
    public name?: string

    @Field({ nullable: true })
    public birthDate?: string

    @Field({ nullable: true })
    public deathDate?: string

    @Field({ nullable: true })
    public nationalityLabel?: string
}

// TODO: added for POC, delete (or update for actual requirements) before production
@ObjectType()
class StoryType {
    @Field(() => ID, { nullable: true })
    public id?: string

    @Field(() => StoryAttributesType, { nullable: true })
    public attributes?: StoryAttributesType

    @Field({ nullable: true })
    public counts?: number

    @Field({ nullable: true })
    public people?: PeopleType
}

@Resolver(StoryType)
export class StoryResolver {
    public constructor(
        @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
        private readonly httpService: HttpService,
        private readonly configService: ConfigService
    ) {}

    // TODO: added for POC, delete (or update for actual requirements) before production
    @Query(() => [StoryType])
    public async stories() {
        const res = await this.strapiGqlSdk.stories()

        return res.stories?.data
    }

    // TODO: added for POC, delete (or update for actual requirements) before production
    @ResolveField()
    public async counts(@Parent() story: StoryFragmentFragment) {
        // TECHNICAL-DEBT: the http call & data parsing/casting should move to a triply service method inside a triply module

        interface ObjectPerType {
            class: string
            numberOfInstances: string
        }

        const endpoint =
            'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/objects-per-type/run'

        // TECHNICAL-DEBT: implement error handling
        // TECHNICAL-DEBT: (dynamically) verify received type
        const res = await lastValueFrom(this.httpService.get<ObjectPerType[]>(endpoint))

        return parseInt(res.data[0].numberOfInstances, 10)
    }

    // TODO: added for POC, delete (or update for actual requirements) before production
    @ResolveField()
    public async people(@Parent() story: StoryFragmentFragment) {
        // TECHNICAL-DEBT: the http call & data parsing/casting should move to a triply service method inside a triply module

        const peopleLink = story.attributes?.triply_people
        if (!peopleLink) {
            return null
        }
        interface PeopleData {
            name: string | null
            birthDate: string | null
            deathDate: string | null
            nationalityLabel: string | null
        }

        // TECHNICAL-DEBT: move to client or service responsible for making triply calls
        const apiKey = this.configService.getOrThrow('TRIPLY_API_KEY')

        const endpoint = `https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface-acceptance/zoom-5-people/run?record=${peopleLink}`
        // TECHNICAL-DEBT: implement error handling
        // TECHNICAL-DEBT: (dynamically) verify received type
        const res = await lastValueFrom(
            this.httpService.get<PeopleData[]>(endpoint, { headers: { Authorization: `Bearer ${apiKey}` } })
        )

        const parsedResponse: PeopleType = {}
        res.data.forEach(d => {
            if (d.name) parsedResponse.name = d.name
            if (d.birthDate) parsedResponse.birthDate = d.birthDate
            if (d.deathDate) parsedResponse.deathDate = d.deathDate
            if (d.nationalityLabel) parsedResponse.nationalityLabel = d.nationalityLabel
        })

        return parsedResponse
    }
}
