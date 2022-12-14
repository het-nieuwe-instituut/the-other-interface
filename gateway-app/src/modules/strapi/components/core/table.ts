import { Field, ID, InputType, ObjectType } from '@nestjs/graphql'
import { PaginationArg, StringFilterInput } from '../../shared-types'

@ObjectType()
export class ComponentCoreTableBody {
    @Field(() => [ComponentCoreTableBodyItem], { nullable: true })
    public TableBodyItem?: ComponentCoreTableBodyItem[]

    @Field(() => ID)
    public id: string
}

@InputType()
export class ComponentCoreTableBodyInput {
    @Field(() => [ComponentCoreTableBodyItemInput], { nullable: true })
    public TableBodyItem?: ComponentCoreTableBodyItemInput[]

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ObjectType()
export class ComponentCoreTableBodyItem {
    @Field(() => ID)
    public id: string

    @Field({ nullable: true })
    public value?: string
}

@InputType()
export class ComponentCoreTableBodyItemInput {
    @Field(() => ID, { nullable: true })
    public id?: string

    @Field({ nullable: true })
    public value?: string
}

@ObjectType()
export class ComponentCoreTableHead {
    @Field(() => [ComponentCoreTableHeadItem], { nullable: true })
    public TableHeadItem?: ComponentCoreTableHeadItem[]

    @Field(() => ID)
    public id: string
}

@InputType()
export class ComponentCoreTableHeadInput {
    @Field(() => [ComponentCoreTableHeadItemInput], { nullable: true })
    public TableHeadItem?: ComponentCoreTableHeadItemInput[]

    @Field(() => ID, { nullable: true })
    public id?: string
}

@ObjectType()
export class ComponentCoreTableHeadItem {
    @Field(() => ID, { nullable: true })
    public id: string

    @Field({ nullable: true })
    public label?: string
}

@InputType()
export class ComponentCoreTableHeadItemFiltersInput {
    @Field(() => [ComponentCoreTableHeadItemFiltersInput], { nullable: true })
    public and?: ComponentCoreTableHeadItemFiltersInput[]

    @Field(() => StringFilterInput, { nullable: true })
    public label?: StringFilterInput

    @Field(() => ComponentCoreTableHeadItemFiltersInput, { nullable: true })
    public not?: ComponentCoreTableHeadItemFiltersInput

    @Field(() => [ComponentCoreTableHeadItemFiltersInput], { nullable: true })
    public or?: ComponentCoreTableHeadItemFiltersInput[]
}

@InputType()
export class ComponentCoreTableHeadItemInput {
    @Field(() => ID, { nullable: true })
    public id?: string

    @Field({ nullable: true })
    public label?: string
}

@InputType()
export class ComponentCoreTableBodyItemFiltersInput {
    @Field(() => [ComponentCoreTableBodyItemFiltersInput], { nullable: true })
    public and?: ComponentCoreTableBodyItemFiltersInput[]

    @Field(() => ComponentCoreTableBodyItemFiltersInput, { nullable: true })
    public not?: ComponentCoreTableBodyItemFiltersInput

    @Field(() => [ComponentCoreTableBodyItemFiltersInput], { nullable: true })
    public or?: ComponentCoreTableBodyItemFiltersInput[]

    @Field(() => StringFilterInput, { nullable: true })
    public value?: StringFilterInput
}

@InputType()
export class ComponentCoreTableBodyFiltersInput {
    @Field(() => ComponentCoreTableBodyItemFiltersInput, { nullable: true })
    public TableBodyItem?: ComponentCoreTableBodyItemFiltersInput

    @Field(() => [ComponentCoreTableBodyFiltersInput], { nullable: true })
    public and?: ComponentCoreTableBodyFiltersInput[]

    @Field(() => ComponentCoreTableBodyFiltersInput, { nullable: true })
    public not?: ComponentCoreTableBodyFiltersInput

    @Field(() => [ComponentCoreTableBodyFiltersInput], { nullable: true })
    public or?: ComponentCoreTableBodyFiltersInput[]
}

@InputType()
export class ComponentCoreTableHeadFiltersInput {
    @Field(() => ComponentCoreTableHeadItemFiltersInput, { nullable: true })
    public TableHeadItem?: ComponentCoreTableHeadItemFiltersInput

    @Field(() => [ComponentCoreTableHeadFiltersInput], { nullable: true })
    public and?: ComponentCoreTableHeadFiltersInput[]

    @Field(() => ComponentCoreTableHeadFiltersInput, { nullable: true })
    public not?: ComponentCoreTableHeadFiltersInput

    @Field(() => [ComponentCoreTableHeadFiltersInput], { nullable: true })
    public or?: ComponentCoreTableHeadFiltersInput[]
}

@InputType()
export class ComponentCoreTableBodyTableBodyItemArgs {
    @Field(() => ComponentCoreTableBodyItemFiltersInput, { nullable: true })
    public filters?: ComponentCoreTableBodyItemFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}

@InputType()
export class TableTableBodyArgs {
    @Field(() => ComponentCoreTableBodyFiltersInput, { nullable: true })
    public filters?: ComponentCoreTableBodyFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}

@InputType()
export class ComponentCoreTableHeadTableHeadItemArgs {
    @Field(() => ComponentCoreTableHeadItemFiltersInput, { nullable: true })
    public filters?: ComponentCoreTableHeadItemFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}
