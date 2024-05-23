import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { TableResolver } from './table.resolver'

@Module({
  imports: [StrapiModule],
  providers: [TableResolver],
})
export class TableModule {}
