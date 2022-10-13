import { Field, InputType, ObjectType } from '@nestjs/graphql'

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

@ObjectType()
export class PoepleZoomLevel5DetailType {
    @Field(() => String, { nullable: true })
    public name?: string | null

    @Field(() => String, { nullable: true })
    public nameType?: string | null

    @Field(() => String, { nullable: true })
    public nameVariation?: string | null

    @Field(() => String, { nullable: true })
    public birthDate?: string | null

    @Field(() => String, { nullable: true })
    public birthPlace?: string | null

    @Field(() => String, { nullable: true })
    public birthPlaceLabel?: string | null

    @Field(() => String, { nullable: true })
    public deathDate?: string | null

    @Field(() => String, { nullable: true })
    public deathPlace?: string | null

    @Field(() => String, { nullable: true })
    public deathPlaceLabel?: string | null

    @Field(() => String, { nullable: true })
    public place?: string | null

    @Field(() => String, { nullable: true })
    public placeLabel?: string | null

    @Field(() => String, { nullable: true })
    public startDate?: string | null

    @Field(() => String, { nullable: true })
    public endDate?: string | null

    @Field(() => String, { nullable: true })
    public nationality?: string | null

    @Field(() => String, { nullable: true })
    public nationalityLabel?: string | null

    @Field(() => String, { nullable: true })
    public institution?: string | null

    @Field(() => String, { nullable: true })
    public institutionLabel?: string | null

    @Field(() => String, { nullable: true })
    public profession?: string | null

    @Field(() => String, { nullable: true })
    public professionLabel?: string | null

    @Field(() => String, { nullable: true })
    public gender?: string | null

    @Field(() => String, { nullable: true })
    public association?: string | null

    @Field(() => String, { nullable: true })
    public associationLabel?: string | null

    @Field(() => String, { nullable: true })
    public relatedItem?: string | null

    @Field(() => String, { nullable: true })
    public relatedItemLabel?: string | null

    @Field(() => String, { nullable: true })
    public description?: string | null

    @Field(() => String, { nullable: true })
    public permanentLink?: string | null
}
