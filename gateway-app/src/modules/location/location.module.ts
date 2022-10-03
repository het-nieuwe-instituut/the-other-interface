import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { LocationFieldResolver, LocationResolver } from './location.resolver'

@Module({ imports: [StrapiModule], providers: [LocationResolver, LocationFieldResolver] })
export class LocationModule {}
