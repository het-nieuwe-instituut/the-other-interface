import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
// import { PerformanceInterceptor } from '../util/performance.interceptor'
import { StoryFieldResolver, StoryResolver } from './story.resolver'
import { StoryService } from './story.service'

@Module({
  imports: [StrapiModule],
  providers: [
    StoryResolver,
    StoryService,
    StoryFieldResolver,
    // {
    //   provide: 'APP_INTERCEPTOR',
    //   useFactory: () => new PerformanceInterceptor('Story resolver', 1500),
    // },
  ],
  exports: [StoryService],
})
export class StoryModule {}
