import { Inject } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { PaginationArg } from '../strapi/shared-types'
import { LocaleArgs } from '../util/localeArgs.type'
import {
  LandingpageEntity,
  LandingpageEntityResponse,
  LandingpageEntityResponseCollection,
} from './landingPage.type'
import { LandingpageFiltersInput } from './landingPage.type.circular'

@Resolver(LandingpageEntity)
export class LandingPageResolver {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

  @Query(() => LandingpageEntityResponse)
  public async landingpage(@Args('id') id: string, @Args() { locale }: LocaleArgs) {
    return (await this.strapiGqlSdk.landingPage({ id, locale })).landingpage
  }

  @Query(() => LandingpageEntityResponseCollection)
  public async landingpages(
    @Args() { locale }: LocaleArgs,
    @Args('filters', { nullable: true }) filters?: LandingpageFiltersInput,
    @Args('pagination', { nullable: true }) pagination?: PaginationArg,
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
    @Args('sort', { nullable: true, type: () => [String] }) sort?: string[]
  ) {
    return (
      await this.strapiGqlSdk.landingPages({ filters, pagination, sort, publicationState, locale })
    ).landingpages
  }
}
