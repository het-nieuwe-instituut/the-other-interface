import { Module, forwardRef } from '@nestjs/common'
import { PeopleService } from './people.service'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'
import { PeopleZoomLevelRecordHoverResolver, PeopleZoomLevel3Resolver } from './people.resolver'

@Module({
  imports: [forwardRef(() => ZoomLevel3Module)],
  providers: [
    PeopleService,
    PeopleService,
    PeopleZoomLevel3Resolver,
    PeopleZoomLevelRecordHoverResolver,
  ],
  exports: [
    PeopleService,
    PeopleService,
    PeopleZoomLevel3Resolver,
    PeopleZoomLevelRecordHoverResolver,
  ],
})
export class PeopleModule {}
