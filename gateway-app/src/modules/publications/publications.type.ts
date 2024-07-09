import { ArgsType, Field, ObjectType, OmitType } from '@nestjs/graphql'
import { EntityNames } from '../util/entityNames.type'
import { PeopleZoomLevel3DetailType } from '../people/people.type'
import { IsString } from 'class-validator'
import { Locale } from '../util/locale.type'
import { ExternalSource } from '../triply/triply.service'

@ObjectType()
class BasePublicationZoomLevel3DetailType {
  @Field()
  public id: string

  @Field(() => String, { nullable: true })
  public title: string

  @Field(() => EntityNames, { nullable: true })
  public type: EntityNames

  @Field(() => [String], { nullable: true })
  public thumbnail: string

  @Field(() => String, { nullable: true })
  public objectNumber: string

  @Field(() => String, { nullable: true })
  public yearOfPublication: string

  @Field(() => String, { nullable: true })
  public description: string
}

@ObjectType()
class EnrichedBasePublicationZoomLevel3DetailType extends BasePublicationZoomLevel3DetailType {
  @Field()
  public id: string

  @Field(() => ExternalSource)
  public externalSourceType: ExternalSource

  @Field()
  public externalSourceUrl: string
}

@ObjectType()
export class PublicationZoomLevel3DetailType extends BasePublicationZoomLevel3DetailType {
  @Field(() => [EnrichedBasePublicationZoomLevel3DetailType], { nullable: true })
  public enrichedSources?: EnrichedBasePublicationZoomLevel3DetailType[]
}

@ObjectType()
export class PublicationRelationsType {
  @Field(() => String, { nullable: true })
  public idRelation?: string | null

  @Field(() => String, { nullable: true })
  public titleR?: string | null

  @Field(() => String, { nullable: true })
  public typePub?: string | null

  @Field(() => String, { nullable: true })
  public yearPub?: string | null

  @Field(() => String, { nullable: true })
  public externalSource?: string | null
}
@ObjectType()
export class PublicationsRelationsCountType {
  @Field(() => String, { nullable: true })
  public total: string
}

@ObjectType()
class BasePublicationRecordZoomLevel3Type {
  @Field()
  public id: string

  @Field(() => String, { nullable: true })
  public objectNumber?: string

  @Field(() => String, { nullable: true })
  public subType?: string

  @Field(() => String, { nullable: true })
  public authors?: string

  @Field(() => String, { nullable: true })
  public authorRole?: string

  @Field(() => String, { nullable: true })
  public publisher?: string

  @Field(() => String, { nullable: true })
  public yearOfPublication?: string

  @Field(() => String, { nullable: true })
  public placeOfPublication?: string

  @Field(() => String, { nullable: true })
  public isbn?: string

  @Field(() => String, { nullable: true })
  public annotation?: string

  @Field(() => String, { nullable: true })
  public codeOfArchive?: string

  @Field(() => String, { nullable: true })
  public edition?: string

  @Field(() => String, { nullable: true })
  public illustration?: string

  @Field(() => String, { nullable: true })
  public pages?: string

  @Field(() => String, { nullable: true })
  public language?: string

  @Field(() => String, { nullable: true })
  public series?: string

  @Field(() => String, { nullable: true })
  public number?: string

  @Field(() => String, { nullable: true })
  public category?: string

  @Field(() => String, { nullable: true })
  public relatedKeyword?: string

  @Field(() => String, { nullable: true })
  public geoKeyword?: string

  @Field(() => String, { nullable: true })
  public availability?: string

  @Field(() => String, { nullable: true })
  public permanentLink?: string

  @Field(() => String, { nullable: true })
  public externalSource?: string
}

@ObjectType()
class EnrichedBasePublicationRecordZoomLevel3Type extends BasePublicationRecordZoomLevel3Type {
  @Field()
  public id: string

  @Field(() => ExternalSource)
  public externalSourceType: ExternalSource

  @Field()
  public externalSourceUrl: string
}

@ObjectType()
export class PublicationRecordZoomLevel3Type extends BasePublicationRecordZoomLevel3Type {
  @Field(() => [EnrichedBasePublicationRecordZoomLevel3Type], { nullable: true })
  public enrichedSources?: EnrichedBasePublicationRecordZoomLevel3Type[]
}

@ArgsType()
export class PublicationRecordRelationArgs {
  @Field(() => EntityNames)
  public type: EntityNames

  @Field()
  @IsString()
  public id: string

  @Field(() => Locale)
  public locale: Locale
}

@ArgsType()
export class PublicationRecordRelationCountArgs extends OmitType(PublicationRecordRelationArgs, [
  'locale',
] as const) {}

@ObjectType()
export class PublicationAuthorType {
  @Field(() => String)
  public id: string

  @Field(() => String)
  public author: string

  @Field(() => String, { nullable: true })
  public authorLabel?: string

  @Field(() => String, { nullable: true })
  public authorRole?: string

  @Field(() => String, { nullable: true })
  public authorRoleLabel?: string

  @Field(() => PeopleZoomLevel3DetailType, { nullable: true })
  public populatedAuthor?: PeopleZoomLevel3DetailType
}

@ArgsType()
export class PublicationsZoomLevel2HoverArgs {
  @Field(() => String, { nullable: false })
  public id: string
}

@ObjectType()
export class PublicationsZoomLevelHoverType {
  @Field(() => String, { nullable: true })
  public title?: string | null

  @Field(() => String, { nullable: true })
  public authors?: string | null

  @Field(() => String, { nullable: true })
  public description?: string | null
}
