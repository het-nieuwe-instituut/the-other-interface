import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { StoryModule } from '../story/story.module'
import { TripliService } from './tripli.service'

@Module({ imports: [HttpModule, StoryModule], providers: [TripliService], exports: [TripliService] })
export class TripliModule {}
