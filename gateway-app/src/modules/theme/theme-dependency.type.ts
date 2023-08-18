import { Field, ObjectType } from '@nestjs/graphql'
import { ThemeRelationResponseCollection } from './theme.type'
import { StoryRelationResponseCollection } from '../story/story.type'

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
