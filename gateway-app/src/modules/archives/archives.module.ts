import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel5Module } from '../zoomLevel5/zoomLevel5.module'
import { ArchivesOtherResolver } from './archives.resolver'
import { ArchivesService } from './archives.service'

@Module({
    imports: [forwardRef(() => ZoomLevel5Module)],
    providers: [ArchivesService, ArchivesOtherResolver],
    exports: [ArchivesService, ArchivesOtherResolver],
})
export class ArchivesModule {}
