import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql'
import { LongFilterInput } from '../../shared-types'

@ObjectType()
export class ComponentCoreTimeframe {
    @Field({ nullable: true })
    public __typename?: 'ComponentCoreTimeframe'

    @Field(() => ID)
    public id: string

    @Field({ nullable: true })
    public yearEnd?: number

    @Field({ nullable: true })
    public yearStart?: number
}

@ArgsType()
export class ComponentCoreTimeframeFiltersInput {
    @Field(() => [ComponentCoreTimeframeFiltersInput], { nullable: true })
    public and?: ComponentCoreTimeframeFiltersInput[]

    @Field(() => ComponentCoreTimeframeFiltersInput, { nullable: true })
    public not?: ComponentCoreTimeframeFiltersInput

    @Field(() => [ComponentCoreTimeframeFiltersInput], { nullable: true })
    public or?: ComponentCoreTimeframeFiltersInput[]

    @Field(() => LongFilterInput, { nullable: true })
    public yearEnd?: LongFilterInput

    @Field(() => LongFilterInput, { nullable: true })
    public yearStart?: LongFilterInput
}

@ArgsType()
export class ComponentCoreTimeframeInput {
    @Field(() => ID, { nullable: true })
    public id?: string

    @Field({ nullable: true })
    public yearEnd?: number

    @Field({ nullable: true })
    public yearStart?: number
}
