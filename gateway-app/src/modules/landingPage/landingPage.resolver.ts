import { Inject } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { I18NLocaleCode, PaginationArg } from '../strapi/shared-types'
import { LandingpageEntity, LandingpageEntityResponse, LandingpageEntityResponseCollection } from './landingPage.type'
import { LandingpageFiltersInput } from './landingPage.type.circular'

@Resolver(LandingpageEntity)
export class LandingPageResolver {
    public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

    @Query(() => LandingpageEntityResponse)
    public async landingpage(
        @Args('id', { nullable: true }) id?: string,
        @Args('locale', { nullable: true }) locale?: I18NLocaleCode
    ) {
        return (await this.strapiGqlSdk.landingPage({ id, locale })).landingpage
    }

    @Query(() => LandingpageEntityResponseCollection)
    public async landingpages(
        @Args('filters', { nullable: true }) filters?: LandingpageFiltersInput,
        @Args('pagination', { nullable: true }) pagination?: PaginationArg,
        @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
        @Args('locale', { nullable: true }) locale?: I18NLocaleCode,
        @Args('sort', { nullable: true, type: () => [String] }) sort?: string[]
    ) {
        return (await this.strapiGqlSdk.landingPages({ filters, pagination, sort, publicationState, locale }))
            .landingpages
    }
}
