import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'

import {
  ArchiveRecordRelationArgs,
  ArchiveRelationsType,
  ArchivesFondsCreatorType,
  ArchivesFondsZoomLevel3DetailType,
  ArchivesRelationsCountType,
  ArchivesZoomLevel2HoverArgs,
  ArchivesZoomLevelHoverType,
} from './archives.type'
import { TriplyUtils } from '../triply/triply.utils'
import { CustomError } from '../util/customError'
import { ArchivesService } from './archives.service'
import { PaginationArgs } from '../util/paginationArgs.type'
import { Locale } from '../util/locale.type'

@Resolver(ArchiveRelationsType)
export class ArchivesRelationsZoomLevel3Resolver {
  public constructor(private readonly archivesService: ArchivesService) {}

  @Query(() => [ArchiveRelationsType], { nullable: true })
  public archivesRecordRelations(
    @Args() args: ArchiveRecordRelationArgs,
    @Args() paginationArgs: PaginationArgs,
    @Args('locale') locale: Locale
  ) {
    return this.archivesService.getRelationsData(args.id, args.type, paginationArgs, locale)
  }

  @Query(() => [ArchivesRelationsCountType], { nullable: true })
  public archivesRecordRelationsCount(@Args() args: ArchiveRecordRelationArgs) {
    return this.archivesService.getRelationsDataCount(args.id, args.type)
  }
}

@Resolver(ArchivesFondsZoomLevel3DetailType)
export class ArchivesOtherResolver {
  @Query(() => ArchivesFondsZoomLevel3DetailType)
  public archiveOther() {
    throw CustomError.internal('not yet implemented')
  }
}

@Resolver(ArchivesFondsCreatorType)
export class ArchivesFondsCreatorResolver {
  public constructor(private readonly zoomLevel3Service: ZoomLevel3Service) {}

  @ResolveField()
  public populatedCreator(
    @Parent() archiveCreator: ArchivesFondsCreatorType,
    @Args('locale') locale: Locale
  ) {
    if (!archiveCreator.creator) {
      return
    }

    const type = TriplyUtils.getEntityNameFromUri(archiveCreator.creator)
    const id = TriplyUtils.getIdFromUri(archiveCreator.creator)

    return this.zoomLevel3Service.getDetail(id, type, locale)
  }
}

@Resolver(ArchivesZoomLevelHoverType)
export class ArchivesZoomLevelRecordHoverResolver {
  public constructor(private readonly archivesService: ArchivesService) {}

  @Query(() => ArchivesZoomLevelHoverType)
  public async archivesZoomRecordHover(
    @Args() args: ArchivesZoomLevel2HoverArgs,
    @Args('locale') locale: Locale
  ) {
    return this.archivesService.getZoomRecordHover(args.id, locale)
  }
}
