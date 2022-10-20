import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel5Module } from '../zoomLevel5/zoomLevel5.module'
import {
    PublicationsArticleResolver,
    PublicationsAudioVisualResolver,
    PublicationsBookResolver,
} from './publications.resolver'
import { PublicationsService } from './publications.service'

@Module({
    imports: [forwardRef(() => ZoomLevel5Module)],
    providers: [
        PublicationsService,
        PublicationsAudioVisualResolver,
        PublicationsArticleResolver,
        PublicationsBookResolver,
    ],
    exports: [
        PublicationsService,
        PublicationsAudioVisualResolver,
        PublicationsArticleResolver,
        PublicationsBookResolver,
    ],
})
export class PublicationsModule {}
