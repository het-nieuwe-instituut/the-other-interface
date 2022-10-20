import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel5Module } from '../zoomLevel5/zoomLevel5.module'
import { ObjectsResolver } from './objects.resolver'
import { ObjectsService } from './objects.service'

@Module({
    imports: [forwardRef(() => ZoomLevel5Module)],
    providers: [ObjectsService, ObjectsResolver],
    exports: [ObjectsService, ObjectsResolver],
})
export class ObjectsModule {}
