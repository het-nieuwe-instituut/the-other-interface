import { ObjectType, Field, createUnionType, ID, InputType } from '@nestjs/graphql'
import { AuthorEntityResponseCollection, AuthorFiltersInput } from '../author/author.type'
import { LocationFiltersInput, LocationEntity } from '../location/location.type'
import {
  ComponentCorePublicationDate,
  ComponentCorePublicationDateFiltersInput,
} from '../strapi/components/core/publicationDate'
import {
  ComponentCoreTimeframe,
  ComponentCoreTimeframeFiltersInput,
} from '../strapi/components/core/timeframe'

import {
  ComponentModulesButtonsModule,
  ComponentModulesButtonsModuleFiltersInput,
} from '../strapi/components/modules/buttonsModule'
import { ComponentModulesImageCarousel } from '../strapi/components/modules/imageCarousel'
import { ComponentModulesImage } from '../strapi/components/modules/imageModule'
import { ComponentModulesPullquote } from '../strapi/components/modules/pullQuote'
import { ComponentModulesSubtitle } from '../strapi/components/modules/subtitle'
import { ComponentModulesTextModule } from '../strapi/components/modules/textModule'
import { ComponentModulesTitleModule } from '../strapi/components/modules/titleModule'
import {
  DateTimeFilterInput,
  Error,
  IdFilterInput,
  ResponseCollectionMeta,
  StringFilterInput,
} from '../strapi/shared-types'
import { TriplyRecordFiltersInput, TriplyRecordEntity } from '../triplyRecord/triplyRecord.type'
import { ThemeFiltersInput, ThemeEntity } from '../theme/theme.type'
import { StoryEntityResponse } from './story.types.circular'
import { ComponentCoreStandAloneLink } from '../strapi/components/core/standAloneLink'
import { ComponentCoreMuxAudio } from '../strapi/components/core/muxAudio'
import { ComponentCoreMuxVideo } from '../strapi/components/core/muxVideo'
import { ComponentModulesSideImageWithText } from '../strapi/components/modules/sideImageWithText'
import { ComponentModulesStandaloneLinks } from '../strapi/components/modules/standAloneLinks'
import { ComponentCoreImageThumbnail } from '../strapi/components/core/imageThumbnail'

@ObjectType()
export class StoryRelationResponseCollection {
  @Field(() => [StoryEntity], { nullable: true })
  public data?: StoryEntity[]
}

@ObjectType()
export class Story {
  @Field({ nullable: true })
  public createdAt: Date

  @Field({ nullable: true })
  public description?: string

  @Field({ nullable: true })
  public locale?: string

  @Field({ nullable: true })
  public publishedAt: Date

  @Field()
  public shortDescription: string

  @Field({ nullable: true })
  public slug?: string

  @Field()
  public title: string

  @Field({ nullable: true })
  public updatedAt: Date
}

export const StoryComponentsDynamicZone = createUnionType({
  name: 'StoryComponentsDynamicZone',
  types: () =>
    [
      ComponentModulesStandaloneLinks,
      ComponentModulesButtonsModule,
      ComponentModulesImage,
      ComponentModulesImageCarousel,
      ComponentModulesPullquote,
      ComponentModulesSubtitle,
      ComponentModulesTextModule,
      ComponentModulesTitleModule,
      ComponentCoreStandAloneLink,
      ComponentCoreMuxAudio,
      ComponentCoreMuxVideo,
      ComponentModulesSideImageWithText,
      Error,
    ] as const,
  resolveType(value) {
    return value.__typename
  },
})

@ObjectType()
export class StoryEntity {
  @Field({ nullable: true })
  public attributes?: Story

  @Field(() => ID)
  public id: string

  //////////////////// relations ////////////////////

  @Field(() => AuthorEntityResponseCollection, { nullable: true })
  public authors?: AuthorEntityResponseCollection

  @Field(() => [LocationEntity], { nullable: true })
  public locations?: LocationEntity[]

  @Field(() => [ThemeEntity], { nullable: true })
  public themes?: ThemeEntity[]

  @Field({ nullable: true })
  public parent_story?: StoryEntityResponse

  @Field(() => [StoryEntity], { nullable: true })
  public child_stories?: StoryEntity[]

  @Field(() => [StoryEntity], { nullable: true })
  public siblings?: StoryEntity[]

