import { Module } from '@nestjs/common'
import { PublicationsService } from './publications.service'

@Module({
    imports: [],
    providers: [PublicationsService],
    exports: [PublicationsService],
})
export class PublicationsModule {}
