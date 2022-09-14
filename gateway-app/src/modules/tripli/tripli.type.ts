import { ArgsType, Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql'
import { IsOptional } from 'class-validator'

export enum EntityNames {
    Archives = 'Archives',
    Objects = 'Objects',
    People = 'People',
    Publications = 'Publications',
    Stories = 'Stories',
}
registerEnumType(EntityNames, { name: 'EntityNames' })

export interface EntityMappingType {
    id: EntityNames
    metadata: EntityMappingMetaData
    type: 'strapi' | 'tripli'
}

export interface EntityMappingMetaData {
    endPointZoom2?: string
    identifiableURI?: string
    url?: string
}

@ObjectType()
export class TripliType {
    @Field(() => String)
    public name: string

    @Field(() => Int)
    public count: number

    @Field(() => EntityNames)
    public id: EntityNames
}

@ArgsType()
export class GetCountsArgs {
    @Field(() => Int, { nullable: true })
    @IsOptional()
    public zoomLevel?: number
}
