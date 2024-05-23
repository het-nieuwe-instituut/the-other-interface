import { Field, ObjectType } from '@nestjs/graphql'
import { StoryRelationResponseCollection } from '../story/story.type'
import { LocationRelationResponseCollection } from './location.type'

@ObjectType()
export class Location {
  @Field({ nullable: true })
  public city?: string

  @Field({ nullable: true })
  public createdAt?: Date

  @Field({ nullable: true })
  public locale?: string

  @Field(() => LocationRelationResponseCollection, { nullable: true })
  public localizations?: LocationRelationResponseCollection

  @Field({ nullable: true })
  public publishedAt?: Date

  @Field(() => StoryRelationResponseCollection, { nullable: true })
  public stories?: StoryRelationResponseCollection

  @Field({ nullable: true })
  public updatedAt?: Date
}
