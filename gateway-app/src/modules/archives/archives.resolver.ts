import { Parent, Query, Resolver } from '@nestjs/graphql'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'

import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ArchiveZoomLevel3DetailType } from './archives.type'

@Resolver(ArchiveZoomLevel3DetailType)
export class ArchivesZoomLevel3Resolver {
  public constructor(private readonly zoomLevel3Service: ZoomLevel3Service) {}

  @Query(() => ArchiveZoomLevel3DetailType)
  public archivesDetailZoomLevel3(@Parent() archiveCreator: ArchiveZoomLevel3DetailType) {
    // if (!archiveCreator.id) {
    //   return
    // }

    return this.zoomLevel3Service.getDetail(archiveCreator?.id, EntityNames?.Archives)
  }
}
