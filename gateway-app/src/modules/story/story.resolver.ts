import { Inject } from '@nestjs/common'
import { Query, Resolver } from '@nestjs/graphql'
import { Sdk } from '../../generated/strapi-sdk'
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
}
