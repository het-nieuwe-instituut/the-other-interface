import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'

import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import {
  ArchiveZoomLevel3DetailType,
  ArchivesFondsCreatorType,
  ArchivesFondsZoomLevel3DetailType,
  ArchivesRecordZoomLevel3Type,
} from './archives.type'
import { TriplyUtils } from '../triply/triply.utils'
import { CustomError } from '../util/customError'

@Resolver(ArchiveZoomLevel3DetailType)
export class ArchivesZoomLevel3Resolver {
  public constructor(private readonly zoomLevel3Service: ZoomLevel3Service) {}

  @Query(() => ArchiveZoomLevel3DetailType)
  public archivesDetailZoomLevel3(@Parent() archiveCreator: ArchiveZoomLevel3DetailType) {
    return this.zoomLevel3Service.getDetail(archiveCreator?.id, EntityNames?.Archives)
  }
}

// @Resolver(ArchivesRecordZoomLevel3Type)
// export class ArchivesRecordZoomLevel3Resolver {
//   public constructor(private readonly zoomLevel3Service: ZoomLevel3Service) {}

//   @Query(() => ArchivesRecordZoomLevel3Type)
//   public archivesRecordZoomLevel3(@Parent() archiveCreator: ArchiveZoomLevel3DetailType) {
//     return this.zoomLevel3Service.getRecordDetail(archiveCreator?.id, EntityNames?.Archives)
//   }
// }

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
  public populatedCreator(@Parent() archiveCreator: ArchivesFondsCreatorType) {
    if (!archiveCreator.creator) {
      return
    }

    const type = TriplyUtils.getEntityNameFromUri(archiveCreator.creator)
    const id = TriplyUtils.getIdFromUri(archiveCreator.creator)

    return this.zoomLevel3Service.getDetail(id, type)
  }
}
