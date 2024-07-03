import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'
import {
  PublicationRecordZoomLevel3Resolver,
  PublicationRelationsZoomLevel3Resolver,
  PublicationsZoomLevelRecordHoverResolver,
  PublicationZoomLevel3DetailResolver,
} from './publications.resolver'
import { PublicationsService } from './publications.service'

@Module({
  imports: [forwardRef(() => ZoomLevel3Module)],
  providers: [
    PublicationsService,
    PublicationRelationsZoomLevel3Resolver,
    PublicationsZoomLevelRecordHoverResolver,
    PublicationZoomLevel3DetailResolver,
    PublicationRecordZoomLevel3Resolver,
  ],
  exports: [
    PublicationsService,
    PublicationRelationsZoomLevel3Resolver,
    PublicationsZoomLevelRecordHoverResolver,
    PublicationZoomLevel3DetailResolver,
    PublicationRecordZoomLevel3Resolver,
  ],
})
export class PublicationsModule {}
