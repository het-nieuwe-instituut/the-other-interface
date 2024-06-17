import { Inject } from '@nestjs/common'
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { LocaleArgs } from '../util/localeArgs.type'
import { Locale } from '../util/locale.type'
import { HighlightedHomepageThemeEntityResponse, HomepageEntityResponse } from './homepage.type'
import { PaginationArg } from '../strapi/shared-types'

@Resolver()
export class HomepageResolver {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

  @Query(() => HomepageEntityResponse)
  public async homepage(
    @Args() { locale }: LocaleArgs,
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
        page: paginationArgs?.page,
        total: res.homepage?.data?.attributes?.highlightedThemes?.data.length,
        pageCount: Math.ceil(
          (res.homepage?.data?.attributes?.highlightedThemes?.data.length || 0) /
            (paginationArgs?.pageSize || 1)
        ),
        pageSize: paginationArgs?.pageSize,
      },
    }
  }
}
