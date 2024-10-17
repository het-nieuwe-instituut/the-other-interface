import { ArgsType, Field, ObjectType, OmitType, PickType, registerEnumType } from '@nestjs/graphql'
import { ArchivesZoomLevel3Types } from './archives.service'
import { IsString } from 'class-validator'
import { EntityNames } from '../util/entityNames.type'
import { Locale } from '../util/locale.type'
import { ExternalSource } from '../triply/triply.service'

@ObjectType()
export class ArchiveAsteriskType {
  @Field({ nullable: true, description: 'asterisk value for the content field' })
  public asterisk_date_content?: string

  @Field({ nullable: true, description: 'asterisk value for the content field' })
  public asterisk_name_content?: string

  @Field({ nullable: true, description: 'asterisk value for the content field' })
  public asterisk_subject_content?: string

  @Field({ nullable: true, description: 'asterisk value for the location field' })
  public asterisk_date_location?: string

  @Field({ nullable: true, description: 'asterisk value for the location field' })
  public asterisk_name_location?: string

  @Field({ nullable: true, description: 'asterisk value for the location field' })
  public asterisk_subject_location?: string

  @Field({ nullable: true, description: 'asterisk value for the subject field' })
  public asterisk_date_subject?: string

  @Field({ nullable: true, description: 'asterisk value for the subject field' })
  public asterisk_name_subject?: string

  @Field({ nullable: true, description: 'asterisk value for the subject field' })
  public asterisk_subject_subject?: string

  @Field({ nullable: true, description: 'asterisk value for the title field' })
  public asterisk_date_title?: string

  @Field({ nullable: true, description: 'asterisk value for the title field' })
  public asterisk_name_title?: string

  @Field({ nullable: true, description: 'asterisk value for the title field' })
  public asterisk_subject_title?: string

  @Field({ nullable: true, description: 'asterisk value for the description field' })
  public asterisk_date_description?: string

  @Field({ nullable: true, description: 'asterisk value for the description field' })
  public asterisk_name_description?: string

  @Field({ nullable: true, description: 'asterisk value for the description field' })
  public asterisk_subject_description?: string
}

@ObjectType()
class BaseArchiveZoomLevel3DetailType {
  @Field()
  public id: string

  @Field(() => EntityNames, { nullable: true })
  public type: EntityNames

  @Field(() => String, { nullable: true })
  public title: string

  @Field(() => [String], { nullable: true })
  public thumbnail: string[]

  @Field(() => String, { nullable: true })
  public objectNumber?: string

  @Field({ nullable: true })
  public mediaType?: string

  @Field({ nullable: true })
  public mediaReference?: string

  @Field(() => String, { nullable: true })
  public description?: string | null

  @Field({ nullable: true })
  public custodialHistory?: string

  @Field({ nullable: true })
  public systemOfArrangement?: string

  @Field(() => String, { nullable: true })
  public existence?: string | null

  @Field(() => String, { nullable: true })
  public existenceLocation?: string | null

  @Field(() => String, { nullable: true })
  public sources?: string | null
}

@ObjectType()
class EnrichedBaseArchiveZoomLevel3DetailType extends BaseArchiveZoomLevel3DetailType {
  @Field()
  public id: string

  @Field(() => ExternalSource)
  public externalSourceType: ExternalSource

  @Field()
  public externalSourceUrl: string
}

@ObjectType()
export class EnrichedBaseOArchiveZoomLevel3AsteriskDetailType extends PickType(
  ArchiveAsteriskType,
  [
    'asterisk_date_title',
    'asterisk_name_title',
    'asterisk_subject_title',
    'asterisk_date_description',
    'asterisk_name_description',
    'asterisk_subject_description',
  ]
) {}

@ObjectType()
export class ArchiveZoomLevel3DetailType extends BaseArchiveZoomLevel3DetailType {
  @Field(() => [EnrichedBaseArchiveZoomLevel3DetailType], { nullable: true })
  public enrichedSources?: EnrichedBaseArchiveZoomLevel3DetailType[]

  @Field(() => [EnrichedBaseOArchiveZoomLevel3AsteriskDetailType], { nullable: true })
  public asteriskSuggestions?: EnrichedBaseOArchiveZoomLevel3AsteriskDetailType[]
}

