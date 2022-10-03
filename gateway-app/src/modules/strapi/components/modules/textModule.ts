import { Field, ID, ObjectType } from '@nestjs/graphql'
import { ComponentCoreModuleLayouts } from '../../shared-types'

@ObjectType()
export class ComponentModulesTextModule {
    @Field({ nullable: true })
    public __typename?: 'ComponentModulesTextModule'

    @Field({ nullable: true })
    public Richtext?: string

    @Field(() => ID)
    public id: string

    @Field(() => ComponentCoreModuleLayouts)
    public textModuleLayout: ComponentCoreModuleLayouts
}
