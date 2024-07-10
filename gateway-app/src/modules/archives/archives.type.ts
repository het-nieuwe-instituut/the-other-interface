import {
  ArgsType,
  Field,
  IntersectionType,
  ObjectType,
  OmitType,
  registerEnumType,
} from '@nestjs/graphql'
import { ArchivesZoomLevel3Types } from './archives.service'
import { IsString } from 'class-validator'
import { EntityNames } from '../util/entityNames.type'
import { Locale } from '../util/locale.type'
import { EnrichedRecordBaseType } from '../triply/triply.type'

@ObjectType()
class BaseArchiveZoomLevel3DetailType {
  @Field()
  public id: string

  @Field(() => EntityNames, { nullable: true })
  public type: EntityNames

  @Field(() => String, { nullable: true })
  public title: string

  @Field(() => [String], { nullable: true })
  public thumbnail: string

  @Field(() => String, { nullable: true })
  public objectNumber?: string

  @Field(() => String, { nullable: true })
  public description?: string | null
}

@ObjectType()
export class ArchiveZoomLevel3DetailType extends IntersectionType(
  EnrichedRecordBaseType,
  BaseArchiveZoomLevel3DetailType
) {
  @Field(() => [BaseArchiveZoomLevel3DetailType], { nullable: true })
  public enrichedSources?: BaseArchiveZoomLevel3DetailType[]
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
  public period?: string | null
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
  @Field(() => String, { nullable: true })
  public referenceCode?: string

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
  public externalSource?: string

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
}

@ObjectType()
export class ArchivesRecordZoomLevel3Type extends IntersectionType(
  EnrichedRecordBaseType,
  BaseArchivesRecordZoomLevel3Type
) {
  @Field(() => [BaseArchivesRecordZoomLevel3Type], { nullable: true })
  public enrichedSources?: BaseArchivesRecordZoomLevel3Type[]
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
