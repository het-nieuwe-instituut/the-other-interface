import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel3Module } from '../zoomLevel3/zoomLevel3.module'
import { ArchivesFondsCreatorResolver, ArchivesOtherResolver } from './archives.resolver'
import { ArchivesService } from './archives.service'

@Module({
  imports: [forwardRef(() => ZoomLevel3Module)],
  providers: [ArchivesService, ArchivesOtherResolver, ArchivesFondsCreatorResolver],
  exports: [ArchivesService, ArchivesOtherResolver, ArchivesFondsCreatorResolver],
})
export class ArchivesModule {}
