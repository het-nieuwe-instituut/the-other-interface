import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { ThemeFieldResolver, ThemeResolver } from './theme.resolver'

@Module({ imports: [StrapiModule], providers: [ThemeResolver, ThemeFieldResolver] })
export class ThemeModule {}
