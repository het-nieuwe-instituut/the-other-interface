import { Field, ID, ObjectType } from '@nestjs/graphql'
import { MuxVideoUploaderMuxAssetEntityResponse } from 'src/generated/strapi-sdk'

@ObjectType()
export class MuxAudioResponse {
  @Field({ nullable: true })
  public data?: MuxVideoUploaderMuxAssetEntityResponse
}

@ObjectType()
export class ComponentCoreMuxAudio {
  @Field(() => ID)
  public id: string

  @Field({ nullable: true })
  public caption?: string

  @Field(() => MuxAudioResponse, { nullable: true })
  public muxAudioRelation?: MuxAudioResponse
}
