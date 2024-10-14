import { Module } from '@nestjs/common'
import { StoryModule } from 'src/modules/story/story.module'
import { DataloaderService } from './dataloader.service'

@Module({
  providers: [DataloaderService],
  imports: [StoryModule],
  exports: [DataloaderService],
})
export class DataloaderModule {}
