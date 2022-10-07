import { ArgsType, Field, ObjectType } from '@nestjs/graphql'
import { IsString } from 'class-validator'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

@ObjectType()
export class ZoomLevel5RelationsType {
    @Field(() => EntityNames)
    public type: EntityNames

    @Field()
    public total: number

    @Field(() => [RelatedRecordType], { nullable: true })
    public randomRelations: RelatedRecordType[]
}

@ObjectType()
export class RelatedRecordType {
    @Field()
    public id: string

    @Field(() => EntityNames)
    public type: EntityNames

    @Field()
    public label: string

    @Field(() => [ZoomLevel5RelationsType], { nullable: true })
    public relations: ZoomLevel5RelationsType[]
}

@ArgsType()
export class ZoomLevel5Args {
    @Field(() => EntityNames)
    public type: EntityNames

    @Field()
    @IsString()
    public id: string
}
