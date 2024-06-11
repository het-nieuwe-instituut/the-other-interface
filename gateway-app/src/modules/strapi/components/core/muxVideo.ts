import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MuxVideo {
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
export class MuxVideoEntity {
  @Field({ nullable: true })
  public attributes?: MuxVideo

  @Field({ nullable: true })
  public id?: string
}

@ObjectType()
export class MuxVideoResponse {
  @Field({ nullable: true })
  public data?: MuxVideoEntity
}

@ObjectType()
export class ComponentCoreMuxVideo {
  @Field(() => ID)
  public id: string

  @Field({ nullable: true })
  public caption?: string

  @Field(() => MuxVideoResponse, { nullable: true })
  public muxVideoRelation?: MuxVideoResponse
}
