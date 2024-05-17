import { Inject } from '@nestjs/common'
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Enum_Triplyrecord_Type, PublicationState, Sdk } from '../../generated/strapi-sdk'
import { ArchivesService } from '../archives/archives.service'
import { ObjectsService } from '../objects/objects.service'
import { PeopleService } from '../people/people.service'
import { PublicationsService } from '../publications/publications.service'
import { PaginationArg } from '../strapi/shared-types'
import {
  TriplyRecord,
  TriplyRecordEntityResponse,
  TriplyRecordFiltersInput,
  TriplyRecordRelationResponseCollection,
} from './triplyRecord.type'

@Resolver()
export class TriplyRecordResolver {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}
  @Query(() => TriplyRecordEntityResponse)
  public async triplyRecord(@Args('id') id: string) {
    const res = await this.strapiGqlSdk.triplyRecord({ id })
    return res.triplyRecord
  }
  @Query(() => TriplyRecordRelationResponseCollection)
  public async triplyRecords(
    @Args('filters', { nullable: true }) filters?: TriplyRecordFiltersInput,
    @Args('pagination', { nullable: true }) pagination?: PaginationArg,
    @Args('sort', { nullable: true, type: () => [String] }) sort?: string[],
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState
  ) {
    const res = await this.strapiGqlSdk.triplyRecords({
      filters: filters || undefined,
      pagination: pagination || undefined,
      sort: sort || [],
      publicationState: publicationState || undefined,
    })

    return res.triplyRecords
  }
}

@Resolver(TriplyRecord)
export class TriplyRecordFieldResolver {
  public constructor(
    @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
    private readonly archivesService: ArchivesService,
    private readonly objectsService: ObjectsService,
    private readonly publicationService: PublicationsService,
    private readonly peopleService: PeopleService
  ) {}

  @ResolveField()
  public async stories(@Parent() triplyRecord: TriplyRecord) {
    if (triplyRecord.stories?.data && triplyRecord.stories.data.length) {
      const res = await this.strapiGqlSdk.stories({
        filters: {
          or: triplyRecord.stories.data.map(ent => {
            return { id: { eq: ent.id } }
          }),
        },
      })
      return res.stories
    }
  }

  @ResolveField()
  public async archive(@Parent() triplyRecord: TriplyRecord) {
    // if (triplyRecord.type !== Enum_Triplyrecord_Type.Archive) {
    //   return
    // }

    // const type = await this.archivesService.determineArchiveType(triplyRecord.recordId)

    return this.archivesService.getZoomLevel3Data(triplyRecord.recordId)
  }

  @ResolveField()
  public object(@Parent() triplyRecord: TriplyRecord) {
    if (triplyRecord.type !== Enum_Triplyrecord_Type.Object) {
      return
    }

    return this.objectsService.getZoomLevel3Data(triplyRecord.recordId)
  }

  @ResolveField()
  public async publication(@Parent() triplyRecord: TriplyRecord) {
    // if (triplyRecord.type !== Enum_Triplyrecord_Type.Publication) {
    //   return
    // }

    // const type = await this.publicationService.determinePublicationType(triplyRecord.recordId)

    return this.publicationService.getZoomLevel3Data(triplyRecord.recordId)
  }

  @ResolveField()
  public people(@Parent() triplyRecord: TriplyRecord) {
    if (triplyRecord.type !== Enum_Triplyrecord_Type.People) {
      return
    }

    return this.peopleService.getZoomLevel3Data(triplyRecord.recordId)
  }
}
