import { Inject } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { TableEntityResponse } from '../strapi/components/modules/tableModule'
import { PaginationArg } from '../strapi/shared-types'
import { TableEntityResponseCollection, TableFiltersInput } from './table.type'

@Resolver()
export class TableResolver {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

  @Query(() => TableEntityResponse)
  public async table(@Args('id', { nullable: true }) id?: string) {
    return (await this.strapiGqlSdk.table({ id })).table
  }

  @Query(() => TableEntityResponseCollection)
  public async tables(
    @Args('filters', { nullable: true }) filters?: TableFiltersInput,
    @Args('pagination', { nullable: true }) pagination?: PaginationArg,
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
    @Args('sort', { nullable: true, type: () => [String] }) sort?: string[]
  ) {
    return (await this.strapiGqlSdk.tables({ filters, pagination, sort, publicationState })).tables
  }
}
