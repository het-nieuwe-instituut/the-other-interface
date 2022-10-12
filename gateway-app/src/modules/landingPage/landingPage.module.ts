import { Module } from '@nestjs/common'
import { StrapiModule } from '../strapi/strapi.module'
import { LandingPageResolver } from './landingPage.resolver'

@Module({
    imports: [StrapiModule],
    providers: [LandingPageResolver],
})
export class LandingPageModule {}
