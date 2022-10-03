import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { TriplyRecordFieldResolver, TriplyRecordResolver } from './triplyRecord.resolver'

@Module({
    imports: [StrapiModule],
    providers: [TriplyRecordResolver, TriplyRecordFieldResolver],
})
export class TriplyRecordModule {}
