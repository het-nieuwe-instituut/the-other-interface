import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'
import {
  PublicationAuthorResolver,
  PublicationsArticleResolver,
  PublicationsAudioVisualResolver,
  PublicationsBookResolver,
  PublicationsSerialResolver,
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
  ],
  exports: [
    PublicationsService,
    PublicationsAudioVisualResolver,
    PublicationsArticleResolver,
    PublicationsBookResolver,
    PublicationsSerialResolver,
    PublicationAuthorResolver,
  ],
})
export class PublicationsModule {}
