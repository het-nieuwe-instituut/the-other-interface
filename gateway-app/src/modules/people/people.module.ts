import { Module } from '@nestjs/common'
import { TripliModule } from '../tripli/tripli.module'
import { PeopleService } from './people.service'

@Module({
    imports: [TripliModule],
    providers: [PeopleService],
    exports: [PeopleService],
})
export class PeopleModule {}
