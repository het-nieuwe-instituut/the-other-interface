import { Field, ID, ObjectType } from '@nestjs/graphql'
import { ComponentCoreModuleLayouts } from '../../shared-types'
import { ComponentCoreTableBody, ComponentCoreTableHead } from '../core/table'

@ObjectType()
export class ComponentModulesTableModule {
    @Field({ nullable: true })
    public __typename?: 'ComponentModulesTableModule'

    @Field(() => ID)
    public id: string

    @Field(() => ComponentCoreModuleLayouts)
    public tableModuleLayout: ComponentCoreModuleLayouts

    @Field(() => TableEntityResponse, { nullable: true })
    public table?: TableEntityResponse
}

@ObjectType()
export class TableEntityResponse {
    @Field({ nullable: true })
    public __typename?: 'TableEntityResponse'

    @Field({ nullable: true })
    public data?: TableEntity
}

@ObjectType()
export class TableEntity {
    @Field({ nullable: true })
    public __typename?: 'TableEntity'

    @Field(() => Table, { nullable: true })
    public attributes?: Table

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ObjectType()
export class Table {
    @Field({ nullable: true })
    public __typename?: 'Table'

    @Field(() => [ComponentCoreTableBody], { nullable: true })
    public TableBody?: ComponentCoreTableBody[]

    @Field(() => ComponentCoreTableHead, { nullable: true })
    public Tablehead?: ComponentCoreTableHead

    @Field({ nullable: true })
    public createdAt?: Date

    @Field({ nullable: true })
    public description?: string

    @Field({ nullable: true })
    public name?: string

    @Field({ nullable: true })
    public publishedAt?: Date

    @Field({ nullable: true })
    public updatedAt?: Date
}
