import { ObjectType, Field } from '@nestjs/graphql'
import { StoryEntity } from './story.type'

@ObjectType()
export class StoryEntityResponse {
  @Field(() => StoryEntity, { nullable: true })
  public data?: StoryEntity
}
