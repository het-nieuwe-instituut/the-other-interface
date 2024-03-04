import { forwardRef, Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { ArchivesModule } from '../archives/archives.module'
import { ObjectsModule } from '../objects/objects.module'
import { PeopleModule } from '../people/people.module'
import { PublicationsModule } from '../publications/publications.module'
import { ZoomLevel3Resolver } from './zoomLevel3.resolver'
import { ZoomLevel3Service } from './zoomLevel3.service'
import { ZoomLevel3Controller } from './zoomLevel3.controller'

@Module({
  imports: [
    StrapiModule,
    forwardRef(() => ObjectsModule),
    forwardRef(() => PeopleModule),
    forwardRef(() => PublicationsModule),
    forwardRef(() => ArchivesModule),
  ],
  providers: [ZoomLevel3Service, ZoomLevel3Resolver],
  exports: [ZoomLevel3Service],
  controllers: [ZoomLevel3Controller],
})
export class ZoomLevel3Module {}
