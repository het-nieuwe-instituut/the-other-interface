import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { ObjectsModule } from '../objects/objects.module'
import { PeopleModule } from '../people/people.module'
import { PublicationsModule } from '../publications/publications.module'
import { RelatedRecordTypeResolver, ZoomLevel5Resolver } from './zoomLevel5.resolver'
import { ZoomLevel5Service } from './zoomLevel5.service'

@Module({
    imports: [StrapiModule, ObjectsModule, PeopleModule, PublicationsModule],
    providers: [ZoomLevel5Service, ZoomLevel5Resolver, RelatedRecordTypeResolver],
})
export class ZoomLevel5Module {}
