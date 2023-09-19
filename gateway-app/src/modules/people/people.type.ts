import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class PoepleZoomLevel3DetailType {
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
