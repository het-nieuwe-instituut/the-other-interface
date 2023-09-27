import { Parent, Query, Resolver } from '@nestjs/graphql'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'

import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ArchiveZoomLevel3Type } from './archives.type'

@Resolver(ArchiveZoomLevel3Type)
export class ArchivesZoomLevel3Resolver {
  public constructor(private readonly zoomLevel3Service: ZoomLevel3Service) {}

  @Query(() => ArchiveZoomLevel3Type)
  public archivesDetailZoomLevel3(@Parent() archiveCreator: ArchiveZoomLevel3Type) {
    // if (!archiveCreator.id) {
    //   return
    // }

    return this.zoomLevel3Service.getDetail(archiveCreator?.id, EntityNames?.Archives)
  }
}
