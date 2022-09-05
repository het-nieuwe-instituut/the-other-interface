import { HttpService } from '@nestjs/axios'
import { Inject } from '@nestjs/common'
import { Field, ID, ObjectType, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { lastValueFrom } from 'rxjs'
import { Sdk } from '../../generated/strapi-sdk'

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
class StoryType {
    @Field(() => ID, { nullable: true })
    public id?: string

    @Field(() => StoryAttributesType, { nullable: true })
    public attributes?: StoryAttributesType

    @Field({ nullable: true })
    public counts?: number
}

@Resolver(StoryType)
export class StoryResolver {
    public constructor(
        @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
        private readonly httpService: HttpService
    ) {}

    // TODO: added for POC, delete (or update for actual requirements) before production
    @Query(() => [StoryType])
    public async stories() {
        const res = await this.strapiGqlSdk.stories()

        return res.stories?.data
    }

    // TODO: added for POC, delete (or update for actual requirements) before production
    @ResolveField()
    public async counts(@Parent() story: StoryType) {
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
}
