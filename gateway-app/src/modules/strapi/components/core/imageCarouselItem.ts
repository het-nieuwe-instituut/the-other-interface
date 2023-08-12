import { Field, ID, ObjectType } from '@nestjs/graphql'
import { TriplyRecordEntityResponse } from '../../../triplyRecord/triplyRecord.type'
import { UploadFileEntityResponse } from '../../shared-types'

@ObjectType()
export class ComponentCoreImageCarouselItem {
  @Field(() => ID)
  public id: string

  @Field({ nullable: true })
  public description?: string

  @Field({ nullable: true })
  public name?: string

  @Field(() => UploadFileEntityResponse, { nullable: true })
  public picture?: UploadFileEntityResponse

  @Field(() => TriplyRecordEntityResponse, { nullable: true })
  public triplyRecord?: TriplyRecordEntityResponse
}