  @Field(() => [StoryComponentsDynamicZone], { nullable: true })
  // eslint-disable-next-line prettier/prettier
  public components?: (typeof StoryComponentsDynamicZone)[]

  @Field(() => [StoryEntity], { nullable: true })
  public localizations?: StoryEntity[]

  @Field(() => [TriplyRecordEntity], { nullable: true })
  public triplyRecords?: TriplyRecordEntity[]

  @Field(() => ComponentModulesButtonsModule, { nullable: true })
  public storyLinks?: ComponentModulesButtonsModule

  @Field(() => ComponentCoreTimeframe, { nullable: true })
  public timeframe?: ComponentCoreTimeframe

  @Field(() => ComponentCorePublicationDate, { nullable: true })
  public publicationDate?: ComponentCorePublicationDate

  @Field(() => ComponentCoreImageThumbnail, { nullable: true })
  public thumbnail?: ComponentCoreImageThumbnail
}

@ObjectType()
export class StoryEntityResponseCollection {
  @Field(() => [StoryEntity], { nullable: true })
  public data?: StoryEntity[]

  @Field(() => ResponseCollectionMeta, { nullable: true })
  public meta: ResponseCollectionMeta
}

@ObjectType()
export class StoryMetaEntityResponseCollection {
  @Field(() => StoryEntity, { nullable: true })
  public data?: StoryEntity
}

@InputType()
export class StoryFiltersInput {
  @Field(() => [StoryFiltersInput], { nullable: true })
  public and?: StoryFiltersInput[]

  @Field(() => DateTimeFilterInput, { nullable: true })
  public createdAt?: DateTimeFilterInput

  @Field(() => StringFilterInput, { nullable: true })
  public firstName?: StringFilterInput

  @Field(() => IdFilterInput, { nullable: true })
  public id?: IdFilterInput

  @Field(() => StringFilterInput, { nullable: true })
  public insertion?: StringFilterInput

  @Field(() => StringFilterInput, { nullable: true })
  public lastName?: StringFilterInput

  @Field(() => StoryFiltersInput, { nullable: true })
  public not?: StoryFiltersInput

  @Field(() => [StoryFiltersInput], { nullable: true })
  public or?: StoryFiltersInput[]

  @Field(() => DateTimeFilterInput, { nullable: true })
  public publishedAt?: DateTimeFilterInput

  @Field(() => DateTimeFilterInput, { nullable: true })
  public updatedAt?: DateTimeFilterInput

  @Field(() => AuthorFiltersInput, { nullable: true })
  public authors?: AuthorFiltersInput

  @Field(() => StringFilterInput, { nullable: true })
  public description?: StringFilterInput

  @Field(() => StringFilterInput, { nullable: true })
  public locale?: StringFilterInput

  @Field(() => StoryFiltersInput, { nullable: true })
  public localizations?: StoryFiltersInput

  @Field(() => LocationFiltersInput, { nullable: true })
  public locations?: LocationFiltersInput

  @Field(() => ComponentCorePublicationDateFiltersInput, { nullable: true })
  public publicationDate?: ComponentCorePublicationDateFiltersInput

  @Field(() => StringFilterInput, { nullable: true })
  public shortDescription?: StringFilterInput

  @Field(() => StringFilterInput, { nullable: true })
  public slug?: StringFilterInput

  @Field(() => ComponentModulesButtonsModuleFiltersInput, { nullable: true })
  public storyLinks?: ComponentModulesButtonsModuleFiltersInput

  @Field(() => ComponentCoreTimeframeFiltersInput, { nullable: true })
  public timeframe?: ComponentCoreTimeframeFiltersInput

  @Field(() => StringFilterInput, { nullable: true })
  public title?: StringFilterInput

  @Field(() => TriplyRecordFiltersInput, { nullable: true })
  public triplyRecords?: TriplyRecordFiltersInput

  @Field(() => StoryFiltersInput, { nullable: true })
  public child_stories?: StoryFiltersInput

  @Field(() => StoryFiltersInput, { nullable: true })
  public parent_story?: StoryFiltersInput

  @Field(() => StoryFiltersInput, { nullable: true })
  public siblings?: StoryFiltersInput

  @Field(() => ThemeFiltersInput, { nullable: true })
  public themes?: ThemeFiltersInput
}
