import { Module } from '@nestjs/common'
import { ArchivesModule } from '../archives/archives.module'
import { ObjectsModule } from '../objects/objects.module'
import { PeopleModule } from '../people/people.module'
import { PublicationsModule } from '../publications/publications.module'
import { ZoomLevel2Resolver } from './zoomLevel2.resolver'
import { ZoomLevel2Service } from './zoomLevel2.service'

@Module({
  imports: [ArchivesModule, ObjectsModule, PeopleModule, PublicationsModule],
  providers: [ZoomLevel2Service, ZoomLevel2Resolver],
})
export class ZoomLevel2Module {}
