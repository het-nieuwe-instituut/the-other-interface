import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { LongFilterInput } from '../../shared-types'

@ObjectType()
export class ComponentCoreTimeframe {
  @Field(() => ID)
  public id: string

  @Field({ nullable: true })
  public yearEnd?: number

  @Field({ nullable: true })
  public yearStart?: number
}

@InputType()
export class ComponentCoreTimeframeFiltersInput {
  @Field(() => [ComponentCoreTimeframeFiltersInput], { nullable: true })
  public and?: ComponentCoreTimeframeFiltersInput[]

  @Field(() => ComponentCoreTimeframeFiltersInput, { nullable: true })
  public not?: ComponentCoreTimeframeFiltersInput

  @Field(() => [ComponentCoreTimeframeFiltersInput], { nullable: true })
  public or?: ComponentCoreTimeframeFiltersInput[]

  @Field(() => LongFilterInput, { nullable: true })
  public yearEnd?: LongFilterInput

  @Field(() => LongFilterInput, { nullable: true })
  public yearStart?: LongFilterInput
}

@InputType()
export class ComponentCoreTimeframeInput {
  @Field(() => ID, { nullable: true })
  public id?: string

  @Field({ nullable: true })
  public yearEnd?: number

  @Field({ nullable: true })
  public yearStart?: number
}
