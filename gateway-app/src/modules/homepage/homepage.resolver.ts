import { Inject } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { log } from 'console'

import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { I18NLocaleCode } from '../strapi/shared-types'
import { HomepageEntityResponse } from './homepage.type'

@Resolver()
export class HomepageResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

    @Query(() => HomepageEntityResponse)
    public async homepage(
        @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
        @Args('locale', { nullable: true }) locale?: I18NLocaleCode
    ) {
        log('req: Homepage')
        return (await this.strapiGqlSdk.homepage({ publicationState, locale })).homepage
    }
}
