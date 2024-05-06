import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { StoryFieldResolver, StoryResolver, StoryZoomRecordHoverResolver } from './story.resolver'
import { StoryService } from './story.service'

@Module({
  imports: [StrapiModule],
  providers: [StoryResolver, StoryService, StoryFieldResolver, StoryZoomRecordHoverResolver],
  exports: [StoryService],
})
export class StoryModule {}
