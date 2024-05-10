import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

@ArgsType()
export class ZoomLevel2Args {
  @Field(() => EntityNames, { nullable: false })
  public entityName: EntityNames

  @Field(() => String, { nullable: true })
  public text: string
}

@ArgsType()
export class SearchArgs {
  @Field(() => String, { nullable: false })
  public text: string

  @Field(() => String, { nullable: false })
  public lang: string
}

@ObjectType()
export class ZoomLevel2Type {
  @Field(() => String, { nullable: true })
  public thumbnail: string

  @Field(() => String, { nullable: true })
  public title: string | null

  @Field(() => String)
  public id: string
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

@ObjectType()
export class SearchAllResultType {
  @Field(() => String, { nullable: true })
  public thumbnail: string | null

  @Field(() => String, { nullable: true })
  public title: string | null

  @Field(() => String)
  public id: string

  @Field(() => EntityNames)
  public type: EntityNames
}

@ObjectType()
export class SearchAllParentType {
  @Field(() => [SearchAllResultType], { nullable: false })
  public nodes: SearchAllResultType[]

  @Field(() => Int, { nullable: false })
  public page: number

  @Field(() => Int, { nullable: false })
  public total: number
}
