import { Inject } from '@nestjs/common'
import { Args, Context, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { PaginationArg } from '../strapi/shared-types'
import {
  StoryEntity,
  StoryEntityResponseCollection,
  StoryFiltersInput,
  StoryMetaEntityResponseCollection,
} from './story.type'
import { StoryEntityResponse } from './story.types.circular'
import { StoryService } from './story.service'
import { LocaleArgs } from '../util/localeArgs.type'
import { GraphqlContext } from 'src/app.module'

@Resolver(StoryEntity)
export class StoryFieldResolver {
  @ResolveField()
  public async locations(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return loaders.storyLocations.load(story.id)
  }

  @ResolveField()
  public async author(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return loaders.storyAuthor.load(story.id)
  }

  @ResolveField()
  public async themes(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return loaders.storyThemes.load(story.id)
  }

  @ResolveField()
  public async parent_story(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return loaders.storyParentStory.load(story.id)
  }

  @ResolveField()
  public async child_stories(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return loaders.storyChildStories.load(story.id)
  }

  @ResolveField()
  public async siblings(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return loaders.storySiblings.load(story.id)
  }

  @ResolveField()
  public async components(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return loaders.storyComponents.load(story.id)
  }

  @ResolveField()
  public async localizations(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return loaders.storyLocalizations.load(story.id)
  }

  @ResolveField()
  public async triplyRecords(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return loaders.storyTriplyRecords.load(story.id)
  }

  @ResolveField()
  public async storyLinks(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return loaders.storyStoryLinks.load(story.id)
  }

  @ResolveField()
  public async timeframe(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return loaders.storyTimeframe.load(story.id)
  }

  @ResolveField()
  public async publicationDate(
    @Parent() story: StoryEntity,
    @Context() { loaders }: GraphqlContext
  ) {
    return loaders.storyPublicationDate.load(story.id)
  }
}

@Resolver()
export class StoryResolver {
  public constructor(
    @Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk,
    private readonly storyService: StoryService
  ) {}

  @Query(() => StoryEntityResponse)
  public async storyByLocale(
    @Args() { locale }: LocaleArgs,
    @Args('filters', { nullable: true }) filters?: StoryFiltersInput,
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState
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
    @Args() { locale }: LocaleArgs,
    @Args('filters', { nullable: true }) filters?: StoryFiltersInput,
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
    const parentId = story.attributes?.parent_story?.data?.id

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
    @Args() { locale }: LocaleArgs,
    @Args('filters', { nullable: true }) filters?: StoryFiltersInput,
    @Args('pagination', { nullable: true }) pagination?: PaginationArg,
    @Args('sort', { nullable: true, type: () => [String] }) sort?: string[],
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState
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
  public async story(@Args('id') id: string, @Args() { locale }: LocaleArgs) {
    const res = await this.strapiGqlSdk.story({
      id,
      locale,
    })

    return res.story
  }
}
