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
  @Field()
  public id: string

  @Field(() => String)
  public name: string

  @Field(() => [String], { nullable: true })
  public nameTypes?: string[]

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

  @Field(() => [PeopleAssociationType], { nullable: true })
  public associations?: PeopleAssociationType[]

  @Field(() => String, { nullable: true })
  public relatedItem?: string | null

  @Field(() => String, { nullable: true })
  public relatedItemLabel?: string | null

  @Field(() => String, { nullable: true })
  public description?: string | null

  @Field(() => String, { nullable: true })
  public permanentLink?: string | null
}

@ObjectType()
export class PeopleAssociationType {
  @Field(() => String)
  public association: string

  @Field(() => String, { nullable: true })
  public associationLabel?: string | null
}
