import { Inject } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { PaginationArg } from '../strapi/shared-types'
import { Locale } from '../util/locale.type'
import {
  MenupageEntityResponse,
  MenupageEntityResponseCollection,
  MenupageFiltersInput,
} from './menuPage.type'

@Resolver()
export class MenuPageResolver {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

  @Query(() => MenupageEntityResponse)
  public async menupage(
    @Args('locale') locale: Locale,
    @Args('id', { nullable: true }) id?: string
  ) {
    return (await this.strapiGqlSdk.menuPage({ id, locale })).menupage
  }

  @Query(() => MenupageEntityResponseCollection)
  public async menupages(
    @Args('locale') locale: Locale,
    @Args('filters', { nullable: true }) filters?: MenupageFiltersInput,
    @Args('pagination', { nullable: true }) pagination?: PaginationArg,
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
    @Args('sort', { nullable: true, type: () => [String] }) sort?: string[]
  ) {
    return (
      await this.strapiGqlSdk.menuPages({ filters, pagination, sort, publicationState, locale })
    ).menupages
  }
}
