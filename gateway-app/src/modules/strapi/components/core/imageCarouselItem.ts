import { Field, ID, ObjectType } from '@nestjs/graphql'
import { StoryEntityResponse } from 'src/modules/story/story.types.circular'
import { TriplyRecordEntityResponse } from 'src/modules/triplyRecord/triplyRecord.type'
import { UploadFileEntityResponse } from '../../shared-types'

@ObjectType()
export class ComponentCoreImageCarouselItem {
  @Field(() => ID)
  public id: string

  @Field()
  public alt_text: string

  @Field({ nullable: true })
  public url?: string

  @Field(() => UploadFileEntityResponse)
  public image: UploadFileEntityResponse

  @Field(() => TriplyRecordEntityResponse, { nullable: true })
  public triply_record?: TriplyRecordEntityResponse

  @Field(() => StoryEntityResponse, { nullable: true })
  public story?: StoryEntityResponse
}
