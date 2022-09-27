import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class ObjectsZoomLevel4FiltersArgs {
    @Field(() => String, { nullable: true })
    public Objectname: string | null

    @Field(() => String, { nullable: true })
    public Maker: string | null

    @Field(() => String, { nullable: true })
    public Material: string | null

    @Field(() => String, { nullable: true })
    public Technique: string | null

    @Field(() => String, { nullable: true })
    public Subject: string | null

    @Field(() => String, { nullable: true })
    public PerInst: string | null

    @Field(() => String, { nullable: true })
    public StartDate: string | null

    @Field(() => String, { nullable: true })
    public EndDate: string | null
}
