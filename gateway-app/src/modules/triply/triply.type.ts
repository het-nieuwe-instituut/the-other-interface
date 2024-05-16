import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

@ObjectType()
export class SearchResultItemType {
  @Field()
  public id: string

  @Field(() => EntityNames)
  public type: EntityNames

  @Field({ nullable: true })
  public thumbnail?: string | null

  @Field({ nullable: true })
  public title?: string | null
}

@ObjectType()
export class SearchResultType {
  @Field(() => [SearchResultItemType], { nullable: true })
  public nodes?: (SearchResultItemType | null)[] | null

  @Field(() => Int)
  public page: number

  @Field(() => Int)
  public total: number
}

@ArgsType()
export class SearchArgsType {
  @Field()
  public text: string

  @Field()
  public lang: string
}
