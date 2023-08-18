import { Field, ObjectType } from '@nestjs/graphql'
import { ThemeRelationResponseCollection } from './theme.type'
// import { ResponseCollectionMeta, UploadFileEntityResponse } from '../strapi/shared-types'
import { StoryRelationResponseCollection } from '../story/story.type'

// @ObjectType()
// export class ThemeStoryItem {
//   @Field(() => ID, { nullable: true })
//   public id?: string

//   @Field({ nullable: true })
//   public slug?: string

//   @Field({ nullable: false })
//   public title: string

//   @Field(() => UploadFileEntityResponse)
//   public image: UploadFileEntityResponse
// }

// @ObjectType()
// export class ThemeStoryRelationResponseCollection {
//   @Field(() => [ThemeStoryItem], { nullable: false })
//   public data: ThemeStoryItem[]

//   @Field(() => ResponseCollectionMeta, { nullable: true })
//   public meta: ResponseCollectionMeta
// }

@ObjectType()
export class Theme {
  @Field({ nullable: false })
  public name?: string

  @Field({ nullable: true })
  public createdAt?: Date

  @Field({ nullable: true })
  public locale?: string

  @Field(() => ThemeRelationResponseCollection, { nullable: true })
  public localizations?: ThemeRelationResponseCollection

  @Field({ nullable: true })
  public publishedAt?: Date

  @Field(() => StoryRelationResponseCollection, { nullable: true })
  public stories?: StoryRelationResponseCollection

  // @Field(() => ThemeStoryRelationResponseCollection, { nullable: true })
  // public storiesWithImages?: ThemeStoryRelationResponseCollection

  @Field({ nullable: true })
  public updatedAt?: Date
}
