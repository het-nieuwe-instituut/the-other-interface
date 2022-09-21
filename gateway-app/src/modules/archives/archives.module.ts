import { Module } from '@nestjs/common'
import { TripliModule } from '../tripli/tripli.module'
import { ArchivesService } from './archives.service'

@Module({
    imports: [TripliModule],
    providers: [ArchivesService],
    exports: [ArchivesService],
})
export class ArchivesModule {}
