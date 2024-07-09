import { ArgsType, Field, ObjectType, OmitType } from '@nestjs/graphql'
import { EntityNames } from '../util/entityNames.type'
import { IsString } from 'class-validator'
import { Locale } from '../util/locale.type'
import { ExternalSource } from '../triply/triply.service'

@ObjectType()
class PeopleAssociationType {
  @Field(() => String)
  public association: string

  @Field(() => String, { nullable: true })
  public associationLabel?: string | null
}

@ObjectType()
class BasePeopleZoomLevel3DetailType {
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
class EnrichedBasePeopleZoomLevel3DetailType extends BasePeopleZoomLevel3DetailType {
  @Field()
  public id: string

  @Field(() => ExternalSource)
  public externalSourceType: ExternalSource

  @Field()
  public externalSourceUrl: string
}

@ObjectType()
export class PeopleZoomLevel3DetailType extends BasePeopleZoomLevel3DetailType {
  @Field(() => [EnrichedBasePeopleZoomLevel3DetailType], { nullable: true })
  public enrichedSources?: EnrichedBasePeopleZoomLevel3DetailType[]
}

@ObjectType()
class BasePeopleRecordZoomLevel3Type {
  @Field()
  public id: string

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
class EnrichedBasePeopleRecordZoomLevel3Type extends BasePeopleRecordZoomLevel3Type {
  @Field()
  public id: string

  @Field(() => ExternalSource)
  public externalSourceType: ExternalSource

  @Field()
  public externalSourceUrl: string
}

@ObjectType()
export class PeopleRecordZoomLevel3Type extends BasePeopleRecordZoomLevel3Type {
  @Field(() => [EnrichedBasePeopleRecordZoomLevel3Type], { nullable: true })
  public enrichedSources?: EnrichedBasePeopleRecordZoomLevel3Type[]
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

  @Field(() => Locale)
  public locale: Locale
}

@ArgsType()
export class PeopleZoomLevel2HoverArgs {
  @Field(() => String, { nullable: false })
  public id: string

  @Field(() => Locale)
  public locale: Locale
}

@ArgsType()
export class PeopleRecordRelationCountArgs extends OmitType(PeopleRecordRelationArgs, [
  'locale',
] as const) {}

@ObjectType()
export class PeopleZoomLevelHoverType {
  @Field(() => String, { nullable: true })
  public title?: string | null

  @Field(() => String, { nullable: true })
  public profession?: string | null

  @Field(() => String, { nullable: true })
  public description?: string | null
}
