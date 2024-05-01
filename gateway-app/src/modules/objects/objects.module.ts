import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'
import {
  ObjectRelationstZoomLevel3Resolver,
  ObjectMakerResolver,
  ObjectZoomLevel3Resolver,
  ObjectsZoomLevel2HoverResolver,
} from './objects.resolver'
import { ObjectsService } from './objects.service'

@Module({
  imports: [forwardRef(() => ZoomLevel3Module)],
  providers: [
    ObjectsService,
    ObjectZoomLevel3Resolver,
    ObjectMakerResolver,
    ObjectRelationstZoomLevel3Resolver,
    ObjectsZoomLevel2HoverResolver,
  ],
  exports: [
    ObjectsService,
    ObjectZoomLevel3Resolver,
    ObjectMakerResolver,
    ObjectRelationstZoomLevel3Resolver,
    ObjectsZoomLevel2HoverResolver,
  ],
})
export class ObjectsModule {}
