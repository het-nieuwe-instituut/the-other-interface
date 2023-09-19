import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { TriplyUtils } from '../triply/triply.utils'
import { CustomError } from '../util/customError'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'
import { ArchivesFondsCreatorType, ArchivesFondsZoomLevel3DetailType } from './archives.type'

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
