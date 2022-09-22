import { HttpModule } from '@nestjs/axios'
import { Global, Module } from '@nestjs/common'
import { StoryModule } from '../story/story.module'
import { TripliService } from './tripli.service'

@Global()
@Module({ imports: [HttpModule, StoryModule], providers: [TripliService], exports: [TripliService] })
export class TripliModule {}
