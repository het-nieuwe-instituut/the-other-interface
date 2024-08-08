import { ArgsType, Field, ObjectType, OmitType, PickType } from '@nestjs/graphql'
import { EntityNames } from '../util/entityNames.type'
import { IsString } from 'class-validator'
import { Locale } from '../util/locale.type'
import { ExternalSource } from '../triply/triply.service'

@ObjectType()
export class ObjectAsteriskType {
  @Field({
    nullable: true,
    description: 'asterisk value for the person field',
  })
  public asterisk_subject_person?: string

  @Field({
    nullable: true,
    description: 'the date the asterisk value was added to the person field',
  })
  public asterisk_date_person?: string

  @Field({
    nullable: true,
    description: 'the person that added the asterisk value for the person field',
  })
  public asterisk_name_person?: string

  @Field({ nullable: true, description: 'asterisk value for the geoKeywords field' })
  public asterisk_date_geoKeywords?: string

  @Field({ nullable: true, description: 'asterisk value for the geoKeywords field' })
  public asterisk_name_geoKeywords?: string

  @Field({ nullable: true, description: 'asterisk value for the geoKeywords field' })
  public asterisk_subject_geoKeywords?: string

  @Field({ nullable: true, description: 'asterisk value for the relatedKeyword field' })
  public asterisk_date_relatedKeyword?: string

  @Field({ nullable: true, description: 'asterisk value for the relatedKeyword field' })
  public asterisk_name_relatedKeyword?: string

  @Field({ nullable: true, description: 'asterisk value for the relatedKeyword field' })
  public asterisk_subject_relatedKeyword?: string

  @Field({ nullable: true, description: 'asterisk value for the description field' })
  public asterisk_date_description?: string

  @Field({ nullable: true, description: 'asterisk value for the description field' })
  public asterisk_name_description?: string

  @Field({ nullable: true, description: 'asterisk value for the description field' })
  public asterisk_subject_description?: string

  @Field({ nullable: true, description: 'asterisk value for the title field' })
  public asterisk_date_title?: string

  @Field({ nullable: true, description: 'asterisk value for the title field' })
  public asterisk_name_title?: string

  @Field({ nullable: true, description: 'asterisk value for the title field' })
  public asterisk_subject_title?: string
}

@ObjectType()
class BaseObjectsZoomLevel3DetailType {
  @Field()
  public id: string

  @Field(() => String, { nullable: true })
  public title: string

  @Field(() => String, { nullable: true })
  public description?: string | null

  @Field(() => [String], { nullable: true })
  public thumbnail?: string[]

  @Field(() => EntityNames, { nullable: true })
  public type?: EntityNames

  @Field(() => String, { nullable: true })
  public mediaType?: string

  @Field({ nullable: true })
  public mediaReference?: string
}

@ObjectType()
class EnrichedBaseObjectsZoomLevel3DetailType extends BaseObjectsZoomLevel3DetailType {
  @Field()
  public id: string

  @Field(() => ExternalSource)
  public externalSourceType: ExternalSource

  @Field()
  public externalSourceUrl: string
}

@ObjectType()
export class EnrichedBaseObjectsZoomLevel3AsteriskDetailType extends PickType(ObjectAsteriskType, [
  'asterisk_date_title',
  'asterisk_name_title',
  'asterisk_subject_title',
  'asterisk_date_description',
  'asterisk_name_description',
  'asterisk_subject_description',
]) {}

@ObjectType()
export class ObjectsZoomLevel3DetailType extends BaseObjectsZoomLevel3DetailType {
  @Field(() => [EnrichedBaseObjectsZoomLevel3DetailType], { nullable: true })
  public enrichedSources?: EnrichedBaseObjectsZoomLevel3DetailType[]

  @Field(() => [EnrichedBaseObjectsZoomLevel3AsteriskDetailType], { nullable: true })
  public asteriskSuggestions?: EnrichedBaseObjectsZoomLevel3AsteriskDetailType[]
}

