import { Module } from '@nestjs/common'
import {
  ObjectRelationstZoomLevel3Resolver,
  ObjectsRecordZoomLevel3Resolver,
  ObjectsZoomLevel3DetailResolver,
  ObjectsZoomLevelRecordHoverResolver,
} from './objects.resolver'
import { ObjectsService } from './objects.service'

@Module({
  providers: [
    ObjectsService,
    ObjectRelationstZoomLevel3Resolver,
    ObjectsZoomLevelRecordHoverResolver,
    ObjectsZoomLevel3DetailResolver,
    ObjectsRecordZoomLevel3Resolver,
  ],
  exports: [
    ObjectsService,
    ObjectRelationstZoomLevel3Resolver,
    ObjectsZoomLevelRecordHoverResolver,
    ObjectsZoomLevel3DetailResolver,
    ObjectsRecordZoomLevel3Resolver,
  ],
})
export class ObjectsModule {}
