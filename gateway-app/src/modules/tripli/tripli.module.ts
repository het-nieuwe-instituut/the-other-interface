import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { StoryModule } from '../story/story.module'
import { TripliResolver } from './tripli.resolver'
import { TripliService } from './tripli.service'

@Module({ imports: [HttpModule, StoryModule], providers: [TripliService, TripliResolver], exports: [TripliService] })
export class TripliModule {}
