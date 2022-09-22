import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql'

export enum EntityNames {
    Archives = 'Archives',
    Objects = 'Objects',
    People = 'People',
    Publications = 'Publications',
    Stories = 'Stories',
}
registerEnumType(EntityNames, { name: 'EntityNames' })

@ObjectType()
export class ZoomLevel1Type {
    @Field(() => String)
    public name: string

    @Field(() => Int)
    public count: number

    @Field(() => EntityNames)
    public id: EntityNames
}
