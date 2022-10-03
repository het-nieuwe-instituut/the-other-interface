import { Inject } from '@nestjs/common'
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Enum_Triplyrecord_Type, Sdk } from '../../generated/strapi-sdk'
import { PeopleService } from '../people/people.service'
import { Story, StoryEntityResponseCollection } from './story.type'

@Resolver(Story)
export class StoryResolver {
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

@Resolver(StoryEntityResponseCollection)
export class StoryEntityResponseCollectionResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}
    @Query(() => [Story])
    public async stories() {
        const res = await this.strapiGqlSdk.stories()

        return res.stories
    }
}
