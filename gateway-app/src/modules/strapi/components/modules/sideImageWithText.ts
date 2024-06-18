import { Field, ID, ObjectType } from '@nestjs/graphql'
import { UploadFileEntityResponse } from '../../shared-types'

@ObjectType()
export class ComponentModulesSideImageWithText {
  @Field()
  public image_alt_text: string

  @Field()
  public sideText: string

  @Field(() => ID)
  public id: string

  @Field(() => UploadFileEntityResponse)
  public image: UploadFileEntityResponse
}
