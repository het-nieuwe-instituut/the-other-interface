import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { ExternalSource } from './triply.service'

registerEnumType(ExternalSource, { name: 'ExternalSource' })

@ObjectType()
export class EnrichedRecordBaseType {
  @Field()
  public id: string

  @Field(() => ExternalSource)
  public externalSourceType: ExternalSource

  @Field()
  public externalSourceUrl: string
}
