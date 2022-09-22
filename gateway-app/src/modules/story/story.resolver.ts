import { Inject } from '@nestjs/common'
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Sdk, StoryFragmentFragment } from '../../generated/strapi-sdk'
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
        const people = story.attributes?.triply_people?.filter(p => !!p?.uri_id)
        if (!people?.length) {
            return []
        }

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return Promise.all(people.map(p => this.peopleService.getPeopleDetails(p!.uri_id)))
    }
}