@ObjectType()
export class ArchiveRelationsType {
  @Field(() => String, { nullable: true })
  public idRelation?: string | null

  @Field(() => String, { nullable: true })
  public titleR?: string | null

  @Field(() => String, { nullable: true })
  public referenceNumber?: string | null

  @Field(() => String, { nullable: true })
  public descriptionLevel?: string | null
}

@ObjectType()
export class ArchivesRelationsCountType {
  @Field(() => String, { nullable: true })
  public total: string
}

registerEnumType(ArchivesZoomLevel3Types, { name: 'ArchivesZoomLevel3Types' })

@ArgsType()
export class ArchiveRecordRelationArgs {
  @Field(() => EntityNames)
  public type: EntityNames

  @Field()
  @IsString()
  public id: string

  @Field(() => Locale)
  public locale: Locale
}

@ArgsType()
export class ArchiveRecordRelationCountArgs extends OmitType(ArchiveRecordRelationArgs, [
  'locale',
] as const) {}

@ObjectType()
class BaseArchivesRecordZoomLevel3Type {
  @Field()
  public id: string

  @Field(() => String, { nullable: true })
  public referenceCode?: string

  @Field({ nullable: true })
  public title?: string

  @Field(() => String, { nullable: true })
  public titleType?: string

  @Field(() => String, { nullable: true })
  public descriptionLevel?: string

  @Field(() => String, { nullable: true })
  public size?: string

  @Field(() => String, { nullable: true })
  public period?: string

  @Field(() => String, { nullable: true })
  public access?: string

  @Field(() => String, { nullable: true })
  public photographCreator?: string

  @Field(() => String, { nullable: true })
  public rights?: string

  @Field(() => String, { nullable: true })
  public permanentLink?: string

  @Field(() => String, { nullable: true })
  public externalURI?: string

  @Field(() => String, { nullable: true })
  public description?: string

  @Field(() => String, { nullable: true })
  public custodialHistory?: string

  @Field(() => String, { nullable: true })
  public systemOfArrangement?: string

  @Field(() => String, { nullable: true })
  public sources?: string

  @Field(() => String, { nullable: true })
  public existence?: string

  @Field(() => String, { nullable: true })
  public existenceLocation?: string

  @Field({ nullable: true })
  public location?: string

  @Field({ nullable: true })
  public subject?: string

  @Field({ nullable: true })
  public creators?: string
}

@ObjectType()
class EnrichedBaseArchivesRecordZoomLevel3Type extends BaseArchivesRecordZoomLevel3Type {
  @Field()
  public id: string

  @Field(() => ExternalSource)
  public externalSourceType: ExternalSource

  @Field()
  public externalSourceUrl: string
}

@ObjectType()
class BaseArchiveRecordZoomLevel3AsteriskType extends PickType(ArchiveAsteriskType, [
  'asterisk_date_subject',
  'asterisk_name_subject',
  'asterisk_subject_subject',
  'asterisk_date_location',
  'asterisk_name_location',
  'asterisk_subject_location',
  'asterisk_date_content',
  'asterisk_name_content',
  'asterisk_subject_content',
]) {}

@ObjectType()
export class ArchivesRecordZoomLevel3Type extends BaseArchivesRecordZoomLevel3Type {
  @Field(() => [EnrichedBaseArchivesRecordZoomLevel3Type], { nullable: true })
  public enrichedSources?: EnrichedBaseArchivesRecordZoomLevel3Type[]

  @Field(() => [BaseArchiveRecordZoomLevel3AsteriskType], { nullable: true })
  public asteriskSuggestions?: BaseArchiveRecordZoomLevel3AsteriskType[]
}

@ArgsType()
export class ArchivesZoomLevel2HoverArgs {
  @Field(() => String, { nullable: false })
  public id: string

  @Field(() => Locale)
  public locale: Locale
}

@ObjectType()
export class ArchivesZoomLevelHoverType {
  @Field(() => String, { nullable: true })
  public title?: string | null

  @Field(() => String, { nullable: true })
  public creators?: string | null

  @Field(() => String, { nullable: true })
  public description?: string | null
}
