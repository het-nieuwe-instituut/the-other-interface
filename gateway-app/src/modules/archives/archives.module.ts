import { forwardRef, Module } from '@nestjs/common'
import { ZoomLevel5Module } from '../zoomLevel5/zoomLevel5.module'
import { ArchivesFondsCreatorResolver, ArchivesOtherResolver } from './archives.resolver'
import { ArchivesService } from './archives.service'

@Module({
  imports: [forwardRef(() => ZoomLevel5Module)],
  providers: [ArchivesService, ArchivesOtherResolver, ArchivesFondsCreatorResolver],
  exports: [ArchivesService, ArchivesOtherResolver, ArchivesFondsCreatorResolver],
})
export class ArchivesModule {}
