import { Module } from '@nestjs/common'
import { ArchivesModule } from '../archives/archives.module'
import { ObjectsModule } from '../objects/objects.module'
import { PeopleModule } from '../people/people.module'
import { PublicationsModule } from '../publications/publications.module'
import { StrapiModule } from '../strapi/strapi.module'
import { StoryFieldResolver, StoryResolver } from './story.resolver'
import { StoryService } from './story.service'

@Module({
    imports: [StrapiModule, PeopleModule, ArchivesModule, ObjectsModule, PublicationsModule],
    providers: [StoryResolver, StoryService, StoryFieldResolver],
    exports: [StoryService],
})
export class StoryModule {}
