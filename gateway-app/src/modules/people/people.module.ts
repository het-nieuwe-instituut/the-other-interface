import { Module } from '@nestjs/common'
import { PeopleService } from './people.service'
import {
  PeopleZoomLevelRecordHoverResolver,
  PeopleZoomLevel3Resolver,
  PeopleZoomLevel3DetailResolver,
  PeopleRecordZoomLevel3Resolver,
} from './people.resolver'

@Module({
  providers: [
    PeopleService,
    PeopleService,
    PeopleZoomLevel3Resolver,
    PeopleZoomLevelRecordHoverResolver,
    PeopleZoomLevel3DetailResolver,
    PeopleRecordZoomLevel3Resolver,
  ],
  exports: [
    PeopleService,
    PeopleService,
    PeopleZoomLevel3Resolver,
    PeopleZoomLevelRecordHoverResolver,
    PeopleZoomLevel3DetailResolver,
    PeopleRecordZoomLevel3Resolver,
  ],
})
export class PeopleModule {}
