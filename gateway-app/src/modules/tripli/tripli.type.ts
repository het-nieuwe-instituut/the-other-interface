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
        filters: [
            {
                id: 'date',
                name: 'Datering',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-archives-related-names-filter/run',
            },
            {
                id: 'descriptionLevel',
                name: 'Beschrijvingsniveau',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-archives-description-level-filter/run',
            },
            {
                id: 'relatedNames',
                name: 'Gerelateerde namen',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-archives-related-names-filter/run',
            },
        ],
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
    filters?: { name: string; id: string; endpoint: string }[]
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

@ArgsType()
export class GetFilterOptionsArgs {
    @Field(() => EntityNames, { nullable: false })
    public entityName: EntityNames

    @Field(() => String, { nullable: false })
    public filterId: string
}

@ObjectType()
export class TripliFiltersType {
    @Field(() => String, { nullable: false })
    public id: string

    @Field(() => String, { nullable: false })
    public filter: string
}

@ArgsType()
export class PaginationArgs {
    @Field(() => Int, { nullable: false })
    public skip: number

    @Field(() => Int, { nullable: false })
    public take: number
}

@ObjectType()
export class FilterOptionsType {
    @Field(() => String)
    public relatedName: string

    @Field(() => String, { nullable: true })
    public relatedNameLabel: string

    @Field(() => Int, { nullable: true })
    public count: number

    @Field(() => Int, { nullable: true })
    public total: number
}
