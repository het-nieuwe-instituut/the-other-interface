import { Field, InputType, ObjectType } from '@nestjs/graphql'

// TODO: added for POC, delete (or update for actual requirements) before production
@ObjectType()
export class PeopleType {
    @Field({ nullable: true })
    public name?: string

    @Field({ nullable: true })
    public birthDate?: string

    @Field({ nullable: true })
    public deathDate?: string

    @Field({ nullable: true })
    public nationalityLabel?: string
}

@InputType()
export class PeopleZoomLevel4FiltersArgs {
    @Field(() => String, { nullable: true })
    public NameType: string | null

    @Field(() => String, { nullable: true })
    public Profession: string | null

    @Field(() => String, { nullable: true })
    public Place: string | null

    @Field(() => String, { nullable: true })
    public Period: string | null

    @Field(() => String, { nullable: true })
    public BirthDate: string | null

    @Field(() => String, { nullable: true })
    public DeathDate: string | null
}
