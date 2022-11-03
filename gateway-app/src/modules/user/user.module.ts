import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { UserResolver } from './user.resolver'

@Module({
    imports: [StrapiModule],
    providers: [UserResolver],
})
export class UserModule {}
