import { ObjectType, Field, createUnionType, ID, InputType, PickType } from '@nestjs/graphql'
import { AuthorEntityResponse, AuthorFiltersInput } from '../author/author.type'
import { LocationFiltersInput, LocationRelationResponseCollection } from '../location/location.type'
import { ComponentModulesGridModule } from '../strapi/components/modules/gridModule'
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
import { ComponentModulesCarousel } from '../strapi/components/modules/carousel'
import { ComponentModulesImageCarousel } from '../strapi/components/modules/imageCarousel'
import { ComponentModulesImage } from '../strapi/components/modules/imageModule'
import { ComponentModulesPullquote } from '../strapi/components/modules/pullQuote'
import { ComponentModulesSubtitle } from '../strapi/components/modules/subtitle'
import { ComponentModulesTableModule } from '../strapi/components/modules/tableModule'
import { ComponentModulesTextModule } from '../strapi/components/modules/textModule'
import { ComponentModulesTitleModule } from '../strapi/components/modules/titleModule'
import {
  DateTimeFilterInput,
  Error,
  IdFilterInput,
  ResponseCollectionMeta,
  StringFilterInput,
} from '../strapi/shared-types'
import {
  TriplyRecordFiltersInput,
  TriplyRecordRelationResponseCollection,
} from '../triplyRecord/triplyRecord.type'
import { ThemeRelationResponseCollection } from '../theme/theme.type'

@ObjectType()
export class StoryRelationResponseCollection {
  @Field(() => [StoryEntity], { nullable: true })
  public data?: StoryEntity[]
}

@ObjectType()
export class Story {
  @Field(() => AuthorEntityResponse, { nullable: true })
  public author?: AuthorEntityResponse

  @Field(() => [StoryComponentsDynamicZone], { nullable: true })
  public components?: typeof StoryComponentsDynamicZone[]

  @Field({ nullable: true })
  public createdAt: Date

  @Field({ nullable: true })
  public description?: string

  @Field({ nullable: true })
  public locale?: string

  @Field(() => StoryRelationResponseCollection, { nullable: true })
  public localizations?: StoryRelationResponseCollection

  @Field(() => LocationRelationResponseCollection, { nullable: true })
  public locations?: LocationRelationResponseCollection

  @Field(() => ComponentCorePublicationDate, { nullable: true })
  public publicationDate?: ComponentCorePublicationDate

  @Field({ nullable: true })
  public publishedAt: Date

  @Field({ nullable: true })
  public shortDescription?: string

  @Field({ nullable: true })
  public slug?: string

  @Field(() => ComponentModulesButtonsModule, { nullable: true })
  public storyLinks?: ComponentModulesButtonsModule

  @Field({ nullable: true })
  public timeframe?: ComponentCoreTimeframe

  @Field({ nullable: false })
  public title: string

  @Field(() => TriplyRecordRelationResponseCollection, { nullable: true })
  public triplyRecords?: TriplyRecordRelationResponseCollection

  @Field({ nullable: true })
  public updatedAt: Date

  @Field(() => ThemeRelationResponseCollection, { nullable: true })
  public themes?: ThemeRelationResponseCollection
}

@ObjectType()
export class StoryWithoutRelations extends PickType(Story, [
  'createdAt',
  'description',
  'locale',
  'publishedAt',
  'shortDescription',
  'slug',
  'title',
  'updatedAt',
] as const) {}

export const StoryComponentsDynamicZone = createUnionType({
  name: 'StoryComponentsDynamicZone',
  types: () =>
    [
      ComponentModulesButtonsModule,
      ComponentModulesGridModule,
      ComponentModulesImage,
      ComponentModulesImageCarousel,
      ComponentModulesPullquote,
      ComponentModulesSubtitle,
      ComponentModulesTableModule,
      ComponentModulesTextModule,
      ComponentModulesTitleModule,
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

  @Field(() => ID, { nullable: true })
  public id?: string
}

@ObjectType()
export class StoryWithoutRelationsEntity {
  @Field({ nullable: true })
  public attributes?: StoryWithoutRelations

  @Field(() => ID, { nullable: true })
  public id?: string
}

@ObjectType()
export class StoryEntityResponse {
  @Field({ nullable: true })
  public data?: StoryEntity
}

@ObjectType()
export class StoryWithoutRelationsEntityResponse {
  @Field({ nullable: true })
  public data?: StoryWithoutRelationsEntity
}

@ObjectType()
export class StoryEntityResponseCollection {
  @Field(() => [StoryEntity], { nullable: true })
  public data: StoryEntity[]

  @Field(() => ResponseCollectionMeta, { nullable: true })
  public meta: ResponseCollectionMeta
}

@ObjectType()
export class StoryWithoutRelationsEntityResponseCollection {
  @Field(() => [StoryWithoutRelationsEntity], { nullable: true })
  public data: StoryWithoutRelationsEntity[]

  @Field(() => ResponseCollectionMeta, { nullable: true })
  public meta: ResponseCollectionMeta
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
  public author?: AuthorFiltersInput

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
}
