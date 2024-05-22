import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql'
import { EntityNames } from '../util/entityNames.type'
import { Locale } from '../util/locale.type'

@ArgsType()
export class ZoomLevel2Args {
  @Field(() => EntityNames, { nullable: false })
  public entityName: EntityNames

  @Field(() => String, { nullable: true })
  public text: string

  @Field(() => Locale)
  public locale: Locale
}

@ObjectType()
export class ZoomLevel2Type {
  @Field(() => String, { nullable: true })
  public thumbnail: string

  @Field(() => String, { nullable: true })
  public title: string | null

  @Field(() => String, { nullable: true })
  public id: string | null
}

@ObjectType()
export class ZoomLevel2ParentType {
  @Field(() => [ZoomLevel2Type], { nullable: true })
  public nodes: ZoomLevel2Type[]

  @Field(() => Int, { nullable: false })
  public page: number
}

@ObjectType()
export class ZoomLevel2AmountParentType {
  @Field(() => String, { nullable: false })
  public total: string
}
