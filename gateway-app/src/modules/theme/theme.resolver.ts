import { Inject } from '@nestjs/common'
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { I18NLocaleCode, PaginationArg } from '../strapi/shared-types'
import {
  ThemeEntityResponse,
  ThemeFiltersInput,
  ThemeRelationResponseCollection,
} from './theme.type'
import { Theme } from './theme-dependency.type'

@Resolver()
export class ThemeResolver {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

  @Query(() => ThemeEntityResponse)
  public async theme(
    @Args('id') id: string,
    @Args('locale', { nullable: true }) locale: I18NLocaleCode
  ) {
    const res = await this.strapiGqlSdk.theme({ id, locale })

    return res.theme
  }

  @Query(() => ThemeRelationResponseCollection)
  public async themes(
    @Args('filters', { nullable: true }) filters?: ThemeFiltersInput,
    @Args('pagination', { nullable: true }) pagination?: PaginationArg,
    @Args('sort', { nullable: true, type: () => [String] }) sort?: string[],
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
    @Args('locale', { nullable: true }) locale?: I18NLocaleCode
  ) {
    const res = await this.strapiGqlSdk.themes({
      filters: filters || undefined,
      pagination: pagination || {},
      sort: sort || [],
      publicationState: publicationState || undefined,
      locale: locale || undefined,
    })

    return res.themes
  }
}

@Resolver(Theme)
export class ThemeFieldResolver {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

  @ResolveField()
  public async stories(@Parent() theme: Theme) {
    if (theme.stories?.data && theme.stories?.data.length) {
      const res = await this.strapiGqlSdk.stories({
        filters: {
          or: theme.stories.data.map(ent => {
            //TODO add image
            return {
              id: { eq: ent.id },
            }
          }),
        },
      })

      return res.stories
    }
    return []
  }

  @ResolveField()
  public async localizations(@Parent() theme: Theme) {
    if (theme.localizations?.data && theme.localizations.data.length) {
      const res = await this.strapiGqlSdk.themes({
        filters: {
          or: theme.localizations.data.map(ent => {
            return { id: { eq: ent.id } }
          }),
        },
      })

      return res.themes
    }
    return []
  }
}
