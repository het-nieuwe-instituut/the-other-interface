import { ArgsType, Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { IsOptional, IsString } from 'class-validator'
import { EntityNames } from '../util/entityNames.type'
import { TriplyExternalSourceEnum } from './zoomLevel3.service'
import { StoryEntity } from '../story/story.type'

@ObjectType()
export class ZoomLevel3RelationsType {
  @Field(() => EntityNames)
  public type: EntityNames

  @Field({ nullable: true })
  public total?: number

  @Field(() => [String], { nullable: true })
  public paginatedRelations?: string[]
}

@ObjectType()
export class RelatedRecordType {
  @Field({ nullable: true })
  public id: string

  @Field(() => EntityNames, { nullable: true })
  public type: EntityNames

  @Field({ nullable: true })
  public title: string

  @Field({ nullable: true })
  public thumbnail: string
}

@ObjectType()
export class BaseZoomLevel3RelatedRecordType {
  @Field()
  public id: string

  @Field(() => EntityNames)
  public type: EntityNames
}

@ObjectType()
export class StoryCountType {
  @Field(() => Number, { nullable: true })
  public archives?: number // problem: only getting back the total amount, not the amount for each category
  @Field(() => Number, { nullable: true })
  public people?: number
  @Field(() => Number, { nullable: true })
  public publications?: number
  @Field(() => Number, { nullable: true })
  public objects?: number
}

@ObjectType()
export class ZoomLevel3StoryRelationsCountType {
  @Field(() => Number, { nullable: true })
  public linkedStoryCount?: number

  @Field(() => StoryCountType, { nullable: true })
  public linkedTriplyRecords?: StoryCountType
}

@ArgsType()
export class ZoomLevel3Args {
  @Field(() => EntityNames)
  public type: EntityNames

  @Field()
  @IsString()
  public id: string

  @Field()
  @IsOptional()
  public lang?: string
}

@ArgsType()
export class ZoomLevel3StoryRelationsCountArgs {
  @Field()
  @IsString()
  public storyId: string

  @Field()
  @IsOptional()
  public lang?: string
}

registerEnumType(TriplyExternalSourceEnum, { name: 'TriplyExternalSourceEnum' })

@ObjectType()
export class ZoomLevel3StoriesRelatedToRecordType {
  @Field(() => [StoryEntity], { nullable: true })
  public stories?: StoryEntity[]

  @Field({ nullable: true })
  public type: EntityNames

  @Field({ nullable: true })
  public total: number
}
