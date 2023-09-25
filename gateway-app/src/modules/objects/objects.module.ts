import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'
import { ObjectZoomLevel3Resolver } from './objects.resolver'
import { ObjectsService } from './objects.service'

@Module({
  imports: [forwardRef(() => ZoomLevel3Module)],
  providers: [ObjectsService, ObjectZoomLevel3Resolver],
  exports: [ObjectsService, ObjectZoomLevel3Resolver],
})
export class ObjectsModule {}
