import { ArgsType, Field, Int, ObjectType, PickType } from '@nestjs/graphql'
import { IsString } from 'class-validator'
import { EntityNames } from '../util/entityNames.type'
import { PaginationArgs } from '../util/paginationArgs.type'
import { Locale } from '../util/locale.type'

@ObjectType()
export class SearchResultItemType {
  @Field(() => String)
  public id: string

  @Field(() => EntityNames)
  public type: EntityNames

  @Field(() => String, { nullable: true })
  public thumbnail?: string | null

  @Field(() => String, { nullable: true })
  public title?: string | null
}

@ObjectType()
export class SearchResultType {
  @Field(() => [SearchResultItemType], { nullable: true })
  public nodes?: (SearchResultItemType | null)[] | null

  @Field(() => Int)
  public total: number
}

@ArgsType()
export class SearchArgsType extends PickType(PaginationArgs, ['start', 'limit']) {
  @Field(() => String)
  @IsString()
  public text: string

  @Field(() => Locale)
  public lang: Locale
}
