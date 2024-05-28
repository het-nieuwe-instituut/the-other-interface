import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'
import {
  PublicationAuthorResolver,
  PublicationRelationsZoomLevel3Resolver,
  PublicationsArticleResolver,
  PublicationsAudioVisualResolver,
  PublicationsBookResolver,
  PublicationsSerialResolver,
  PublicationsZoomLevelRecordHoverResolver,
} from './publications.resolver'
import { PublicationsService } from './publications.service'

@Module({
  imports: [forwardRef(() => ZoomLevel3Module)],
  providers: [
    PublicationsService,
    PublicationsAudioVisualResolver,
    PublicationsArticleResolver,
    PublicationsBookResolver,
    PublicationsSerialResolver,
    PublicationAuthorResolver,
    PublicationRelationsZoomLevel3Resolver,
    PublicationsZoomLevelRecordHoverResolver,
  ],
  exports: [
    PublicationsService,
    PublicationsAudioVisualResolver,
    PublicationsArticleResolver,
    PublicationsBookResolver,
    PublicationsSerialResolver,
    PublicationAuthorResolver,
    PublicationRelationsZoomLevel3Resolver,
    PublicationsZoomLevelRecordHoverResolver,
  ],
})
export class PublicationsModule {}
