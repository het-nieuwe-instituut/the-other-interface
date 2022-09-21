import { Module } from '@nestjs/common'
import { TripliModule } from '../tripli/tripli.module'
import { ObjectsService } from './objects.service'

@Module({
    imports: [TripliModule],
    providers: [ObjectsService],
    exports: [ObjectsService],
})
export class ObjectsModule {}
