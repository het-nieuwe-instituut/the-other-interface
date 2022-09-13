import { Inject } from '@nestjs/common'
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Sdk, StoryFragmentFragment } from '../../generated/strapi-sdk'
import { StoryType } from './story.type'

@Resolver(StoryType)
export class StoryResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

    // TODO: added for POC, delete (or update for actual requirements) before production
    @Query(() => [StoryType])
    public async stories() {
        const res = await this.strapiGqlSdk.stories()

        return res.stories?.data
    }

    // TODO: added for POC, delete (or update for actual requirements) before production
    @ResolveField()
    public async people(@Parent() story: StoryFragmentFragment) {
        // TECHNICAL-DEBT: the http call & data parsing/casting should move to a triply service method inside a triply module

        const peopleLink = story.attributes?.triply_people
        if (!peopleLink) {
            return null
        }
    }
}
