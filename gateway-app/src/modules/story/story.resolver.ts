import { Inject } from '@nestjs/common'
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Enum_Triplyrecord_Type, PublicationState, Sdk } from '../../generated/strapi-sdk'
import { PeopleService } from '../people/people.service'
import { I18NLocaleCode, PaginationArg } from '../strapi/shared-types'
import { Story, StoryEntityResponse, StoryEntityResponseCollection, StoryFiltersInput } from './story.type'

@Resolver(Story)
export class StoryFieldResolver {
    public constructor(
        @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
        private readonly peopleService: PeopleService
    ) {}

    // This field was in the poc, but not in the Strapi type update
    @ResolveField()
    public async people(@Parent() story: Story) {
        return (
            (story.triplyRecords?.data || [])
                .filter(r => r.attributes?.type === Enum_Triplyrecord_Type.People)
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                .map(r => this.peopleService.getPeopleDetails(r.attributes!.recordId))
        )
    }

    @ResolveField()
    public async author(@Parent() story: Story) {
        if (story.author?.data?.id) {
            const res = await this.strapiGqlSdk.author({ id: story.author?.data.id })
            return res.author
        }
        return null
    }

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
}

@Resolver()
export class StoryResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}
    @Query(() => StoryEntityResponseCollection)
    public async stories(
        @Args('filters', { nullable: true }) filters: StoryFiltersInput,
        @Args({ nullable: true }) pagination: PaginationArg,
        @Args('sort', { nullable: true, type: () => [String] }) sort: string[],
        @Args('publicationState', { nullable: true }) publicationState: PublicationState,
        @Args('locale', { nullable: true }) locale: I18NLocaleCode
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
    public async story(@Args('id') id: string, @Args('locale', { nullable: true }) locale: I18NLocaleCode) {
        const res = await this.strapiGqlSdk.story({ id, locale })

        return res.story
    }
}
