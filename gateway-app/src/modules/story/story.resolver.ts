import { Inject } from '@nestjs/common'
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { I18NLocaleCode, PaginationArg } from '../strapi/shared-types'
import {
  Story,
  StoryEntityResponse,
  StoryEntityResponseCollection,
  StoryFiltersInput,
  StoryWithoutRelationsEntityResponse,
  StoryWithoutRelationsEntityResponseCollection,
} from './story.type'

@Resolver(Story)
export class StoryFieldResolver {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

  @ResolveField()
  public async locations(@Parent() story: Story) {
    if (story.locations?.data && story.locations.data.length) {
      const res = await this.strapiGqlSdk.locations({
        filters: {
          or: story.locations.data.map(ent => {
            return { id: { eq: ent.id } }
          }),
        },
      })

      return res.locations
    }
  }
  //
  @ResolveField()
  public async author(@Parent() story: Story) {
    if (story.author?.data?.id) {
      const res = await this.strapiGqlSdk.author({ id: story.author?.data.id })
      return res.author
    }
    return null
  }
}

@Resolver()
export class StoryResolver {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

  @Query(() => StoryEntityResponseCollection)
  public async storiesByLocale(
    @Args('filters', { nullable: true }) filters?: StoryFiltersInput,
    @Args('pagination', { nullable: true }) pagination?: PaginationArg,
    @Args('sort', { nullable: true, type: () => [String] }) sort?: string[],
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
    @Args('locale', { nullable: true }) locale?: I18NLocaleCode
  ) {
    const res = await this.strapiGqlSdk.storyByLocale({ id: filters?.id?.eq })

    if (filters?.id?.eq === '3') {
      console.log('story', res.story?.data, res.story?.data?.attributes?.author)

      console.log(
        'localizedStory',
        res.story?.data?.attributes?.localizations?.data,
        res.story?.data?.attributes?.localizations?.data[0]?.attributes?.author
      )
    }

    if (res?.story?.data?.attributes?.locale === locale || !locale) {
      return {
        data: [res.story?.data],
      }
    }

    const localizedStory = res.story?.data?.attributes?.localizations?.data?.find(
      l => l.attributes?.locale === locale
    )

    if (localizedStory) {
      return {
        data: [localizedStory],
      }
    }

    return {
      data: [],
    }
  }

  @Query(() => StoryEntityResponseCollection)
  public async stories(
    @Args('filters', { nullable: true }) filters?: StoryFiltersInput,
    @Args('pagination', { nullable: true }) pagination?: PaginationArg,
    @Args('sort', { nullable: true, type: () => [String] }) sort?: string[],
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
    @Args('locale', { nullable: true }) locale?: I18NLocaleCode
  ) {
    const res = await this.strapiGqlSdk.stories({
      filters: filters || undefined,
      pagination: pagination || {},
      sort: sort || [],
      publicationState: publicationState || undefined,
      locale: locale || undefined,
    })

    return res.stories
  }

  @Query(() => StoryEntityResponse)
  public async story(
    @Args('id') id: string,
    @Args('locale', { nullable: true }) locale?: I18NLocaleCode
  ) {
    const res = await this.strapiGqlSdk.story({ id, locale })

    return res.story
  }

  @Query(() => StoryWithoutRelationsEntityResponseCollection)
  public async storiesWithoutRelations(
    @Args('filters', { nullable: true }) filters?: StoryFiltersInput,
    @Args('pagination', { nullable: true }) pagination?: PaginationArg,
    @Args('sort', { nullable: true, type: () => [String] }) sort?: string[],
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
    @Args('locale', { nullable: true }) locale?: I18NLocaleCode
  ) {
    const res = await this.strapiGqlSdk.storiesWithoutRelations({
      filters: filters || undefined,
      pagination: pagination || {},
      sort: sort || [],
      publicationState: publicationState || undefined,
      locale: locale || undefined,
    })

    return res.stories
  }

  @Query(() => StoryWithoutRelationsEntityResponse)
  public async storyWithoutRelations(
    @Args('id') id: string,
    @Args('locale', { nullable: true }) locale?: I18NLocaleCode
  ) {
    const res = await this.strapiGqlSdk.storyWithoutRelations({ id, locale })

    return res.story
  }
}
