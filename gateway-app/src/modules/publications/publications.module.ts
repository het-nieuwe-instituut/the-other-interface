import { Module } from '@nestjs/common'
import { TripliModule } from '../tripli/tripli.module'
import { PublicationsService } from './publications.service'

@Module({
    imports: [TripliModule],
    providers: [PublicationsService],
    exports: [PublicationsService],
})
export class PublicationsModule {}
