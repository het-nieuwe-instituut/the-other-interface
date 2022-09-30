import { Inject } from '@nestjs/common'
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Enum_Triplyrecord_Type, Sdk, StoryFragmentFragment } from '../../generated/strapi-sdk'
import { PeopleService } from '../people/people.service'
import { StoryService } from './story.service'
import { StoryType } from './story.type'

@Resolver(StoryType)
export class StoryResolver {
    public constructor(
        @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
        private readonly storyService: StoryService,
        private readonly peopleService: PeopleService
    ) {}

    // TODO: added for POC, delete (or update for actual requirements) before production
    @Query(() => [StoryType])
    public async stories() {
        const res = await this.strapiGqlSdk.stories()

        return res.stories?.data
    }

    // TODO: added for POC, delete (or update for actual requirements) before production
    @ResolveField()
    public async people(@Parent() story: StoryFragmentFragment) {
        return (
            (story.attributes?.triplyRecords?.data || [])
                .filter(r => r.attributes?.type === Enum_Triplyrecord_Type.People)
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                .map(r => this.peopleService.getPeopleDetails(r.attributes!.recordId))
        )
    }
}
