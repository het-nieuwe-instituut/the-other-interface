import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { StoryResolver } from './story.resolver'

@Module({
    imports: [StrapiModule, HttpModule],
    providers: [StoryResolver],
})
export class StoryModule {}
