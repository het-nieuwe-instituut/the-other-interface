import { Field, ID, ObjectType } from '@nestjs/graphql'
import { ComponentCoreModuleLayouts, UploadFileEntityResponse } from '../../shared-types'
import { TriplyRecordEntityResponse } from 'src/modules/triplyRecord/triplyRecord.type'
import { StoryEntityResponse } from 'src/modules/story/story.type'

@ObjectType()
export class ComponentModulesImage {
  @Field({ nullable: true })
  public alt_text?: string

  @Field({ nullable: true })
  public caption?: string

  @Field(() => ID)
  public id: string

  @Field(() => UploadFileEntityResponse)
  public image: UploadFileEntityResponse

  @Field(() => ComponentCoreModuleLayouts)
  public imageModuleLayout: ComponentCoreModuleLayouts

  @Field(() => TriplyRecordEntityResponse, { nullable: true })
  public triplyRecord?: TriplyRecordEntityResponse

  @Field(() => StoryEntityResponse, { nullable: true })
  public story?: StoryEntityResponse
}
