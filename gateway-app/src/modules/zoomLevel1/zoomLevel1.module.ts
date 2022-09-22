import { Module } from '@nestjs/common'
import { StoryModule } from '../story/story.module'
import { ZoomLevel1Resolver } from './zoomLevel1.resolver'
import { ZoomLevel1Service } from './zoomLevel1.service'

@Module({
    imports: [StoryModule],
    providers: [ZoomLevel1Service, ZoomLevel1Resolver],
})
export class ZoomLevel1Module {}
