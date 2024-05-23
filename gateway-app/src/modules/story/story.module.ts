import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { StoryFieldResolver, StoryResolver } from './story.resolver'
import { StoryService } from './story.service'

@Module({
  imports: [StrapiModule],
  providers: [StoryResolver, StoryService, StoryFieldResolver],
  exports: [StoryService],
})
export class StoryModule {}
