import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'
import { ArchivesZoomLevel3Resolver } from './archives.resolver'
import { ArchivesService } from './archives.service'

@Module({
  imports: [forwardRef(() => ZoomLevel3Module)],
  providers: [ArchivesService, ArchivesZoomLevel3Resolver],
  exports: [ArchivesService, ArchivesZoomLevel3Resolver],
})
export class ArchivesModule {}
