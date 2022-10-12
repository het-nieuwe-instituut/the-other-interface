import { Field, ID, InputType, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Enum_Componentmodulesbuttonsmodule_Buttonstyle } from '../../../../generated/strapi-sdk'
import { ComponentCoreModuleLayouts, PaginationArg } from '../../shared-types'
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

    @Field(() => ComponentCoreModuleLayouts)
    public buttonsModuleLayout: ComponentCoreModuleLayouts

    @Field(() => Enum_Componentmodulesbuttonsmodule_Buttonstyle, { nullable: true })
    public buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle

    @Field(() => [ComponentCoreButton], { nullable: true })
    public buttons?: ComponentCoreButton[]
}
