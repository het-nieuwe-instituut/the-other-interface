import { Inject } from '@nestjs/common'
import { Query, Resolver } from '@nestjs/graphql'
import { Sdk } from '../../generated/strapi-sdk'
import { PeopleService } from '../people/people.service'
import { Story } from './story.type'

@Resolver(Story)
export class StoryResolver {
    public constructor(
        @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
        private readonly peopleService: PeopleService
    ) {}

    // TODO: added for POC, delete (or update for actual requirements) before production
    @Query(() => [Story])
    public async stories() {
        const res = await this.strapiGqlSdk.stories()

        return res.stories?.data
    }

    // This field was in the poc, but not in the Strapi type update
    // @ResolveField()
    // public async people(@Parent() story: StoryFragmentFragment) {
    //     return (
    //         (story.attributes?.triplyRecords?.data || [])
    //             .filter(r => r.attributes?.type === Enum_Triplyrecord_Type.People)
    //             // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    //             .map(r => this.peopleService.getPeopleDetails(r.attributes!.recordId))
    //     )
    // }
}
