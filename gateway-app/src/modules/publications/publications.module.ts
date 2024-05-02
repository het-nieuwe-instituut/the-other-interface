import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'
import {
  PublicationAuthorResolver,
  PublicationRelationsZoomLevel3Resolver,
  PublicationsArticleResolver,
  PublicationsAudioVisualResolver,
  PublicationsBookResolver,
  PublicationsSerialResolver,
  PublicationsZoomLevel2HoverResolver,
  PublicationZoomLevel3Resolver,
} from './publications.resolver'
import { PublicationsService } from './publications.service'

@Module({
  imports: [forwardRef(() => ZoomLevel3Module)],
  providers: [
    PublicationsService,
    PublicationZoomLevel3Resolver,
    PublicationsAudioVisualResolver,
    PublicationsArticleResolver,
    PublicationsBookResolver,
    PublicationsSerialResolver,
    PublicationAuthorResolver,
    PublicationRelationsZoomLevel3Resolver,
    PublicationsZoomLevel2HoverResolver,
  ],
  exports: [
    PublicationsService,
    PublicationZoomLevel3Resolver,
    PublicationsAudioVisualResolver,
    PublicationsArticleResolver,
    PublicationsBookResolver,
    PublicationsSerialResolver,
    PublicationAuthorResolver,
    PublicationRelationsZoomLevel3Resolver,
    PublicationsZoomLevel2HoverResolver,
  ],
})
export class PublicationsModule {}
