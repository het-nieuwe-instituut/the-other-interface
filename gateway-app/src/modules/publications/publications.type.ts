import { Field, InputType, ObjectType } from '@nestjs/graphql'

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

@ObjectType()
export class PublicationsBookZoomLevel5DetailType {
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

    @Field(() => String, { nullable: true })
    public publisher?: string

    @Field(() => String, { nullable: true })
    public publisherLabel?: string

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
