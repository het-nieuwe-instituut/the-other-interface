import { ArgsType, Field, ObjectType, Int } from '@nestjs/graphql'
import { Min } from 'class-validator'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

@ArgsType()
export class ZoomLevel3Args {
    @Field(() => EntityNames, { nullable: false })
    public entityName: EntityNames

    @Field(() => String, { nullable: false })
    public filterId: string
}

@ObjectType()
export class ZoomLevel3Type {
    @Field(() => String, { nullable: true })
    public uri: string | null

    @Field(() => String, { nullable: true })
    public name: string | null

    @Field(() => Int, { nullable: true })
    public count: number | null

    @Field(() => Int, { nullable: true })
    public total: number | null
}

@ArgsType()
export class PaginationArgs {
    @Field(() => Int, { nullable: false })
    @Min(1)
    public page: number

    @Field(() => Int, { nullable: false })
    @Min(1)
    public pageSize: number
}
