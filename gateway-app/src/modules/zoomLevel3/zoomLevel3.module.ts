import { Module } from '@nestjs/common'
import { ArchivesModule } from '../archives/archives.module'
import { ObjectsModule } from '../objects/objects.module'
import { PeopleModule } from '../people/people.module'
import { PublicationsModule } from '../publications/publications.module'
import { ZoomLevel3Resolver } from './zoomLevel3.resolver'
import { ZoomLevel3Service } from './zoomLevel3.service'

@Module({
    imports: [ArchivesModule, ObjectsModule, PeopleModule, PublicationsModule],
    providers: [ZoomLevel3Service, ZoomLevel3Resolver],
})
export class ZoomLevel3Module {}
