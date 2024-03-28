import { Inject } from '@nestjs/common'
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk, StoryEntity } from '../../generated/strapi-sdk'
import { I18NLocaleCode, PaginationArg } from '../strapi/shared-types'
import {
  Story,
  StoryEntityResponseCollection,
  StoryFiltersInput,
  StoryWithoutRelationsEntityResponse,
  StoryWithoutRelationsEntityResponseCollection,
  StoryMetaEntityResponseCollection,
} from './story.type'
import { StoryEntityResponse } from './story.types.circular'
import { StoryService } from './story.service'

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
        locale: story?.locale,
      })

      return res.locations
    }
  }

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
  public constructor(
    @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
    private readonly storyService: StoryService
  ) {}

  @Query(() => StoryEntityResponseCollection)
  public async storyByLocale(
    @Args('filters', { nullable: true }) filters?: StoryFiltersInput,
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState,
    @Args('locale', { nullable: true }) locale?: I18NLocaleCode
  ) {
    const res = await this.strapiGqlSdk.storiesByLocale({
      id: filters?.id,
      publicationState,
      locale: ['nl', 'en'], // we only care about story id, which should be searched across all locales
    })

    const story = res?.stories?.data[0]

    if (story?.attributes?.locale === locale || !locale) {
      return { data: story }
    }

    const localizedStory =
      story?.attributes?.localizations?.data?.find(l => l.attributes?.locale === locale) || null

    return { data: localizedStory }
  }

  @Query(() => StoryMetaEntityResponseCollection)
  public async storyMetaByLocale(
    @Args('filters', { nullable: true }) filters?: StoryFiltersInput,
    @Args('locale', { nullable: true }) locale?: I18NLocaleCode,
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState
  ) {
    const res = await this.strapiGqlSdk.storiesMetaByLocale({
      id: filters?.id,
      publicationState,
      locale: ['nl', 'en'], // we only care about story id, which should be searched across all locales
    })

    let story = res?.stories?.data[0]

    if (locale && story?.attributes?.locale !== locale) {
      const localizedStory = story?.attributes?.localizations?.data.find(
        l => l?.attributes?.locale === locale
      )
      if (localizedStory) {
        story = localizedStory
      }
    }

    if (!story) {
      return { data: null }
    }

    const storyId = story.id
    const parentId = story.attributes?.story?.data?.id

    let siblings: StoryEntity[] | undefined | null = []
    if (parentId && storyId && locale && story.attributes) {
      siblings = (await this.storyService.getStorySiblings(
        parentId,
        storyId,
        locale
      )) as StoryEntity[]
    }

    return {
      data: {
        ...story,
        attributes: {
          ...story.attributes,
          ...(siblings.length ? { siblings } : {}),
        },
      },
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
    const res = await this.strapiGqlSdk.story({
      id,
      locale,
    })

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
