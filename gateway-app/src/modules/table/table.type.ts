import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql'
import { PublicationState } from 'src/generated/strapi-sdk'
import { ComponentCoreTableBodyFiltersInput, ComponentCoreTableHeadFiltersInput } from '../strapi/components/core/table'
import { TableEntity } from '../strapi/components/modules/tableModule'
import {
    DateTimeFilterInput,
    IdFilterInput,
    PaginationArg,
    ResponseCollectionMeta,
    StringFilterInput,
} from '../strapi/shared-types'

@ObjectType()
export class TableEntityResponseCollection {
    @Field(() => [TableEntity])
    public data: TableEntity[]

    @Field(() => ResponseCollectionMeta)
    public meta: ResponseCollectionMeta
}

@ArgsType()
export class TableFiltersInput {
    @Field(() => ComponentCoreTableBodyFiltersInput, { nullable: true })
    public TableBody?: ComponentCoreTableBodyFiltersInput

    @Field(() => ComponentCoreTableHeadFiltersInput, { nullable: true })
    public Tablehead?: ComponentCoreTableHeadFiltersInput

    @Field(() => [TableFiltersInput], { nullable: true })
    public and?: TableFiltersInput[]

    @Field(() => DateTimeFilterInput, { nullable: true })
    public createdAt?: DateTimeFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public description?: StringFilterInput

    @Field(() => IdFilterInput, { nullable: true })
    public id?: IdFilterInput

    @Field(() => StringFilterInput, { nullable: true })
    public name?: StringFilterInput

    @Field(() => TableFiltersInput, { nullable: true })
    public not?: TableFiltersInput

    @Field(() => [TableFiltersInput], { nullable: true })
    public or?: TableFiltersInput[]

    @Field(() => DateTimeFilterInput, { nullable: true })
    public publishedAt?: DateTimeFilterInput

    @Field(() => DateTimeFilterInput, { nullable: true })
    public updatedAt?: DateTimeFilterInput
}

@ArgsType()
export class QueryTableArgs {
    @Field(() => ID, { nullable: true })
    public id?: string
}

@ArgsType()
export class QueryTablesArgs {
    @Field(() => TableFiltersInput, { nullable: true })
    public filters?: TableFiltersInput

    @Field(() => PaginationArg, { nullable: true })
    public pagination?: PaginationArg

    @Field(() => PublicationState, { nullable: true })
    public publicationState?: PublicationState

    @Field(() => [String], { nullable: true })
    public sort?: string[]
}
