import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { PaginationArg } from '../../shared-types'
import { ComponentCoreButton, ComponentCoreButtonFiltersInput } from '../core/button'

@InputType()
export class ComponentModulesButtonsModuleButtonsArgs {
  @Field(() => ComponentCoreButtonFiltersInput, { nullable: true })
  public filters?: ComponentCoreButtonFiltersInput

  @Field(() => PaginationArg, { nullable: true })
  public pagination?: PaginationArg

  @Field(() => [String], { nullable: true })
  public sort?: string[]
}

@ObjectType()
export class ComponentModulesButtonsModule {
  @Field(() => ID)
  public id: string

  @Field(() => [ComponentCoreButton], { nullable: true })
  public buttons?: ComponentCoreButton[]
}

@InputType()
export class ComponentModulesButtonsModuleFiltersInput {
  @Field(() => [ComponentModulesButtonsModuleFiltersInput], { nullable: true })
  public and?: ComponentModulesButtonsModuleFiltersInput[]

  @Field(() => ComponentCoreButtonFiltersInput, { nullable: true })
  public buttons?: ComponentCoreButtonFiltersInput

  @Field(() => ComponentModulesButtonsModuleFiltersInput, { nullable: true })
  public not?: ComponentModulesButtonsModuleFiltersInput

  @Field(() => [ComponentModulesButtonsModuleFiltersInput], { nullable: true })
  public or?: ComponentModulesButtonsModuleFiltersInput[]
}
