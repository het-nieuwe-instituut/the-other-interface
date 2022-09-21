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
    public uri: string

    @Field(() => String, { nullable: true })
    public name: string

    @Field(() => Int, { nullable: true })
    public count: number

    @Field(() => Int, { nullable: true })
    public total: number
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
