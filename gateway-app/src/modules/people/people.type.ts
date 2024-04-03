import { ArgsType, Field, ObjectType } from '@nestjs/graphql'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { IsOptional, IsString } from 'class-validator'

@ObjectType()
export class PeopleZoomLevel3DetailType {
  @Field()
  public id: string

  @Field(() => String, { nullable: true })
  public title: string

  @Field(() => EntityNames, { nullable: true })
  public type: EntityNames

  @Field(() => [String], { nullable: true })
  public thumbnail: string

  @Field(() => String, { nullable: true })
  public name: string

  @Field(() => [String], { nullable: true })
  public nameTypes?: string[]

  @Field(() => String, { nullable: true })
  public nameVariation?: string | null

  @Field(() => String, { nullable: true })
  public birthDate?: string | null

  @Field(() => String, { nullable: true })
  public birthPlace?: string | null

  @Field(() => String, { nullable: true })
  public birthPlaceLabel?: string | null

  @Field(() => String, { nullable: true })
  public deathDate?: string | null

  @Field(() => String, { nullable: true })
  public deathPlace?: string | null

  @Field(() => String, { nullable: true })
  public deathPlaceLabel?: string | null

  @Field(() => String, { nullable: true })
  public place?: string | null

  @Field(() => String, { nullable: true })
  public placeLabel?: string | null

  @Field(() => String, { nullable: true })
  public startDate?: string | null

  @Field(() => String, { nullable: true })
  public endDate?: string | null

  @Field(() => String, { nullable: true })
  public nationality?: string | null

  @Field(() => String, { nullable: true })
  public nationalityLabel?: string | null

  @Field(() => String, { nullable: true })
  public institution?: string | null

  @Field(() => String, { nullable: true })
  public institutionLabel?: string | null

  @Field(() => String, { nullable: true })
  public profession?: string | null

  @Field(() => String, { nullable: true })
  public professionLabel?: string | null

  @Field(() => String, { nullable: true })
  public gender?: string | null

  @Field(() => [PeopleAssociationType], { nullable: true })
  public associations?: PeopleAssociationType[]

  @Field(() => String, { nullable: true })
  public relatedItem?: string | null

  @Field(() => String, { nullable: true })
  public relatedItemLabel?: string | null

  @Field(() => String, { nullable: true })
  public description?: string | null

  @Field(() => String, { nullable: true })
  public permanentLink?: string | null
}

@ObjectType()
export class PeopleRecordZoomLevel3Type {
  @Field(() => String, { nullable: true })
  public type?: string

  @Field(() => String, { nullable: true })
  public profession?: string

  @Field(() => String, { nullable: true })
  public nameVariation?: string

  @Field(() => String, { nullable: true })
  public birthDate?: string

  @Field(() => String, { nullable: true })
  public birthPlace?: string

  @Field(() => String, { nullable: true })
  public deathDate?: string

  @Field(() => String, { nullable: true })
  public deathPlace?: string

  @Field(() => String, { nullable: true })
  public nationality?: string

  @Field(() => String, { nullable: true })
  public gender?: string

  @Field(() => String, { nullable: true })
  public period?: string

  @Field(() => String, { nullable: true })
  public association?: string

  @Field(() => String, { nullable: true })
  public permanentLink?: string

  @Field(() => String, { nullable: true })
  public externalSource?: string
}

@ObjectType()
export class PeopleAssociationType {
  @Field(() => String)
  public association: string

  @Field(() => String, { nullable: true })
  public associationLabel?: string | null
}
@ObjectType()
export class PeopleRelationsType {
  @Field(() => String, { nullable: true })
  public idRelation?: string | null

  @Field(() => String, { nullable: true })
  public relationName?: string | null

  @Field(() => String, { nullable: true })
  public titleR?: string | null

  @Field(() => String, { nullable: true })
  public occupation?: string | null

  @Field(() => String, { nullable: true })
  public period?: string | null

  @Field(() => String, { nullable: true })
  public externalSource?: string | null
}

@ObjectType()
export class PeopleRelationsCountType {
  @Field(() => String, { nullable: true })
  public total: string
}

@ArgsType()
export class PeopleRecordRelationArgs {
  @Field(() => EntityNames)
  public type: EntityNames

  @Field()
  @IsString()
  public id: string

  @Field()
  @IsOptional()
  public lang?: string
}
