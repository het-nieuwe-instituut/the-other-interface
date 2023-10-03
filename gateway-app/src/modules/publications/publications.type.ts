import { Field, ObjectType, createUnionType, registerEnumType } from '@nestjs/graphql'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'
import { PublicationsZoomLevel3Types } from './publications.service'
import { PeopleZoomLevel3DetailType } from '../people/people.type'
import { CustomError } from '../util/customError'

// registerEnumType(PublicationsZoomLevel3Types, { name: 'PublicationsZoomLevel3Types' })

@ObjectType()
export class PublicationZoomLevel3DetailType {
  @Field()
  public id: string

  @Field(() => String, { nullable: true })
  public title: string

  @Field(() => EntityNames, { nullable: true })
  public type: EntityNames

  @Field(() => String, { nullable: true })
  public thumbnail: string

  @Field(() => String, { nullable: true })
  public objectNumber: string

  @Field(() => String, { nullable: true })
  public yearOfPublication: string
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

export const PublicationZoomLevel3UnionType = createUnionType({
  name: 'PublicationZoomLevel3UnionType',
  types: () =>
    [
      PublicationsAudioVisualZoomLevel3DetailType,
      PublicationsArticleZoomLevel3DetailType,
      PublicationsSerialZoomLevel3DetailType,
      PublicationsBookZoomLevel3DetailType,
    ] as const,
  resolveType: (publication: BasePublicationZoomLevel3Type) => {
    switch (publication.type) {
      case PublicationsZoomLevel3Types.audiovisual:
        return PublicationsAudioVisualZoomLevel3DetailType
      case PublicationsZoomLevel3Types.article:
        return PublicationsArticleZoomLevel3DetailType
      case PublicationsZoomLevel3Types.serial:
        return PublicationsSerialZoomLevel3DetailType
      case PublicationsZoomLevel3Types.book:
        return PublicationsBookZoomLevel3DetailType
      default:
        throw CustomError.externalCritical(
          `publication type ${publication.type} cannot be resolved`
        )
    }
  },
})

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
