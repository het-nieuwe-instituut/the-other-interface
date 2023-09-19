import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'
import { ObjectMakerResolver, ObjectsResolver } from './objects.resolver'
import { ObjectsService } from './objects.service'

@Module({
  imports: [forwardRef(() => ZoomLevel3Module)],
  providers: [ObjectsService, ObjectsResolver, ObjectMakerResolver],
  exports: [ObjectsService, ObjectsResolver, ObjectMakerResolver],
})
export class ObjectsModule {}
