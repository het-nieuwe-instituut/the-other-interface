import { Module } from '@nestjs/common'
import { RelatedRecordTypeResolver, ZoomLevel5Resolver } from './zoomLevel5.resolver'
import { ZoomLevel5Service } from './zoomLevel5.service'

@Module({
    imports: [],
    providers: [ZoomLevel5Service, ZoomLevel5Resolver, RelatedRecordTypeResolver],
})
export class ZoomLevel5Module {}
