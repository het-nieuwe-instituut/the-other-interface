import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MuxAudio {
  @Field({ nullable: true })
  public aspect_ratio?: string

  @Field({ nullable: true })
  public asset_id?: string

  @Field({ nullable: true })
  public createdAt?: Date

  @Field({ nullable: true })
  public duration?: number

  @Field({ nullable: true })
  public error_message?: string

  @Field({ nullable: true })
  public isReady?: boolean

  @Field({ nullable: true })
  public playback_id?: string

  @Field({ nullable: true })
  public signed?: boolean

  @Field({ nullable: true })
  public title?: string

  @Field({ nullable: true })
  public updatedAt?: Date

  @Field({ nullable: true })
  public upload_id?: string
}

@ObjectType()
export class MuxAudioEntity {
  @Field({ nullable: true })
  public attributes?: MuxAudio

  @Field({ nullable: true })
  public id?: string
}

@ObjectType()
export class MuxAudioResponse {
  @Field({ nullable: true })
  public data?: MuxAudioEntity
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
