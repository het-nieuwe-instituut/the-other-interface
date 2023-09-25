import { Parent, Query, Resolver } from '@nestjs/graphql'
// import { CustomError } from '../util/customError'
// import { PublicationsService } from './publications.service'
import { PublicationZoomLevel3DetailType } from './publications.type'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'

@Resolver(PublicationZoomLevel3DetailType)
export class PublicationZoomLevel3Resolver {
  public constructor(private readonly zoomLevel3Service: ZoomLevel3Service) {}

  @Query(() => PublicationZoomLevel3DetailType)
  public publicationDetailZoomLevel3(@Parent() piublication: PublicationZoomLevel3DetailType) {
    return this.zoomLevel3Service.getDetail(piublication?.id, EntityNames.Publications)
  }
}
