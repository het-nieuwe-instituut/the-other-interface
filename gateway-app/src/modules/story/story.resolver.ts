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
  public async locations(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return story.id ? loaders.storyLocations.load(story.id) : null
  }

  @ResolveField()
  public async author(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return story.id ? loaders.storyAuthor.load(story.id) : null
  }

  @ResolveField()
  public async themes(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return story.id ? loaders.storyThemes.load(story.id) : null
  }

  @ResolveField()
  public async parent_story(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return story.id ? loaders.storyParentStory.load(story.id) : null
  }

  @ResolveField()
  public async child_stories(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return story.id ? loaders.storyChildStories.load(story.id) : null
  }

  @ResolveField()
  public async siblings(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return story.id ? loaders.storySiblings.load(story.id) : null
  }

  @ResolveField()
  public async components(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return story.id ? loaders.storyComponents.load(story.id) : null
  }

  @ResolveField()
  public async localizations(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return story.id ? loaders.storyLocalizations.load(story.id) : null
  }

  @ResolveField()
  public async triplyRecords(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return story.id ? loaders.storyTriplyRecords.load(story.id) : null
  }

  @ResolveField()
  public async storyLinks(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return story.id ? loaders.storyStoryLinks.load(story.id) : null
  }

  @ResolveField()
  public async timeframe(@Parent() story: StoryEntity, @Context() { loaders }: GraphqlContext) {
    return story.id ? loaders.storyTimeframe.load(story.id) : null
  }

  @ResolveField()
  public async publicationDate(
    @Parent() story: StoryEntity,
    @Context() { loaders }: GraphqlContext
  ) {
    return story.id ? loaders.storyPublicationDate.load(story.id) : null
  }
}

@Resolver()
export class StoryResolver {
  public constructor(@Inject('StrapiGqlSDK') private readonly strapiGqlSdk: Sdk) {}

  @Query(() => StoryEntityResponse)
  public async storyByLocale(@Args() { locale }: LocaleArgs, @Args('id') id: string) {
    const res = await this.strapiGqlSdk.storiesWithLocalizations({ ids: [id] })

    const story = res.stories?.data[0]
    if (!story) {
      return { data: null }
    }

    const localization = story.attributes?.localizations?.data.find(
      l => l.attributes?.locale === locale
    )

    if (!localization) {
      return { data: null }
    }

    return { data: localization }
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
