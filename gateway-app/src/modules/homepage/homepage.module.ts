import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { HomepageResolver } from './homepage.resolver'

@Module({
  imports: [StrapiModule],
  providers: [HomepageResolver],
})
export class HomepageModule {}
