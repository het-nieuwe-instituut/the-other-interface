import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { RelatedRecordTypeResolver, ZoomLevel5Resolver } from './zoomLevel5.resolver'
import { ZoomLevel5Service } from './zoomLevel5.service'

@Module({
    imports: [StrapiModule],
    providers: [ZoomLevel5Service, ZoomLevel5Resolver, RelatedRecordTypeResolver],
})
export class ZoomLevel5Module {}
