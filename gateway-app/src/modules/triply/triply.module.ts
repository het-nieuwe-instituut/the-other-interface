import { HttpModule } from '@nestjs/axios'
import { Global, Module } from '@nestjs/common'
import { StoryModule } from '../story/story.module'
import { TriplyService } from './triply.service'

@Global()
@Module({ imports: [HttpModule, StoryModule], providers: [TriplyService], exports: [TriplyService] })
export class TriplyModule {}
