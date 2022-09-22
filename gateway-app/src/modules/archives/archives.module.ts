import { Module } from '@nestjs/common'
import { ArchivesService } from './archives.service'

@Module({
    imports: [],
    providers: [ArchivesService],
    exports: [ArchivesService],
})
export class ArchivesModule {}
