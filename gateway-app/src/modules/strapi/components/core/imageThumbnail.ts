import { Field, ID, ObjectType } from '@nestjs/graphql'
import { UploadFileEntityResponse } from '../../shared-types'

@ObjectType()
export class ComponentCoreImageThumbnail {
  @Field(() => ID)
  public id: string

  @Field({ nullable: true })
  public alt_text?: string

  @Field(() => UploadFileEntityResponse, { nullable: true })
  public imageThumbnail?: UploadFileEntityResponse
}
