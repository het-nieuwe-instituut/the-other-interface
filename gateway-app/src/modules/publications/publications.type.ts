import { ArgsType, Field, ObjectType, OmitType, registerEnumType } from '@nestjs/graphql'
import { EntityNames } from '../util/entityNames.type'
import { PublicationsZoomLevel3Types } from './publications.service'
import { PeopleZoomLevel3DetailType } from '../people/people.type'
import { IsString } from 'class-validator'
import { Locale } from '../util/locale.type'

@ObjectType()
export class PublicationZoomLevel3DetailType {
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
export class PublicationRecordZoomLevel3Type {
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

registerEnumType(PublicationsZoomLevel3Types, { name: 'PublicationsZoomLevel3Types' })

@ObjectType()
class BasePublicationZoomLevel3Type {
  @Field()
  public id: string

  @Field(() => PublicationsZoomLevel3Types)
  public type: PublicationsZoomLevel3Types

  @Field(() => String, { nullable: true })
  public title?: string

  @Field(() => String, { nullable: true })
  public thumbnail: string
}

@ObjectType()
export class PublicationsAudioVisualZoomLevel3DetailType extends BasePublicationZoomLevel3Type {
  @Field(() => String, { nullable: true })
  public typeOfPublication?: string

  @Field(() => String, { nullable: true })
  public typeOfPublicationLabel?: string

  @Field(() => String, { nullable: true })
  public title?: string

  @Field(() => [PublicationAuthorType], { nullable: true })
  public authors?: PublicationAuthorType[]

  @Field(() => String, { nullable: true })
  public publisher?: string

  @Field(() => String, { nullable: true })
  public publisherLabel?: string

  @Field(() => PeopleZoomLevel3DetailType, { nullable: true })
  public populatedPublisher?: PeopleZoomLevel3DetailType

  @Field(() => String, { nullable: true })
  public yearOfPublication?: string

  @Field(() => String, { nullable: true })
  public placeOfPublication?: string

  @Field(() => String, { nullable: true })
  public placeOfPublicationLabel?: string

  @Field(() => String, { nullable: true })
  public abstract?: string

  @Field(() => String, { nullable: true })
  public annotation?: string

  @Field(() => String, { nullable: true })
  public scope?: string

  @Field(() => String, { nullable: true })
  public language?: string

  @Field(() => String, { nullable: true })
  public languageLabel?: string

  @Field(() => String, { nullable: true })
  public medium?: string

  @Field(() => String, { nullable: true })
  public geographicalKeyword?: string

  @Field(() => String, { nullable: true })
  public geographicalKeywordLabel?: string

  @Field(() => String, { nullable: true })
  public subject?: string

  @Field(() => String, { nullable: true })
  public subjectLabel?: string

  @Field(() => String, { nullable: true })
  public relatedPerInst?: string

  @Field(() => String, { nullable: true })
  public relatedPerInstLabel?: string

  @Field(() => String, { nullable: true })
  public permanentLink?: string

  @Field(() => String, { nullable: true })
  public objectNumber?: string

  @Field(() => String, { nullable: true })
  public availability?: string

  @Field(() => String, { nullable: true })
  public shelfmark?: string
}

@ObjectType()
export class PublicationsArticleZoomLevel3DetailType extends BasePublicationZoomLevel3Type {
  @Field(() => String, { nullable: true })
  public typeOfPublication?: string

  @Field(() => String, { nullable: true })
  public typeOfPublicationLabel?: string

  @Field(() => String, { nullable: true })
  public title?: string

  @Field(() => [PublicationAuthorType], { nullable: true })
  public authors?: PublicationAuthorType[]

  @Field(() => String, { nullable: true })
  public sourceTitle?: string

  @Field(() => String, { nullable: true })
  public sourceTitleLabel?: string

  @Field(() => String, { nullable: true })
  public volume?: string

  @Field(() => String, { nullable: true })
  public issue?: string

  @Field(() => String, { nullable: true })
  public yearOfPublication?: string

  @Field(() => String, { nullable: true })
  public page?: string

  @Field(() => String, { nullable: true })
  public publisher?: string

  @Field(() => String, { nullable: true })
  public publisherLabel?: string

  @Field(() => PeopleZoomLevel3DetailType, { nullable: true })
  public populatedPublisher?: PeopleZoomLevel3DetailType

  @Field(() => String, { nullable: true })
  public abstract?: string

  @Field(() => String, { nullable: true })
  public language?: string

  @Field(() => String, { nullable: true })
  public languageLabel?: string

  @Field(() => String, { nullable: true })
  public geographicalKeyword?: string

  @Field(() => String, { nullable: true })
  public geographicalKeywordLabel?: string

