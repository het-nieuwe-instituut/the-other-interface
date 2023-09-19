import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { TriplyUtils } from '../triply/triply.utils'
import { CustomError } from '../util/customError'
import { ZoomLevel3Service } from '../zoomLevel3/zoomLevel3.service'
import { ObjectMakerType, ObjectsZoomLevel3DetailType } from './objects.type'

@Resolver(ObjectsZoomLevel3DetailType)
export class ObjectsResolver {
  @Query(() => ObjectsZoomLevel3DetailType)
  public object() {
    throw CustomError.internal('not yet implemented')
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
