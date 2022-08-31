import { HttpService } from '@nestjs/axios'
import { Inject } from '@nestjs/common'
import { Field, ID, ObjectType, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { lastValueFrom } from 'rxjs'
import { Sdk } from '../../generated/strapi-sdk'

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

    @Query(() => [StoryType])
    public async stories() {
        const res = await this.strapiGqlSdk.stories()

        return res.stories?.data
    }

    @ResolveField()
    public async counts(@Parent() story: StoryType) {
        const endpoint =
            'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/objects-per-type/run'

        const res = await lastValueFrom(this.httpService.get(endpoint))

        return parseInt(res.data[0].numberOfInstances, 10)
    }
}
