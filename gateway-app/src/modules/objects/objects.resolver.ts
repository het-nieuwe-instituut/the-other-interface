import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { TriplyUtils } from '../triply/triply.utils'
import { CustomError } from '../util/customError'
import { ZoomLevel5Service } from '../zoomLevel5/zoomLevel5.service'
import { ObjectsZoomLevel5DetailType } from './objects.type'

@Resolver(ObjectsZoomLevel5DetailType)
export class ObjectsResolver {
    public constructor(private readonly zoomLevel5Service: ZoomLevel5Service) {}

    @Query(() => ObjectsZoomLevel5DetailType)
    public object() {
        throw CustomError.internal('not yet implemented')
    }

    @ResolveField()
    public populatedMaker(@Parent() object: ObjectsZoomLevel5DetailType) {
        if (!object.maker) {
            return
        }

        const type = TriplyUtils.getEntityNameFromUri(object.maker)
        const id = TriplyUtils.getIdFromUri(object.maker)

        return this.zoomLevel5Service.getDetail(id, type)
    }
}
