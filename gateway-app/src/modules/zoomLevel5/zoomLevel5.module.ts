import { Module } from '@nestjs/common'
import { ArchivesModule } from '../archives/archives.module'
import { ObjectsModule } from '../objects/objects.module'
import { PeopleModule } from '../people/people.module'
import { PublicationsModule } from '../publications/publications.module'
import { RelatedRecordTypeResolver, ZoomLevel5Resolver } from './zoomLevel5.resolver'
import { ZoomLevel5Service } from './zoomLevel5.service'

@Module({
    imports: [ObjectsModule, PeopleModule, PublicationsModule, ArchivesModule],
    providers: [ZoomLevel5Service, ZoomLevel5Resolver, RelatedRecordTypeResolver],
})
export class ZoomLevel5Module {}