@ObjectType()
class ObjectRelationsAsteriskType extends PickType(ObjectAsteriskType, [
  'asterisk_date_person',
  'asterisk_name_person',
  'asterisk_subject_person',
]) {}

@ObjectType()
export class ObjectRelationsType extends ObjectRelationsAsteriskType {
  @Field(() => String, { nullable: true })
  public idRelation?: string | null

  @Field(() => String, { nullable: true })
  public titleR?: string | null

  @Field(() => String, { nullable: true })
  public referenceNumber?: string | null

  @Field(() => String, { nullable: true })
  public period?: string | null

  @Field(() => String, { nullable: true })
  public externalSource?: string | null
}

@ObjectType()
export class ObjectRelationsCountType {
  @Field(() => String, { nullable: true })
  public total: string
}

@ObjectType()
class BaseObjectRecordZoomLevel3Type {
  @Field()
  public id: string

  @Field({ nullable: true })
  public title?: string

  @Field(() => String, { nullable: true })
  public objectNumber?: string

  @Field({ nullable: true })
  public objectType?: string

  @Field(() => String, { nullable: true })
  public objectName?: string

  @Field(() => String, { nullable: true })
  public archiveCode?: string

  @Field(() => String, { nullable: true })
  public date?: string

  @Field(() => String, { nullable: true })
  public relatedKeywords?: string

  @Field({ nullable: true })
  public maker?: string

  @Field(() => String, { nullable: true })
  public materials?: string

  @Field(() => String, { nullable: true })
  public techniques?: string

  @Field(() => String, { nullable: true })
  public hasParts?: string

  @Field(() => String, { nullable: true })
  public dimension?: string

  @Field(() => String, { nullable: true })
  public scale?: string

  @Field(() => String, { nullable: true })
  public creditLine?: string

  @Field(() => String, { nullable: true })
  public rights?: string

  @Field({ nullable: true })
  public geoKeywords?: string

  @Field(() => String, { nullable: true })
  public permanentLink?: string

  @Field(() => String, { nullable: true })
  public externalSource?: string
}

@ObjectType()
class EnrichedBaseObjectRecordZoomLevel3Type extends BaseObjectRecordZoomLevel3Type {
  @Field()
  public id: string

  @Field(() => ExternalSource)
  public externalSourceType: ExternalSource

  @Field()
  public externalSourceUrl: string
}

@ObjectType()
class BaseObjectRecordZoomLevel3AsteriskType extends PickType(ObjectAsteriskType, [
  'asterisk_date_relatedKeyword',
  'asterisk_name_relatedKeyword',
  'asterisk_subject_relatedKeyword',
  'asterisk_date_geoKeywords',
  'asterisk_name_geoKeywords',
  'asterisk_subject_geoKeywords',
]) {}

@ObjectType()
export class ObjectRecordZoomLevel3Type extends BaseObjectRecordZoomLevel3Type {
  @Field(() => [EnrichedBaseObjectRecordZoomLevel3Type], { nullable: true })
  public enrichedSources?: EnrichedBaseObjectRecordZoomLevel3Type[]

  @Field(() => [BaseObjectRecordZoomLevel3AsteriskType], { nullable: true })
  public asteriskSuggestions?: BaseObjectRecordZoomLevel3AsteriskType[]
}

@ArgsType()
export class ObjectRecordRelationArgs {
  @Field(() => EntityNames)
  public type: EntityNames

  @Field()
  @IsString()
  public id: string

  @Field(() => Locale)
  public locale: Locale
}

@ArgsType()
export class ObjectsZoomLevel2HoverArgs {
  @Field(() => String, { nullable: false })
  public id: string

  @Field(() => Locale)
  public locale: Locale
}

@ArgsType()
export class ObjectRecordRelationCountArgs extends OmitType(ObjectRecordRelationArgs, [
  'locale',
] as const) {}

@ObjectType()
export class ObjectsZoomLevelHoverType {
  @Field(() => String, { nullable: true })
  public title?: string | null

  @Field(() => String, { nullable: true })
  public maker?: string | null

  @Field(() => String, { nullable: true })
  public description?: string | null
}
