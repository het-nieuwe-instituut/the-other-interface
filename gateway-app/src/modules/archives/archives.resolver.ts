import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import {
  ArchiveRecordRelationArgs,
  ArchiveRelationsType,
  ArchivesRelationsCountType,
  ArchivesZoomLevel2HoverArgs,
  ArchivesZoomLevelHoverType,
  ArchiveRecordRelationCountArgs,
  ArchiveZoomLevel3DetailType,
  ArchivesRecordZoomLevel3Type,
} from './archives.type'
import { ArchivesService } from './archives.service'
import { PaginationArgs } from '../util/paginationArgs.type'
import { LocaleArgs } from '../util/localeArgs.type'

@Resolver(ArchiveRelationsType)
export class ArchivesRelationsZoomLevel3Resolver {
  public constructor(private readonly archivesService: ArchivesService) {}

  @Query(() => [ArchiveRelationsType], { nullable: true })
  public archivesRecordRelations(
    @Args() args: ArchiveRecordRelationArgs,
    @Args() paginationArgs: PaginationArgs
  ) {
    return this.archivesService.getRelationsData(args.id, args.type, paginationArgs, args.locale)
  }

  @Query(() => [ArchivesRelationsCountType], { nullable: true })
  public archivesRecordRelationsCount(@Args() args: ArchiveRecordRelationCountArgs) {
    return this.archivesService.getRelationsDataCount(args.id, args.type)
  }
}

@Resolver(ArchivesZoomLevelHoverType)
export class ArchivesZoomLevelRecordHoverResolver {
  public constructor(private readonly archivesService: ArchivesService) {}

  @Query(() => ArchivesZoomLevelHoverType)
  public async archivesZoomRecordHover(@Args() args: ArchivesZoomLevel2HoverArgs) {
    return this.archivesService.getZoomRecordHover(args.id, args.locale)
  }
}

@Resolver(ArchiveZoomLevel3DetailType)
export class ArchivesZoomLevel3DetailResolver {
  public constructor(private readonly archivesService: ArchivesService) {}

  @Query(() => ArchiveZoomLevel3DetailType, { nullable: true })
  public async zoomLevel3Archive(@Args('id') id: string, @Args() { locale }: LocaleArgs) {
    return this.archivesService.getZoomLevel3Data(id, locale)
  }

  @ResolveField()
  public enrichedSources(
    @Parent() record: ArchiveZoomLevel3DetailType,
    @Args() { locale }: LocaleArgs
  ) {
    return this.archivesService.getEnrichedSources(record.id, locale)
  }
}

@Resolver(ArchivesRecordZoomLevel3Type)
export class ArchivesRecordZoomLevel3Resolver {
  public constructor(private readonly archivesService: ArchivesService) {}

  @Query(() => [ArchivesRecordZoomLevel3Type], { nullable: true })
  public async archivesRecordZoomLevel3(
    @Args('id') publicationId: string,
    @Args() { locale }: LocaleArgs
  ) {
    return this.archivesService.getZoomLevel3RecordData(publicationId, locale)
  }

  @ResolveField()
  public enrichedSources(
    @Parent() record: ArchivesRecordZoomLevel3Type,
    @Args() { locale }: LocaleArgs
  ) {
    return this.archivesService.getEnrichedSources(record.id, locale)
  }
}
