import { Module } from '@nestjs/common'
import { PeopleService } from './people.service'

@Module({
    imports: [],
    providers: [PeopleService],
    exports: [PeopleService],
})
export class PeopleModule {}
