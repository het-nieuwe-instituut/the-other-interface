import { createUnionType, Field, InputType, ObjectType, registerEnumType } from '@nestjs/graphql'
import { PoepleZoomLevel5DetailType } from '../people/people.type'
import { CustomError } from '../util/customError'
import { PublicationsZoomLevel5Types } from './publications.service'

@InputType()
export class PublicationsZoomLevel4FiltersArgs {
    @Field(() => String, { nullable: true })
    public Author: string | null

    @Field(() => String, { nullable: true })
    public TypeOfPublication: string | null

    @Field(() => String, { nullable: true })
    public GeograficalKeyword: string | null

    @Field(() => String, { nullable: true })
    public Subject: string | null

    @Field(() => String, { nullable: true })
    public RelatedPerInst: string | null
}

registerEnumType(PublicationsZoomLevel5Types, { name: 'PublicationsZoomLevel5Types' })

@ObjectType()
class BasePublicationZoomLevel5Type {
    @Field()
    public id: string

    @Field(() => PublicationsZoomLevel5Types)
    public type: PublicationsZoomLevel5Types
}

@ObjectType()
export class PublicationsAudioVisualZoomLevel5DetailType extends BasePublicationZoomLevel5Type {
    @Field(() => String, { nullable: true })
    public typeOfPublication?: string

    @Field(() => String, { nullable: true })
    public typeOfPublicationLabel?: string

    @Field(() => String, { nullable: true })
    public title?: string

    @Field(() => String, { nullable: true })
    public author?: string

    @Field(() => String, { nullable: true })
    public authorLabel?: string

    @Field(() => String, { nullable: true })
    public authorRole?: string

    @Field(() => String, { nullable: true })
    public authorRoleLabel?: string

    @Field(() => PoepleZoomLevel5DetailType, { nullable: true })
    public populatedAuthor?: PoepleZoomLevel5DetailType

    @Field(() => String, { nullable: true })
    public publisher?: string

    @Field(() => String, { nullable: true })
    public publisherLabel?: string

    @Field(() => PoepleZoomLevel5DetailType, { nullable: true })
    public populatedPublisher?: PoepleZoomLevel5DetailType

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
export class PublicationsArticleZoomLevel5DetailType extends BasePublicationZoomLevel5Type {
    @Field(() => String, { nullable: true })
    public typeOfPublication?: string

    @Field(() => String, { nullable: true })
    public typeOfPublicationLabel?: string

    @Field(() => String, { nullable: true })
    public title?: string

    @Field(() => String, { nullable: true })
    public author?: string

    @Field(() => String, { nullable: true })
    public authorLabel?: string

    @Field(() => String, { nullable: true })
    public authorRole?: string

    @Field(() => String, { nullable: true })
    public authorRoleLabel?: string

    @Field(() => PoepleZoomLevel5DetailType, { nullable: true })
    public populatedAuthor?: PoepleZoomLevel5DetailType

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

    @Field(() => PoepleZoomLevel5DetailType, { nullable: true })
    public populatedPublisher?: PoepleZoomLevel5DetailType

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
export class PublicationsSerialZoomLevel5DetailType extends BasePublicationZoomLevel5Type {
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

    @Field(() => PoepleZoomLevel5DetailType, { nullable: true })
    public populatedPublisher?: PoepleZoomLevel5DetailType

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
export class PublicationsBookZoomLevel5DetailType extends BasePublicationZoomLevel5Type {
    @Field(() => String, { nullable: true })
    public typeOfPublication?: string

    @Field(() => String, { nullable: true })
    public typeOfPublicationLabel?: string

    @Field(() => String, { nullable: true })
    public title?: string

    @Field(() => String, { nullable: true })
    public author?: string

    @Field(() => String, { nullable: true })
    public authorLabel?: string

    @Field(() => String, { nullable: true })
    public authorRole?: string

    @Field(() => String, { nullable: true })
    public authorRoleLabel?: string

    @Field(() => PoepleZoomLevel5DetailType, { nullable: true })
    public populatedAuthor?: PoepleZoomLevel5DetailType

    @Field(() => String, { nullable: true })
    public publisher?: string

    @Field(() => String, { nullable: true })
    public publisherLabel?: string

    @Field(() => PoepleZoomLevel5DetailType, { nullable: true })
    public populatedPublisher?: PoepleZoomLevel5DetailType

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

export const PublicationZoomLevel5UnionType = createUnionType({
    name: 'PublicationZoomLevel5UnionType',
    types: () =>
        [
            PublicationsAudioVisualZoomLevel5DetailType,
            PublicationsArticleZoomLevel5DetailType,
            PublicationsSerialZoomLevel5DetailType,
            PublicationsBookZoomLevel5DetailType,
        ] as const,
    resolveType: (publication: BasePublicationZoomLevel5Type) => {
        switch (publication.type) {
            case PublicationsZoomLevel5Types.audiovisual:
                return PublicationsAudioVisualZoomLevel5DetailType
            case PublicationsZoomLevel5Types.article:
                return PublicationsArticleZoomLevel5DetailType
            case PublicationsZoomLevel5Types.serial:
                return PublicationsSerialZoomLevel5DetailType
            case PublicationsZoomLevel5Types.book:
                return PublicationsBookZoomLevel5DetailType
            default:
                throw CustomError.externalCritical(`publication type ${publication.type} cannot be resolved`)
        }
    },
})
