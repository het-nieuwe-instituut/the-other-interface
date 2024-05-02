import { Module, forwardRef } from '@nestjs/common'
import { PeopleService } from './people.service'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'
import { PeopleZoomLevel2HoverResolver, PeopleZoomLevel3Resolver } from './people.resolver'

@Module({
  imports: [forwardRef(() => ZoomLevel3Module)],
  providers: [
    PeopleService,
    PeopleService,
    PeopleZoomLevel3Resolver,
    PeopleZoomLevel2HoverResolver,
  ],
  exports: [PeopleService, PeopleService, PeopleZoomLevel3Resolver, PeopleZoomLevel2HoverResolver],
})
export class PeopleModule {}
