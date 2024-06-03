import { Field, ID, ObjectType } from '@nestjs/graphql'
import { UploadFileEntityResponse } from '../../shared-types'

@ObjectType()
export class ComponentCoreStandAloneLink {
  @Field(() => ID)
  public id: string

  @Field()
  public label: string

  @Field({ nullable: true })
  public url?: string

  @Field(() => UploadFileEntityResponse, { nullable: true })
  public attachment?: UploadFileEntityResponse
}
