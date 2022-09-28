import { Module } from '@nestjs/common'
import { ObjectsModule } from '../objects/objects.module'
import { RelatedRecordTypeResolver, ZoomLevel5Resolver } from './zoomLevel5.resolver'
import { ZoomLevel5Service } from './zoomLevel5.service'

@Module({
    imports: [ObjectsModule],
    providers: [ZoomLevel5Service, ZoomLevel5Resolver, RelatedRecordTypeResolver],
})
export class ZoomLevel5Module {}
