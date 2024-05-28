import { Field, ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Enum_Componentmodulesbuttonsmodule_Buttonstyle } from '../../../../generated/strapi-sdk'
import {
  ComponentCoreModuleLayoutsFiltersInput,
  PaginationArg,
  StringFilterInput,
} from '../../shared-types'
import { ComponentCoreButton, ComponentCoreButtonFiltersInput } from '../core/button'

registerEnumType(Enum_Componentmodulesbuttonsmodule_Buttonstyle, {
  name: 'Enum_Componentmodulesbuttonsmodule_Buttonstyle',
})

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

  @Field(() => Enum_Componentmodulesbuttonsmodule_Buttonstyle, { nullable: true })
  public buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle

  @Field(() => [ComponentCoreButton], { nullable: true })
  public buttons?: ComponentCoreButton[]
}

@InputType()
export class ComponentModulesButtonsModuleFiltersInput {
  @Field(() => [ComponentModulesButtonsModuleFiltersInput], { nullable: true })
  public and?: ComponentModulesButtonsModuleFiltersInput[]

  @Field(() => StringFilterInput, { nullable: true })
  public buttonStyle?: StringFilterInput

  @Field(() => ComponentCoreButtonFiltersInput, { nullable: true })
  public buttons?: ComponentCoreButtonFiltersInput

  @Field(() => ComponentCoreModuleLayoutsFiltersInput, { nullable: true })
  public buttonsModuleLayout?: ComponentCoreModuleLayoutsFiltersInput

  @Field(() => ComponentModulesButtonsModuleFiltersInput, { nullable: true })
  public not?: ComponentModulesButtonsModuleFiltersInput

  @Field(() => [ComponentModulesButtonsModuleFiltersInput], { nullable: true })
  public or?: ComponentModulesButtonsModuleFiltersInput[]
}
