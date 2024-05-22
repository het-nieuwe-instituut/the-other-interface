import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import {
  DateTimeFilterInput,
  IdFilterInput,
  ResponseCollectionMeta,
  StringFilterInput,
} from '../strapi/shared-types'
import { Theme } from './theme-dependency.type'
import { StoryEntity } from '../story/story.type'
import { EntityNames } from '../util/entityNames.type'

@InputType()
export class ThemeFiltersInput {
  @Field(() => [ThemeFiltersInput], { nullable: true })
  public and?: ThemeFiltersInput[]

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

  @Field(() => ThemeFiltersInput, { nullable: true })
  public not?: ThemeFiltersInput

  @Field(() => [ThemeFiltersInput], { nullable: true })
  public or?: ThemeFiltersInput[]

  @Field(() => DateTimeFilterInput, { nullable: true })
  public publishedAt?: DateTimeFilterInput

  @Field(() => DateTimeFilterInput, { nullable: true })
  public updatedAt?: DateTimeFilterInput
}

@ObjectType()
export class ThemeEntity {
  @Field(() => Theme, { nullable: true })
  public attributes?: Theme

  @Field(() => ID, { nullable: true })
  public id?: string
}
@ObjectType()
export class ThemeRelationResponseCollection {
  @Field(() => [ThemeEntity], { nullable: true })
  public data?: ThemeEntity[]

  @Field(() => ResponseCollectionMeta, { nullable: true })
  public meta?: ResponseCollectionMeta
}

@ObjectType()
export class StoriesRelatedToThemeResponse {
  @Field(() => [StoryEntity], { nullable: true })
  public stories?: StoryEntity[]

  @Field({ nullable: true })
  public type: EntityNames

  @Field({ nullable: true })
  public total: number
}

@ObjectType()
export class ThemeEntityResponse {
  @Field(() => ThemeEntity, { nullable: true })
  public data?: ThemeEntity
}
