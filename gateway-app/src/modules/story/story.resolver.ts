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
}

@Resolver()
export class StoryResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}
    @Query(() => StoryEntityResponseCollection)
    public async stories(
        @Args('filters') filters: StoryFiltersInput,
        @Args() pagination: PaginationArg,
        @Args('sort', { type: () => [String] }) sort: string[],
        @Args('publicationState') publicationState: PublicationState,
        @Args('locale') locale: I18NLocaleCode
    ) {
        const res = await this.strapiGqlSdk.stories({
            filters: filters || {},
            pagination: pagination || {},
            sort: sort || [],
            publicationState: publicationState || PublicationState.Live,
            locale: locale || null,
        })

        return res.stories
    }

    @Query(() => StoryEntityResponse)
    public async story(@Args('id') id: string, @Args('locale') locale: I18NLocaleCode) {
        const res = await this.strapiGqlSdk.story({ id, locale })

        return res.story
    }
}
