import { Inject } from '@nestjs/common'
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Enum_Triplyrecord_Type, PublicationState, Sdk } from '../../generated/strapi-sdk'
import { ArchivesService } from '../archives/archives.service'
import { ObjectsService } from '../objects/objects.service'
import { PeopleService } from '../people/people.service'
import { PublicationsService } from '../publications/publications.service'
import { I18NLocaleCode, PaginationArg } from '../strapi/shared-types'
import { Story, StoryEntityResponse, StoryEntityResponseCollection, StoryFiltersInput } from './story.type'

@Resolver(Story)
export class StoryFieldResolver {
    public constructor(
        @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
        private readonly peopleService: PeopleService,
        private readonly archiveService: ArchivesService,
        private readonly objectService: ObjectsService,
        private readonly publicationeService: PublicationsService
    ) {}

    // This field was in the poc, but not in the Strapi type update
    @ResolveField()
    public async people(@Parent() story: Story) {
        return (
            (story.triplyRecords?.data || [])
                .filter(r => r.attributes?.type === Enum_Triplyrecord_Type.People)
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                .map(r => this.peopleService.getZoomLevel5Data(r.attributes!.recordId))
        )
    }
    // TODO: figure out how to resolve type of archive (Fonds vs other)
    // @ResolveField()
    // public async archives(@Parent() story: Story) {
    //     return (
    //         (story.triplyRecords?.data || [])
    //             .filter(r => r.attributes?.type === Enum_Triplyrecord_Type.Archive)
    //             // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    //             .map(r => this.archiveService.getZoomLevel5Data(any,r.attributes!.recordId))
    //     )
    // }

    @ResolveField()
    public async objects(@Parent() story: Story) {
        return (
            (story.triplyRecords?.data || [])
                .filter(r => r.attributes?.type === Enum_Triplyrecord_Type.Object)
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                .map(r => this.objectService.getZoomLevel5Data(r.attributes!.recordId))
        )
    }

    // TODO: figure out how to resolve the type of publication
    // @ResolveField()
    // public async publications(@Parent() story: Story) {
    //     return (
    //         (story.triplyRecords?.data || [])
    //             .filter(r => r.attributes?.type === Enum_Triplyrecord_Type.Publication)
    //             // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    //             .map(r => this.publicationeService.getZoomLevel5Data(any, r.attributes!.recordId))
    //     )
    // }

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
}
