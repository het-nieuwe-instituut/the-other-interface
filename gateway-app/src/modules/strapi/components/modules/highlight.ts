import { Field, ID, ObjectType } from '@nestjs/graphql'
import { ComponentCoreButton } from '../core/button'
import { UploadFileEntityResponse } from '../../shared-types'

@ObjectType()
export class ComponentModulesHighlight {
  @Field(() => ID)
  public id: string

  @Field()
  public title: string

  @Field({ nullable: true })
  public subtitle?: string

  @Field({ nullable: true })
  public description?: string

  @Field()
  public image_alt_text: string

  @Field(() => ComponentCoreButton, { nullable: true })
  public buttons?: ComponentCoreButton[]

  @Field(() => UploadFileEntityResponse)
  public image: UploadFileEntityResponse
}
