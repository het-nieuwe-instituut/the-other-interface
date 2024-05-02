import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'
import {
  ArchivesFondsCreatorResolver,
  ArchivesOtherResolver,
  ArchivesRelationsZoomLevel3Resolver,
  ArchivesZoomLevel2HoverResolver,
  ArchivesZoomLevel3Resolver,
} from './archives.resolver'
import { ArchivesService } from './archives.service'

@Module({
  imports: [forwardRef(() => ZoomLevel3Module)],
  providers: [
    ArchivesService,
    ArchivesZoomLevel3Resolver,
    ArchivesOtherResolver,
    ArchivesFondsCreatorResolver,
    ArchivesRelationsZoomLevel3Resolver,
    ArchivesZoomLevel2HoverResolver,
  ],
  exports: [
    ArchivesService,
    ArchivesZoomLevel3Resolver,
    ArchivesOtherResolver,
    ArchivesFondsCreatorResolver,
    ArchivesRelationsZoomLevel3Resolver,
    ArchivesZoomLevel2HoverResolver,
  ],
})
export class ArchivesModule {}
