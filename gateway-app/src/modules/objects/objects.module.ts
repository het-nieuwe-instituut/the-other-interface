import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'
import {
  ObjectRelationstZoomLevel3Resolver,
  ObjectMakerResolver,
  ObjectZoomLevel3Resolver,
  ObjectsZoomLevelRecordHoverResolver,
} from './objects.resolver'
import { ObjectsService } from './objects.service'

@Module({
  imports: [forwardRef(() => ZoomLevel3Module)],
  providers: [
    ObjectsService,
    ObjectZoomLevel3Resolver,
    ObjectMakerResolver,
    ObjectRelationstZoomLevel3Resolver,
    ObjectsZoomLevelRecordHoverResolver,
  ],
  exports: [
    ObjectsService,
    ObjectZoomLevel3Resolver,
    ObjectMakerResolver,
    ObjectRelationstZoomLevel3Resolver,
    ObjectsZoomLevelRecordHoverResolver,
  ],
})
export class ObjectsModule {}
