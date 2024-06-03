import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { StringFilterInput } from '../../shared-types'

@ObjectType()
export class ComponentCoreButton {
  @Field(() => ID)
  public id: string

  @Field({ nullable: true })
  public text?: string

  @Field({ nullable: true })
  public url?: string
}

@InputType()
export class ComponentCoreButtonFiltersInput {
  @Field(() => [ComponentCoreButtonFiltersInput], { nullable: true })
  public and?: ComponentCoreButtonFiltersInput[]

  @Field(() => ComponentCoreButtonFiltersInput, { nullable: true })
  public not?: ComponentCoreButtonFiltersInput

  @Field(() => [ComponentCoreButtonFiltersInput], { nullable: true })
  public or?: ComponentCoreButtonFiltersInput[]

  @Field(() => StringFilterInput, { nullable: true })
  public text?: StringFilterInput

  @Field(() => StringFilterInput, { nullable: true })
  public url?: StringFilterInput
}
