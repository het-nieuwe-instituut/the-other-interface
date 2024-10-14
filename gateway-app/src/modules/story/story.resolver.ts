import { Inject } from '@nestjs/common'
import { Args, Context, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PublicationState, Sdk } from '../../generated/strapi-sdk'
import { PaginationArg } from '../strapi/shared-types'
import { StoryEntity, StoryEntityResponseCollection, StoryFiltersInput } from './story.type'
import { StoryEntityResponse } from './story.types.circular'
import { LocaleArgs } from '../util/localeArgs.type'
import { GraphqlContext } from 'src/app.module'

@Resolver(StoryEntity)
export class StoryFieldResolver {
  @ResolveField()
  public async locations(
    @Parent() story: StoryEntity,
    @Context() { loaders }: GraphqlContext
  ): Promise<StoryEntity['locations'] | null> {
    return loaders.storyLocations.load(story.id)
  }

  @ResolveField()
  public async authors(
    @Parent() story: StoryEntity,
    @Context() { loaders }: GraphqlContext
  ): Promise<StoryEntity['authors'] | null> {
    return loaders.storyAuthors.load(story.id)
  }

  @ResolveField()
  public async themes(
    @Parent() story: StoryEntity,
    @Context() { loaders }: GraphqlContext
  ): Promise<StoryEntity['themes'] | null> {
    return loaders.storyThemes.load(story.id)
  }

  @ResolveField()
  public async parent_story(
    @Parent() story: StoryEntity,
    @Context() { loaders }: GraphqlContext
  ): Promise<StoryEntity['parent_story'] | null> {
    return loaders.storyParentStory.load(story.id)
  }

  @ResolveField()
  public async child_stories(
    @Parent() story: StoryEntity,
    @Context() { loaders }: GraphqlContext
  ): Promise<StoryEntity['child_stories'] | null> {
    return loaders.storyChildStories.load(story.id)
  }

  @ResolveField()
  public async siblings(
    @Parent() story: StoryEntity,
    @Context() { loaders }: GraphqlContext
  ): Promise<StoryEntity['siblings'] | null> {
    return loaders.storySiblings.load(story.id)
  }

  @ResolveField()
  public async components(
    @Parent() story: StoryEntity,
    @Context() { loaders }: GraphqlContext
  ): Promise<StoryEntity['components'] | null> {
    return loaders.storyComponents.load(story.id)
  }

  @ResolveField()
  public async localizations(
    @Parent() story: StoryEntity,
    @Context() { loaders }: GraphqlContext
  ): Promise<StoryEntity['localizations'] | null> {
    return loaders.storyLocalizations.load(story.id)
  }

  @ResolveField()
  public async triplyRecords(
    @Parent() story: StoryEntity,
    @Context() { loaders }: GraphqlContext
  ): Promise<StoryEntity['triplyRecords'] | null> {
    return loaders.storyTriplyRecords.load(story.id)
  }

  @ResolveField()
  public async storyLinks(
    @Parent() story: StoryEntity,
    @Context() { loaders }: GraphqlContext
  ): Promise<StoryEntity['storyLinks'] | null> {
    return loaders.storyStoryLinks.load(story.id)
  }

  @ResolveField()
  public async timeframe(
    @Parent() story: StoryEntity,
    @Context() { loaders }: GraphqlContext
  ): Promise<StoryEntity['timeframe'] | null> {
    return loaders.storyTimeframe.load(story.id)
  }

  @ResolveField()
  public async publicationDate(
    @Parent() story: StoryEntity,
    @Context() { loaders }: GraphqlContext
  ): Promise<StoryEntity['publicationDate'] | null> {
    return loaders.storyPublicationDate.load(story.id)
  }

  @ResolveField()
  public async thumbnail(
    @Parent() story: StoryEntity,
    @Context() { loaders }: GraphqlContext
  ): Promise<StoryEntity['thumbnail'] | null> {
    return loaders.storyThumbnail.load(story.id)
  }
}

@Resolver()
export class StoryResolver {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

  @Query(() => StoryEntityResponse)
  public async storyByLocale(
    @Args() { locale }: LocaleArgs,
    @Args('id') id: string,
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState
  ): Promise<StoryEntityResponse> {
    const res = await this.strapiGqlSdk.storiesWithLocalizations({
      ids: [id],
      publicationState: publicationState || undefined,
    })

    const story = res.stories?.data[0]
    if (!story) {
      return { data: undefined }
    }

    if (story.attributes?.locale === locale) {
      return { data: story } as StoryEntityResponse
    }

    const localization = story.attributes?.localizations?.data.find(
      l => l.attributes?.locale === locale
    )

    if (!localization) {
      return { data: undefined }
    }

    return { data: localization } as StoryEntityResponse
  }

  @Query(() => StoryEntityResponseCollection)
  public async stories(
    @Args() { locale }: LocaleArgs,
    @Args('filters', { nullable: true }) filters?: StoryFiltersInput,
    @Args('pagination', { nullable: true }) pagination?: PaginationArg,
    @Args('sort', { nullable: true, type: () => [String] }) sort?: string[],
    @Args('publicationState', { nullable: true }) publicationState?: PublicationState
  ): Promise<StoryEntityResponseCollection> {
    const res = await this.strapiGqlSdk.stories({
      filters: filters || undefined,
      pagination: pagination || {},
      sort: sort || [],
      publicationState: publicationState || undefined,
      locale: locale || undefined,
    })

    return res.stories as StoryEntityResponseCollection
  }

  @Query(() => StoryEntityResponse)
  public async story(
    @Args('id') id: string,
    @Args() { locale }: LocaleArgs
  ): Promise<StoryEntityResponse> {
    const res = await this.strapiGqlSdk.story({
      id,
      locale,
    })

    return res.story as StoryEntityResponse
  }
}
