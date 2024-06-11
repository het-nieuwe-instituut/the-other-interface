import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { HighlightedHomepageThemeEntityResolver, HomepageResolver } from './homepage.resolver'

@Module({
  imports: [StrapiModule],
  providers: [HomepageResolver, HighlightedHomepageThemeEntityResolver],
})
export class HomepageModule {}
