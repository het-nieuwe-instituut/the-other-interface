import { Inject } from '@nestjs/common'
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Sdk, StoryFragmentFragment } from '../../generated/strapi-sdk'
import { StoryService } from './story.service'
import { StoryType } from './story.type'

@Resolver(StoryType)
export class StoryResolver {
    public constructor(
        @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
        private readonly storyService: StoryService
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
        const peopleLink = story.attributes?.triply_people
        if (!peopleLink) {
            return null
        }

        return this.storyService.getPeopleData(peopleLink)
    }
}
