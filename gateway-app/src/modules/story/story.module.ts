import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { TripliModule } from '../tripli/tripli.module'
import { StoryResolver } from './story.resolver'
import { StoryService } from './story.service'

@Module({
    imports: [StrapiModule, HttpModule, TripliModule],
    providers: [StoryResolver, StoryService],
})
export class StoryModule {}
