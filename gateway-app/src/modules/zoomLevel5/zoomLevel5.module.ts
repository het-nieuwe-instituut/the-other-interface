import { Module } from '@nestjs/common'
import { ZoomLevel5Resolver } from './zoomLevel5.resolver'
import { ZoomLevel5Service } from './zoomLevel5.service'

@Module({
    imports: [],
    providers: [ZoomLevel5Service, ZoomLevel5Resolver],
})
export class ZoomLevel5Module {}
