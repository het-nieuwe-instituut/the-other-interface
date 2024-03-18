import { Module, forwardRef } from '@nestjs/common'
import { PeopleService } from './people.service'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'

@Module({
  imports: [forwardRef(() => ZoomLevel3Module)],
  providers: [PeopleService, PeopleService],
  exports: [PeopleService, PeopleService],
})
export class PeopleModule {}
