import { Field } from '@nestjs/graphql'

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
