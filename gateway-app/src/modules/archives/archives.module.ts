import { Module } from '@nestjs/common'
import {
  ArchivesRecordZoomLevel3Resolver,
  ArchivesRelationsZoomLevel3Resolver,
  ArchivesZoomLevel3DetailResolver,
  ArchivesZoomLevelRecordHoverResolver,
} from './archives.resolver'
import { ArchivesService } from './archives.service'

@Module({
  providers: [
    ArchivesService,
    ArchivesRelationsZoomLevel3Resolver,
    ArchivesZoomLevelRecordHoverResolver,
    ArchivesZoomLevel3DetailResolver,
    ArchivesRecordZoomLevel3Resolver,
  ],
  exports: [
    ArchivesService,
    ArchivesRelationsZoomLevel3Resolver,
    ArchivesZoomLevelRecordHoverResolver,
    ArchivesZoomLevel3DetailResolver,
    ArchivesRecordZoomLevel3Resolver,
  ],
})
export class ArchivesModule {}
