import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'
import {
  ArchivesFondsCreatorResolver,
  ArchivesOtherResolver,
  ArchivesRelationsZoomLevel3Resolver,
  ArchivesZoomLevelRecordHoverResolver,
} from './archives.resolver'
import { ArchivesService } from './archives.service'

@Module({
  imports: [forwardRef(() => ZoomLevel3Module)],
  providers: [
    ArchivesService,
    ArchivesOtherResolver,
    ArchivesFondsCreatorResolver,
    ArchivesRelationsZoomLevel3Resolver,
    ArchivesZoomLevelRecordHoverResolver,
  ],
  exports: [
    ArchivesService,
    ArchivesOtherResolver,
    ArchivesFondsCreatorResolver,
    ArchivesRelationsZoomLevel3Resolver,
    ArchivesZoomLevelRecordHoverResolver,
  ],
})
export class ArchivesModule {}
