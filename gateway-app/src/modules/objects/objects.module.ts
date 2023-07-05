import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel5Module } from '../zoomLevel5/zoomLevel5.module'
import { ObjectMakerResolver, ObjectsResolver } from './objects.resolver'
import { ObjectsService } from './objects.service'

@Module({
  imports: [forwardRef(() => ZoomLevel5Module)],
  providers: [ObjectsService, ObjectsResolver, ObjectMakerResolver],
  exports: [ObjectsService, ObjectsResolver, ObjectMakerResolver],
})
export class ObjectsModule {}
