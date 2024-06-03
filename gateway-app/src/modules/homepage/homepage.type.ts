import { createUnionType, Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { PublicationState } from '../../generated/strapi-sdk'
import { ComponentModulesGridModule } from '../strapi/components/modules/gridModule'
import { ComponentModulesButtonsModule } from '../strapi/components/modules/buttonsModule'
import { ComponentModulesCarousel } from '../strapi/components/modules/carousel'
import { ComponentModulesImageCarousel } from '../strapi/components/modules/imageCarousel'
import { ComponentModulesImage } from '../strapi/components/modules/imageModule'
import { ComponentModulesPullquote } from '../strapi/components/modules/pullQuote'
import { ComponentModulesSubtitle } from '../strapi/components/modules/subtitle'
import { ComponentModulesTextModule } from '../strapi/components/modules/textModule'
import { ComponentModulesTitleModule } from '../strapi/components/modules/titleModule'
import { Error, ResponseCollectionMeta } from '../strapi/shared-types'
import { StoryWithoutRelationsRelationResponseCollection } from '../story/story.type'
import { ThemeRelationResponseCollection } from '../theme/theme.type'

@ObjectType()
export class HomepageRelationResponseCollection {
  @Field(() => [HomepageEntity])
  public data: HomepageEntity[]
}

@ObjectType()
export class Homepage {
  @Field({ nullable: true })
  public Title?: string

  @Field(() => [HomepageComponentsDynamicZone], { nullable: true })
  public components?: typeof HomepageComponentsDynamicZone[]

  @Field({ nullable: true })
  public createdAt?: Date

  @Field({ nullable: true })
  public description?: string

  @Field({ nullable: true })
  public locale?: string

  @Field(() => HomepageRelationResponseCollection, { nullable: true })
  public localizations?: HomepageRelationResponseCollection

  @Field({ nullable: true })
  public publishedAt?: Date

  @Field({ nullable: true })
  public updatedAt?: Date
}

@ObjectType()
export class HighlightedHomepageStoryEntityResponse {
  @Field(() => [HighlightedHomepageStoryEntity])
  public data: HighlightedHomepageStoryEntity[]
}

@ObjectType()
export class HighlightedHomepageStories {
  @Field(() => StoryWithoutRelationsRelationResponseCollection, { nullable: true })
  public highlightedStories?: StoryWithoutRelationsRelationResponseCollection
}

@ObjectType()
export class HighlightedHomepageStoryEntity {
  @Field(() => HighlightedHomepageStories, { nullable: true })
  public attributes?: HighlightedHomepageStories

  @Field(() => ID, { nullable: true })
  public id?: string
}

@ObjectType()
export class HighlightedHomepageThemes {
  @Field(() => ThemeRelationResponseCollection, { nullable: true })
  public highlightedThemes?: ThemeRelationResponseCollection

  // @Field(() => ResponseCollectionMeta, { nullable: true })
  // public meta?: ResponseCollectionMeta // added
}

@ObjectType()
export class HighlightedHomepageThemeEntity {
  @Field(() => HighlightedHomepageThemes, { nullable: true })
  public attributes?: HighlightedHomepageThemes

  @Field(() => ID, { nullable: true })
  public id?: string
}
@ObjectType()
export class HighlightedHomepageThemeEntityResponse {
  @Field(() => HighlightedHomepageThemeEntity)
  public data: HighlightedHomepageThemeEntity // had to remove []

  // @Field(() => ResponseCollectionMeta, { nullable: true })
  // public meta?: ResponseCollectionMeta // added
}

@ObjectType()
export class HomepageEntity {
  @Field(() => Homepage, { nullable: true })
  public attributes?: Homepage

  @Field(() => ID, { nullable: true })
  public id?: string
}

@ObjectType()
export class HomepageEntityResponse {
  @Field(() => HomepageEntity, { nullable: true })
  public data?: HomepageEntity
}

@InputType()
export class HomepageLocalizationsArgs {
  @Field(() => PublicationState, { nullable: true })
  public publicationState?: PublicationState
}

@InputType()
export class QueryHomepageArgs {
  @Field({ nullable: true })
  public locale?: string

  @Field(() => PublicationState, { nullable: true })
  public publicationState?: PublicationState
}

export const HomepageComponentsDynamicZone = createUnionType({
  name: 'HomepageComponentsDynamicZone',
  types: () =>
    [
      ComponentModulesButtonsModule,
      ComponentModulesCarousel,
      ComponentModulesGridModule,
      ComponentModulesImage,
      ComponentModulesImageCarousel,
      ComponentModulesPullquote,
      ComponentModulesSubtitle,
      ComponentModulesTextModule,
      ComponentModulesTitleModule,
      Error,
    ] as const,
  resolveType(value) {
    return value.__typename
  },
})
