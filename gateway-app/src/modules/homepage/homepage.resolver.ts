import { Inject } from '@nestjs/common'
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { Locale } from '../util/locale.type'
import {
  HighlightedHomepageStoryEntityResponse,
  HighlightedHomepageThemeEntityResponse,
  HomepageEntityResponse,
} from './homepage.type'
import { PaginationArg } from '../strapi/shared-types'

@Resolver()
export class HomepageResolver {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

  @Query(() => HomepageEntityResponse)
  public async homepage(
    @Args('locale') locale: Locale,
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState
  ) {
    return (
      await this.strapiGqlSdk.homepage({
        publicationState,
        locale,
      })
    ).homepage
  }
}

@Resolver(HighlightedHomepageThemeEntityResponse)
export class HighlightedHomepageThemeEntityResolver {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

  @Query(() => HighlightedHomepageThemeEntityResponse)
  public async highlightedHomepageThemes(
    @Args('locale') locale: Locale,
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
    @Args('paginationArgs', { nullable: true }) paginationArgs?: PaginationArg
  ) {
    const res = await this.strapiGqlSdk.highlightedHomepageThemes({
      publicationState,
      locale,
      localeStr: locale,
      highlightedThemesPaginationArgs: paginationArgs,
    })

    return res.homepage
  }

  @ResolveField()
  public async meta(
    @Parent() parent: HighlightedHomepageThemeEntityResponse,
    @Args('locale') locale: Locale,
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
    @Args('paginationArgs', { nullable: true }) paginationArgs?: PaginationArg
  ) {
    const res = await this.strapiGqlSdk.meta({
      publicationState,
      locale,
      localeStr: locale,
      highlightedThemesPaginationArgs: {
        page: 1,
        pageSize: 100000,
      },
    })

    return {
      pagination: {
        page: 1, // this is to maintain the meta data structure
        total: res.homepage?.data?.attributes?.highlightedThemes?.data.length,
        pageCount: res.homepage?.data?.attributes?.highlightedThemes?.data.length,
        pageSize: 1, // this is to maintain the meta data structure
      },
    }
  }
}
