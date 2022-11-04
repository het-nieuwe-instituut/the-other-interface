import { Inject } from '@nestjs/common'
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { I18NLocaleCode, PaginationArg } from '../strapi/shared-types'
import {
    Story,
    StoryEntityResponse,
    StoryEntityResponseCollection,
    StoryFiltersInput,
    StoryWithoutRelationsEntityResponse,
    StoryWithoutRelationsEntityResponseCollection,
} from './story.type'

@Resolver(Story)
export class StoryFieldResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

    @ResolveField()
    public async locations(@Parent() story: Story) {
        if (story.locations?.data && story.locations.data.length) {
            const res = await this.strapiGqlSdk.locations({
                filters: {
                    or: story.locations.data.map(ent => {
                        return { id: { eq: ent.id } }
                    }),
                },
            })

            return res.locations
        }
    }

    @ResolveField()
    public async author(@Parent() story: Story) {
        if (story.author?.data?.id) {
            const res = await this.strapiGqlSdk.author({ id: story.author?.data.id })
            return res.author
        }
        return null
    }
}

@Resolver()
export class StoryResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

    @Query(() => StoryEntityResponseCollection)
    public async stories(
        @Args('filters', { nullable: true }) filters?: StoryFiltersInput,
        @Args('pagination', { nullable: true }) pagination?: PaginationArg,
        @Args('sort', { nullable: true, type: () => [String] }) sort?: string[],
        @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
        @Args('locale', { nullable: true }) locale?: I18NLocaleCode
    ) {
        const res = await this.strapiGqlSdk.stories({
            filters: filters || undefined,
            pagination: pagination || {},
            sort: sort || [],
            publicationState: publicationState || undefined,
            locale: locale || undefined,
        })

        return res.stories
    }

    @Query(() => StoryEntityResponse)
    public async story(@Args('id') id: string, @Args('locale', { nullable: true }) locale?: I18NLocaleCode) {
        const res = await this.strapiGqlSdk.story({ id, locale })

        return res.story
    }

    @Query(() => StoryWithoutRelationsEntityResponseCollection)
    public async storiesWithoutRelations(
        @Args('filters', { nullable: true }) filters?: StoryFiltersInput,
        @Args('pagination', { nullable: true }) pagination?: PaginationArg,
        @Args('sort', { nullable: true, type: () => [String] }) sort?: string[],
        @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
        @Args('locale', { nullable: true }) locale?: I18NLocaleCode
    ) {
        const res = await this.strapiGqlSdk.storiesWithoutRelations({
            filters: filters || undefined,
            pagination: pagination || {},
            sort: sort || [],
            publicationState: publicationState || undefined,
            locale: locale || undefined,
        })

        return res.stories
    }

    @Query(() => StoryWithoutRelationsEntityResponse)
    public async storyWithoutRelation(
        @Args('id') id: string,
        @Args('locale', { nullable: true }) locale?: I18NLocaleCode
    ) {
        const res = await this.strapiGqlSdk.storyWithoutRelations({ id, locale })

        return res.story
    }
}
