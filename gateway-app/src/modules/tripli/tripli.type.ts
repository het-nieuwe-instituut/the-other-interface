import { ArgsType, Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Min } from 'class-validator'

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
                columns: {
                    name: 'relatedNameLabel',
                    uri: 'relatedName',
                    count: 'count',
                    total: 'total',
                },
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-archives-related-names-filter/run',
            },
            {
                id: 'descriptionLevel',
                name: 'Beschrijvingsniveau',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-archives-description-level-filter/run',
                columns: {
                    name: 'descriptionLevel',
                    uri: 'descriptionLevel',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'relatedNames',
                name: 'Gerelateerde namen',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-archives-related-names-filter/run',
                columns: {
                    name: 'relatedNameLabel',
                    uri: 'relatedName',
                    count: 'count',
                    total: 'total',
                },
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
        filters: [
            {
                id: 'subject',
                name: 'Onderwerp',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-objects-subject-filter/run',
                columns: {
                    name: 'subjectLabel',
                    uri: 'subject',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'personInstitution',
                name: 'Persoon/instelling',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-objects-person-institution-filter/run',
                columns: {
                    name: 'perInstLabel',
                    uri: 'perInst',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'technique',
                name: 'Technieken',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-objects-technique-filter/run',
                columns: {
                    name: 'techniqueLabel',
                    uri: 'technique',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'objectName',
                name: 'Objectnaam',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-objects-objectname-filter/run',
                columns: {
                    name: 'objectnameLabel',
                    uri: 'objectname',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'creator',
                name: 'Vervaardiger',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-objects-creator-filter/run',
                columns: {
                    name: 'creatorLabel',
                    uri: 'creator',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'date',
                name: 'Datering',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-objects-date-filter/run',
                columns: {
                    name: 'century',
                    uri: 'century',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'material',
                name: 'Materialen',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-objects-material-filter/run',
                columns: {
                    name: 'materialLabel',
                    uri: 'material',
                    count: 'count',
                    total: 'total',
                },
            },
        ],
        type: 'tripli',
    },
    {
        id: EntityNames.People,
        metadata: {
            endPointZoom2:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-2-people/run',
            identifiableURI: 'https://collectiedata.hetnieuweinstituut.nl/graph/people',
        },
        filters: [
            {
                id: 'deathDate',
                name: 'Overlijdensdatum',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-people-death-date-filter/run',
                columns: {
                    name: 'century',
                    uri: 'century',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'nameType',
                name: 'Naam soort',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-people-name-type-filter/run',
                columns: {
                    name: 'nameType',
                    uri: 'nameType',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'birthDate',
                name: 'Geboortedatum',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-people-birth-date-filter/run',
                columns: {
                    name: 'century',
                    uri: 'century',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'period',
                name: 'Periode',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-people-period-filter/run',
                columns: {
                    name: 'century',
                    uri: 'century',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'place',
                name: 'Plaats',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-people-place-filter/run',
                columns: {
                    name: 'placeLabel',
                    uri: 'place',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'profession',
                name: 'Beroep/Werkveld',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-people-profession-filter/run',
                columns: {
                    name: 'professionLabel',
                    uri: 'profession',
                    count: 'count',
                    total: 'total',
                },
            },
        ],
        type: 'tripli',
    },
    {
        id: EntityNames.Publications,
        metadata: {
            endPointZoom2:
                'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-2-books/run',
            identifiableURI: 'https://collectiedata.hetnieuweinstituut.nl/graph/books',
        },
        filters: [
            {
                id: 'relatedPerson',
                name: 'Gerelateerde persoon/instelling',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-books-related-person-filter/run',
                columns: {
                    name: 'realtedPerInstLabel',
                    uri: 'relatedPerInstLink',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'subject',
                name: 'Onderwerp',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-books-subject-filter/run',
                columns: {
                    name: 'subjectLabel',
                    uri: 'subject',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'geographicalKeyword',
                name: 'Geografisch trefwoord',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-books-geographical-keyword-filter/run',
                columns: {
                    name: 'geograficalKeywordLabel',
                    uri: 'geograficalKeyword',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'author',
                name: 'Auteur(s)',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-books-author-filter/run',
                columns: {
                    name: 'authorLabel',
                    uri: 'author',
                    count: 'count',
                    total: 'total',
                },
            },
            {
                id: 'typeOfPublication',
                name: 'Soort publicatie',
                endpoint:
                    'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/zoom-3-books-type-of-publication-filter/2/run',
                columns: {
                    name: 'typeOfPublicationLabel',
                    uri: 'typeOfPublication',
                    count: 'count',
                    total: 'total',
                },
            },
        ],
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
    filters?: EntityMappingFiltersType[]
}

export interface EntityMappingFiltersType {
    name: string
    id: string
    endpoint: string
    columns: {
        name: string
        uri: string
        count: string
        total: string
    }
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
    @Min(1)
    public page: number

    @Field(() => Int, { nullable: false })
    @Min(1)
    public pageSize: number
}

@ObjectType()
export class FilterOptionsType {
    @Field(() => String, { nullable: true })
    public uri: string

    @Field(() => String, { nullable: true })
    public name: string

    @Field(() => Int, { nullable: true })
    public count: number

    @Field(() => Int, { nullable: true })
    public total: number
}
