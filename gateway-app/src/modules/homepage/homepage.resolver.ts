import { Inject } from '@nestjs/common'
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import {
  HighlightedHomepageThemesQueryVariables,
  PublicationState,
  Sdk,
} from '../../generated/strapi-sdk'
import { LocaleArgs } from '../util/localeArgs.type'
import { Locale } from '../util/locale.type'
import { HighlightedHomepageThemeEntityResponse, HomepageEntityResponse } from './homepage.type'
import { PaginationArg } from '../strapi/shared-types'
import { CacheService } from '../util/cache.service'

@Resolver()
export class HomepageResolver {
  public constructor(
    @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
    private readonly cacheService: CacheService
  ) {}

  @Query(() => HomepageEntityResponse)
  public async homepage(
    @Args() { locale }: LocaleArgs,
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState
  ) {
    return this.cacheService.get(
      `homepage_${locale}_${publicationState}`,
      async () => (await this.strapiGqlSdk.homepage({ publicationState, locale })).homepage
    )
  }
}

@Resolver(HighlightedHomepageThemeEntityResponse)
export class HighlightedHomepageThemeEntityResolver {
  public constructor(
    @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
    private readonly cacheService: CacheService
  ) {}

  @Query(() => HighlightedHomepageThemeEntityResponse)
  public async highlightedHomepageThemes(
    @Args('locale') locale: Locale,
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
    @Args('paginationArgs', { nullable: true }) paginationArgs?: PaginationArg,
    @Args('storiesPaginationArgs', { nullable: true }) storiesPaginationArgs?: PaginationArg
  ) {
    const args: HighlightedHomepageThemesQueryVariables = {
      publicationState,
      locale,
      localeStr: locale,
      highlightedThemesPaginationArgs: paginationArgs,
      highlightedStoriesPaginationArgs: storiesPaginationArgs,
    }
    const key = CacheService.getCacheKeyFromStrings(
      publicationState,
      locale,
      CacheService.getOrderedObjectCacheKey(paginationArgs),
      CacheService.getOrderedObjectCacheKey(storiesPaginationArgs)
    )

    return this.cacheService.get(
      key,
      async () => (await this.strapiGqlSdk.highlightedHomepageThemes(args)).homepage
    )
  }

  @ResolveField()
  public async meta(
    @Parent() parent: HighlightedHomepageThemeEntityResponse,
    @Args('locale') locale: Locale,
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
    @Args('paginationArgs', { nullable: true }) paginationArgs?: PaginationArg
  ) {
    const args: HighlightedHomepageThemesQueryVariables = {
      publicationState,
      locale,
      localeStr: locale,
      highlightedThemesPaginationArgs: {
        page: 1,
        pageSize: 100000,
      },
    }

    const key = CacheService.getCacheKeyFromStrings(publicationState, locale)

    return this.cacheService.get(key, async () => {
      const res = await this.strapiGqlSdk.meta(args)
      const themeLength = res.homepage?.data?.attributes?.highlightedThemes?.data.length || 0

      return {
        pagination: {
          page: paginationArgs?.page,
          total: themeLength,
          pageCount: Math.ceil(themeLength / (paginationArgs?.pageSize || 1)),
          pageSize: paginationArgs?.pageSize,
        },
      }
    })
  }
}
