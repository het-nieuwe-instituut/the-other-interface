import { ArgsType, Field, ObjectType } from '@nestjs/graphql'
import { IsString } from 'class-validator'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

@ObjectType()
export class ZoomLevel5Type {
    @Field()
    public id: string

    @Field(() => EntityNames)
    public type: EntityNames

    @Field()
    public name: string

    @Field()
    public total: number

    @Field(() => [ZoomLevel5Type], { nullable: 'itemsAndList' })
    public randomRecords: ZoomLevel5Type[]
}

@ArgsType()
export class ZoomLevel5Args {
    @Field(() => EntityNames)
    public entityName: EntityNames

    @Field()
    @IsString()
    public id: string
}
