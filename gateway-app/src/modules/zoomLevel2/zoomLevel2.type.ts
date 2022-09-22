import { ObjectType, Field, ArgsType } from '@nestjs/graphql'
import { EntityNames } from '../zoomLevel1/zoomLevel1.type'

@ObjectType()
export class ZoomLevel2Type {
    @Field(() => String, { nullable: false })
    public id: string

    @Field(() => String, { nullable: false })
    public filter: string
}

@ArgsType()
export class ZoomLevel2Args {
    @Field(() => EntityNames, { nullable: false })
    public entityName: EntityNames
}
