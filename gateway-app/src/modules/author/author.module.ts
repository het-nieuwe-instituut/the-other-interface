import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { AuthorResolver } from './author.resolver'

@Module({ imports: [StrapiModule], providers: [AuthorResolver] })
export class AuthorModule {}