  @Field(() => String, { nullable: true })
  public subject?: string

  @Field(() => String, { nullable: true })
  public subjectLabel?: string

  @Field(() => String, { nullable: true })
  public relatedPerInst?: string

  @Field(() => String, { nullable: true })
  public relatedPerInstLabel?: string

  @Field(() => String, { nullable: true })
  public objectNumber?: string

  @Field(() => String, { nullable: true })
  public availability?: string

  @Field(() => String, { nullable: true })
  public shelfmark?: string

  @Field(() => String, { nullable: true })
  public permanentLink?: string
}

@ObjectType()
export class PublicationsSerialZoomLevel3DetailType extends BasePublicationZoomLevel3Type {
  @Field(() => String, { nullable: true })
  public typeOfPublication?: string

  @Field(() => String, { nullable: true })
  public typeOfPublicationLabel?: string

  @Field(() => String, { nullable: true })
  public title?: string

  @Field(() => String, { nullable: true })
  public publisher?: string

  @Field(() => String, { nullable: true })
  public publisherLabel?: string

  @Field(() => PeopleZoomLevel3DetailType, { nullable: true })
  public populatedPublisher?: PeopleZoomLevel3DetailType

  @Field(() => String, { nullable: true })
  public yearOfPublication?: string

  @Field(() => String, { nullable: true })
  public placeOfPublication?: string

  @Field(() => String, { nullable: true })
  public placeOfPublicationLabel?: string

  @Field(() => String, { nullable: true })
  public subject?: string

  @Field(() => String, { nullable: true })
  public subjectLabel?: string

  @Field(() => String, { nullable: true })
  public language?: string

  @Field(() => String, { nullable: true })
  public languageLabel?: string

  @Field(() => String, { nullable: true })
  public continuedFrom?: string

  @Field(() => String, { nullable: true })
  public continuedAs?: string

  @Field(() => String, { nullable: true })
  public remarks?: string

  @Field(() => String, { nullable: true })
  public availability?: string

  @Field(() => String, { nullable: true })
  public shelfmark?: string

  @Field(() => String, { nullable: true })
  public holding?: string

  @Field(() => String, { nullable: true })
  public permanentLink?: string
}

@ObjectType()
export class PublicationsBookZoomLevel3DetailType extends BasePublicationZoomLevel3Type {
  @Field(() => String, { nullable: true })
  public typeOfPublication?: string

  @Field(() => String, { nullable: true })
  public typeOfPublicationLabel?: string

  @Field(() => String, { nullable: true })
  public title?: string

  @Field(() => [PublicationAuthorType], { nullable: true })
  public authors?: PublicationAuthorType[]

  @Field(() => String, { nullable: true })
  public publisher?: string

  @Field(() => String, { nullable: true })
  public publisherLabel?: string

  @Field(() => PeopleZoomLevel3DetailType, { nullable: true })
  public populatedPublisher?: PeopleZoomLevel3DetailType

  @Field(() => String, { nullable: true })
  public yearOfPublication?: string

  @Field(() => String, { nullable: true })
  public placeOfPublication?: string

  @Field(() => String, { nullable: true })
  public placeOfPublicationLabel?: string

  @Field(() => String, { nullable: true })
  public isbn?: string

  @Field(() => String, { nullable: true })
  public description?: string

  @Field(() => String, { nullable: true })
  public annotation?: string

  @Field(() => String, { nullable: true })
  public codeOfArchive?: string

  @Field(() => String, { nullable: true })
  public codeOfArchiveLabel?: string

  @Field(() => String, { nullable: true })
  public edition?: string

  @Field(() => String, { nullable: true })
  public illustration?: string

  @Field(() => String, { nullable: true })
  public numberOfPages?: string

  @Field(() => String, { nullable: true })
  public language?: string

  @Field(() => String, { nullable: true })
  public languageLabel?: string

  @Field(() => String, { nullable: true })
  public seriesLabel?: string

  @Field(() => String, { nullable: true })
  public number?: string

  @Field(() => String, { nullable: true })
  public geographicalKeyword?: string

  @Field(() => String, { nullable: true })
  public geographicalKeywordLabel?: string

  @Field(() => String, { nullable: true })
  public subject?: string

  @Field(() => String, { nullable: true })
  public subjectLabel?: string

  @Field(() => String, { nullable: true })
  public relatedPerInst?: string

  @Field(() => String, { nullable: true })
  public relatedPerInstLabel?: string

  @Field(() => String, { nullable: true })
  public objectNumber?: string

  @Field(() => String, { nullable: true })
  public availability?: string

  @Field(() => String, { nullable: true })
  public shelfmark?: string

  @Field(() => String, { nullable: true })
  public permanentLink?: string
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
