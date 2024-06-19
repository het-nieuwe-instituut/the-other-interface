import { ArgsType, Field, InputType, Int, ObjectType } from '@nestjs/graphql'
import { EntityNames } from '../util/entityNames.type'
import { Locale } from '../util/locale.type'
import { Enum_Triplyrecord_Type } from 'src/generated/strapi-sdk'

@InputType()
export class SelectedFilterSuggestion {
  @Field()
  public key: string

  @Field()
  public value: string
}

@ArgsType()
export class ZoomLevel2Args {
  @Field(() => EntityNames, { nullable: false })
  public entityName: EntityNames

  @Field(() => String, { nullable: true })
  public text?: string | null

  @Field(() => Locale)
  public locale: Locale

  @Field(() => [SelectedFilterSuggestion], { nullable: true })
  public selectedFilterSuggestions?: SelectedFilterSuggestion[] | null
}

@ObjectType()
export class ZoomLevel2Type {
  @Field(() => String, { nullable: true })
  public thumbnail?: string | null

  @Field(() => String, { nullable: true })
  public title?: string | null

  @Field(() => String)
  public id: string
}

@ObjectType()
export class ZoomLevel2ParentType {
  @Field(() => [ZoomLevel2Type], { nullable: true })
  public nodes?: ZoomLevel2Type[] | null

  @Field(() => Int, { nullable: false })
  public page: number
}

@ObjectType()
export class ZoomLevel2AmountParentType {
  @Field(() => String, { nullable: false })
  public total: string
}

@ObjectType()
export class FilterSuggestionType {
  @Field()
  public key: string

  @Field()
  public value: string
}

@ArgsType()
export class FilterSuggestionArgs {
  @Field(() => Enum_Triplyrecord_Type)
  public type: Enum_Triplyrecord_Type

  @Field(() => Locale)
  public locale: Locale

  @Field()
  public search: string
}
