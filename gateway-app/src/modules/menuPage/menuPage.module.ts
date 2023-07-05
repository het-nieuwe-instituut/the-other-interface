import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { MenuPageResolver } from './menuPage.resolver'

@Module({
  imports: [StrapiModule],
  providers: [MenuPageResolver],
})
export class MenuPageModule {}
