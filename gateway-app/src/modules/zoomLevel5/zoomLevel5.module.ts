import { forwardRef, Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { ArchivesModule } from '../archives/archives.module'
import { ObjectsModule } from '../objects/objects.module'
import { PeopleModule } from '../people/people.module'
import { PublicationsModule } from '../publications/publications.module'
import { ZoomLevel5Resolver } from './zoomLevel5.resolver'
import { ZoomLevel5Service } from './zoomLevel5.service'
import { ZoomLevel5Controller } from './zoomLevel5.controller'

@Module({
  imports: [
    StrapiModule,
    forwardRef(() => ObjectsModule),
    PeopleModule,
    forwardRef(() => PublicationsModule),
    forwardRef(() => ArchivesModule),
  ],
  providers: [ZoomLevel5Service, ZoomLevel5Resolver],
  exports: [ZoomLevel5Service],
  controllers: [ZoomLevel5Controller],
})
export class ZoomLevel5Module {}
