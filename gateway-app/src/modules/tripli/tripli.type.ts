import { ArgsType, Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql'

export enum EntityNames {
    Archives = 'Archives',
    Objects = 'Objects',
    People = 'People',
    Publications = 'Publications',
    Stories = 'Stories',
}
registerEnumType(EntityNames, { name: 'EntityNames' })

export const EntityIdentifierMapping: EntityMappingType[] = [
    {
        id: EntityNames.Archives,
        metadata: {
            endPointZoom2:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-2-archives/run',
            identifiableURI: 'https://collectiedata.hetnieuweinstituut.nl/graph/archives',
        },
        type: 'tripli',
    },
    {
        id: EntityNames.Objects,
        metadata: {
            endPointZoom2:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-2-objects/run',
            identifiableURI: 'https://collectiedata.hetnieuweinstituut.nl/graph/objects',
        },
        type: 'tripli',
    },
    {
        id: EntityNames.People,
        metadata: {
            endPointZoom2:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-2-people/run',
            identifiableURI: 'https://collectiedata.hetnieuweinstituut.nl/graph/people',
        },
        type: 'tripli',
    },
    {
        id: EntityNames.Publications,
        metadata: {
            endPointZoom2:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-2-books/run',
            identifiableURI: 'https://collectiedata.hetnieuweinstituut.nl/graph/books',
        },
        type: 'tripli',
    },
    {
        id: EntityNames.Stories,
        metadata: {
            url: 'aa',
        },
        type: 'strapi',
    },
]

export interface EntityMappingType {
    id: EntityNames
    metadata: EntityMappingMetaData
    type: 'strapi' | 'tripli'
    filters?: { name: string; id: string }[]
}

export interface EntityMappingMetaData {
    endPointZoom2?: string
    identifiableURI?: string
    url?: string
}

@ObjectType()
export class TripliCountsType {
    @Field(() => String)
    public name: string

    @Field(() => Int)
    public count: number

    @Field(() => EntityNames)
    public id: EntityNames
}

@ArgsType()
export class GetFiltersArgs {
    @Field(() => EntityNames, { nullable: false })
    public entityName: EntityNames
}

@ObjectType()
export class TripliFiltersType {
    @Field(() => String, { nullable: false })
    public filter: string
}
