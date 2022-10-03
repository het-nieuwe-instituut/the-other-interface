import { Field, ID, ObjectType } from '@nestjs/graphql'
import { ComponentCoreModuleLayouts } from '../../shared-types'

@ObjectType()
export class ComponentModulesPullquote {
    @Field({ nullable: true })
    public __typename?: 'ComponentModulesPullquote'

    @Field(() => ID)
    public id: string

    @Field(() => ComponentCoreModuleLayouts)
    public pullquoteModuleLayout: ComponentCoreModuleLayouts

    @Field({ nullable: true })
    public text?: string
}
