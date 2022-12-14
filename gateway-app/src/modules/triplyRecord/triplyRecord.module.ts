import { Module } from '@nestjs/common'
import { ArchivesModule } from '../archives/archives.module'
import { ObjectsModule } from '../objects/objects.module'
import { PeopleModule } from '../people/people.module'
import { PublicationsModule } from '../publications/publications.module'
import { StrapiModule } from '../strapi/strapi.module'
import { TriplyRecordFieldResolver, TriplyRecordResolver } from './triplyRecord.resolver'

@Module({
    imports: [StrapiModule, ArchivesModule, ObjectsModule, PublicationsModule, PeopleModule],
    providers: [TriplyRecordResolver, TriplyRecordFieldResolver],
})
export class TriplyRecordModule {}
