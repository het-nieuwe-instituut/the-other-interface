import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'
import { PublicationZoomLevel3Resolver } from './publications.resolver'
import { PublicationsService } from './publications.service'

@Module({
  imports: [forwardRef(() => ZoomLevel3Module)],
  providers: [PublicationsService, PublicationZoomLevel3Resolver],
  exports: [PublicationsService, PublicationZoomLevel3Resolver],
})
export class PublicationsModule {}
