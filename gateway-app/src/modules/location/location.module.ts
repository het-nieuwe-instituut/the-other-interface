import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { LocationResolver } from './location.resolver'

@Module({ imports: [StrapiModule], providers: [LocationResolver] })
export class LocationModule {}
