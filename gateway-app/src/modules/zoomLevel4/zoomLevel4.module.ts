import { Module } from '@nestjs/common'
import { ArchivesModule } from '../archives/archives.module'
import { ObjectsModule } from '../objects/objects.module'
import { PeopleModule } from '../people/people.module'
import { PublicationsModule } from '../publications/publications.module'
import { ZoomLevel4Resolver } from './zoomLevel4.resolver'
import { ZoomLevel4Service } from './zoomLevel4.service'

@Module({
  imports: [ArchivesModule, ObjectsModule, PeopleModule, PublicationsModule],
  providers: [ZoomLevel4Service, ZoomLevel4Resolver],
})
export class ZoomLevel4Module {}
