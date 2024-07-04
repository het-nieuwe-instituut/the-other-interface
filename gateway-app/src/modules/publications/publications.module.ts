import { Module } from '@nestjs/common'
import {
  PublicationRecordZoomLevel3Resolver,
  PublicationRelationsZoomLevel3Resolver,
  PublicationsZoomLevelRecordHoverResolver,
  PublicationZoomLevel3DetailResolver,
} from './publications.resolver'
import { PublicationsService } from './publications.service'

@Module({
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
