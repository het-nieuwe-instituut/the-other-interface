import { Parent, Query, Resolver } from '@nestjs/graphql'
// import { TriplyUtils } from '../triply/triply.utils'
// import { CustomError } from '../util/customError'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'
import { ObjectsZoomLevel3DetailType } from './objects.type'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

// @Resolver(ObjectsZoomLevel3DetailType)
// export class ObjectsResolver {
//   @Query(() => ObjectsZoomLevel3DetailType)
//   public object() {
//     throw CustomError.internal('not yet implemented')
//   }
// }

@Resolver(ObjectsZoomLevel3DetailType)
export class ObjectZoomLevel3Resolver {
  public constructor(private readonly zoomLevel3Service: ZoomLevel3Service) {}
  @Query(() => ObjectsZoomLevel3DetailType)
  public objectDetailZoomLevel3(@Parent() object: ObjectsZoomLevel3DetailType) {
    // if (!object.maker) {
    //   return
    // }

    // const type = TriplyUtils.getEntityNameFromUri(object.maker)
    // const id = TriplyUtils.getIdFromUri(object.maker)

    return this.zoomLevel3Service.getDetail(object?.id, EntityNames.Objects)
  }
}
