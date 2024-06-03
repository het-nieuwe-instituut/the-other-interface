import { Inject } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
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

  @Query(() => HighlightedHomepageStoryEntityResponse)
  public async highlightedHomepageStories(
    @Args('locale') locale: Locale,
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
    @Args('paginationArgs', { nullable: true }) paginationArgs?: PaginationArg
  ) {
    return (
      await this.strapiGqlSdk.highlightedHomepageStories({
        publicationState,
        locale,
        localeStr: locale,
        highlightedStoriesPaginationArgs: paginationArgs,
      })
    ).homepage
  }

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
}
