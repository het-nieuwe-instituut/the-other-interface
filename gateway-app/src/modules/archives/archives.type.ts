import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class ArchivesZoomLevel4FiltersArgs {
    @Field(() => String, { nullable: true })
    public StartDate: string | null

    @Field(() => String, { nullable: true })
    public EndDate: string | null

    @Field(() => String, { nullable: true })
    public DescriptionLevel: string | null

    @Field(() => String, { nullable: true })
    public RelatedName: string | null
}
