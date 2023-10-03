import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
// import { TriplyUtils } from '../triply/triply.utils'
// import { CustomError } from '../util/customError'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'
import { ObjectMakerType, ObjectsZoomLevel3DetailType } from './objects.type'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { TriplyUtils } from '../triply/triply.utils'

@Resolver(ObjectsZoomLevel3DetailType)
export class ObjectZoomLevel3Resolver {
  public constructor(private readonly zoomLevel3Service: ZoomLevel3Service) {}
  @Query(() => ObjectsZoomLevel3DetailType)
  public objectDetailZoomLevel3(@Parent() object: ObjectsZoomLevel3DetailType) {
    return this.zoomLevel3Service.getDetail(object?.id, EntityNames.Objects)
  }
}

@Resolver(ObjectMakerType)
export class ObjectMakerResolver {
  public constructor(private readonly zoomLevel3Service: ZoomLevel3Service) {}
  @ResolveField()
  public populatedMaker(@Parent() object: ObjectMakerType) {
    if (!object.maker) {
      return
    }

    const type = TriplyUtils.getEntityNameFromUri(object.maker)
    const id = TriplyUtils.getIdFromUri(object.maker)

    return this.zoomLevel3Service.getDetail(id, type)
  }
}
