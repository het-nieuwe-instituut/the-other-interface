import { Module } from '@nestjs/common'
import { PeopleModule } from '../people/people.module'
import { StrapiModule } from '../strapi/strapi.module'
import { StoryResolver } from './story.resolver'
import { StoryService } from './story.service'

@Module({
    imports: [StrapiModule, PeopleModule],
    providers: [StoryResolver, StoryService],
    exports: [StoryService],
})
export class StoryModule {}
