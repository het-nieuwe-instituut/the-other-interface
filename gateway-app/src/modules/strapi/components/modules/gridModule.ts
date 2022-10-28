import { Field, ID, Int, ObjectType } from '@nestjs/graphql'
import { Enum_Componentmodulesgridmodule_Fieldtypes } from '../../../../generated/strapi-sdk'
import { ComponentCoreModuleLayouts } from '../../shared-types'
import { ComponentCoreButton } from '../core/button'
import { ComponentCoreFeaturedFields, ComponentCoreGridFeaturedFields } from '../core/grid'

@ObjectType()
export class ComponentModulesGridModule {
    @Field(() => [ComponentCoreButton], { nullable: true })
    public buttons?: ComponentCoreButton[]

    @Field({ nullable: true })
    public description?: string

    @Field(() => [ComponentCoreFeaturedFields], { nullable: true })
    public featuredFields?: ComponentCoreFeaturedFields[]

    @Field()
    public fieldTitlesAreInverted: boolean

    @Field(() => Enum_Componentmodulesgridmodule_Fieldtypes)
    public fieldTypes: Enum_Componentmodulesgridmodule_Fieldtypes

    @Field(() => [ComponentCoreGridFeaturedFields], { nullable: true })
    public fields?: ComponentCoreGridFeaturedFields[]

    @Field(() => ComponentCoreModuleLayouts)
    public gridModuleLayout: ComponentCoreModuleLayouts

    @Field(() => ID)
    public id: string

    @Field(() => Int)
    public pageSize: number

    @Field()
    public showMoreButtonTitle: string

    @Field({ nullable: true })
    public title?: string
}
