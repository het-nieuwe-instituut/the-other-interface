import { ArgsType, Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Enum_Componentmodulesbuttonsmodule_Buttonstyle } from 'src/generated/strapi-sdk'
import {
    BooleanFilterInput,
    ComponentCoreModuleLayouts,
    PaginationArg,
    StringFilterInput,
    UploadFileEntityResponse,
} from '../../shared-types'

@ObjectType()
export class ComponentCoreButton {
    @Field(() => ID)
    public id: string

    @Field({ nullable: true })
    public __typename?: 'ComponentCoreButton'

    @Field(() => UploadFileEntityResponse, { nullable: true })
    public attachment?: UploadFileEntityResponse

    @Field({ nullable: true })
    public hasAttachment?: boolean

    @Field({ nullable: true })
    public text?: string

    @Field({ nullable: true })
    public url?: string
}

@ArgsType()
export class ComponentCoreButtonFiltersInput {
    @Field(() => [ComponentCoreButtonFiltersInput], { nullable: true })
    public and?: ComponentCoreButtonFiltersInput[]

    @Field(() => BooleanFilterInput, { nullable: true })
    public hasAttachment?: BooleanFilterInput

    @Field(() => ComponentCoreButtonFiltersInput, { nullable: true })
    public not?: ComponentCoreButtonFiltersInput

    @Field(() => [ComponentCoreButtonFiltersInput], { nullable: true })
    public or?: ComponentCoreButtonFiltersInput[]

    @Field(() => StringFilterInput, { nullable: true })
    public text?: StringFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public url?: StringFilterInput
}

registerEnumType(Enum_Componentmodulesbuttonsmodule_Buttonstyle, {
    name: 'Enum_Componentmodulesbuttonsmodule_Buttonstyle',
})

@ObjectType()
export class ComponentModulesButtonsModule {
    @Field(() => ID)
    public id: string

    @Field(() => ComponentCoreModuleLayouts)
    public buttonsModuleLayout: ComponentCoreModuleLayouts

    @Field({ nullable: true })
    public __typename?: 'ComponentModulesButtonsModule'

    @Field(() => Enum_Componentmodulesbuttonsmodule_Buttonstyle, { nullable: true })
    public buttonStyle?: Enum_Componentmodulesbuttonsmodule_Buttonstyle

    @Field(() => [ComponentCoreButton], { nullable: true })
    public buttons?: ComponentCoreButton[]
}

@ArgsType()
export class ComponentModulesButtonsModuleButtonsArgs {
    @Field(() => ComponentCoreButtonFiltersInput, { nullable: true })
    public filters?: ComponentCoreButtonFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field({ nullable: true })
    public sort?: string[]
}
