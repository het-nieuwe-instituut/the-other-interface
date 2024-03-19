import { Field, ID, ObjectType } from '@nestjs/graphql'
import { AuthorEntityResponse } from '../../../author/author.type'
import { TriplyRecordEntityResponse } from '../../../triplyRecord/triplyRecord.type'
import { StoryEntityResponse } from 'src/modules/story/story.types.circular'

@ObjectType()
export class ComponentModulesCollectionRelation {
  @Field(() => AuthorEntityResponse, { nullable: true })
  public author?: AuthorEntityResponse

  @Field(() => ID)
  public id: string

  @Field(() => StoryEntityResponse, { nullable: true })
  public story?: StoryEntityResponse

  @Field(() => TriplyRecordEntityResponse, { nullable: true })
  public triplyRecord?: TriplyRecordEntityResponse
}
