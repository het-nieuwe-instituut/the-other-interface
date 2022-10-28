/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router'
import {
    useZoom4ArchivesQuery,
    useZoom4ObjectsQuery,
    useZoom4PeopleQuery,
    useZoom4PublicationsQuery,
} from 'src/generated/graphql'
import { SupportedLandingPages } from '../FilterClouds/FilterCloudsContainer'

const useZoom4Query = {
    [SupportedLandingPages.Archives]: useZoom4ArchivesQuery,
    [SupportedLandingPages.Objects]: useZoom4ObjectsQuery,
    [SupportedLandingPages.People]: useZoom4PeopleQuery,
    [SupportedLandingPages.Publications]: useZoom4PublicationsQuery,
    [SupportedLandingPages.Stories]: useZoom4PublicationsQuery,
}

const variableType = {
    [SupportedLandingPages.Archives]: 'archivesFilters',
    [SupportedLandingPages.Objects]: 'objectsFilters',
    [SupportedLandingPages.People]: 'peopleFilters',
    [SupportedLandingPages.Publications]: 'publicationsFilters',
    [SupportedLandingPages.Stories]: '',
}

function ValueToDateFilters(value: string) {
    if (value.includes('tot')) {
        const splitted = value.split('tot').map(v => v.replace(' ', ''))

        return {
            EndDate: splitted[0],
        }
    }

    if (value.includes('na')) {
        const splitted = value.split('na').map(v => v.replace(' ', ''))

        return {
            StartDate: splitted[0],
        }
    }

    if (value.includes(' - ')) {
        const splitted = value.split(' - ')

        return {
            StartDate: splitted[0],
            EndDate: splitted[1],
        }
    }

    return {}
}

const variableFilters: {
    [key1: string]: {
        [key: string]: {
            accessor: (value: string) => { [key: string]: string | undefined }
        }
    }
} = {
    [SupportedLandingPages.Archives]: {
        descriptionLevel: {
            accessor: value => ({
                DescriptionLevel: value,
            }),
        },
        relatedNames: {
            accessor: value => ({
                RelatedName: value,
            }),
        },
        date: {
            accessor: ValueToDateFilters,
        },
    },
    [SupportedLandingPages.Objects]: {
        date: {
            accessor: ValueToDateFilters,
        },
        creator: {
            accessor: value => ({
                Maker: value,
            }),
        },
        material: {
            accessor: value => ({
                Material: value,
            }),
        },
        objectName: {
            accessor: value => ({
                Objectname: value,
            }),
        },
        perInst: {
            accessor: value => ({
                PerInst: value,
            }),
        },
        startDate: {
            accessor: value => ({
                StartDate: value,
            }),
        },
        subject: {
            accessor: value => ({
                Subject: value,
            }),
        },
        technique: {
            accessor: value => ({
                Technique: value,
            }),
        },
    },
    [SupportedLandingPages.People]: {
        birthDate: {
            accessor: value => ({
                BirthDate: value,
            }),
        },
        deathDate: {
            accessor: value => ({
                DeathDate: value,
            }),
        },
        nameType: {
            accessor: value => ({
                NameType: value,
            }),
        },
        period: {
            accessor: value => ({
                Period: value,
            }),
        },
        place: {
            accessor: value => ({
                Place: value,
            }),
        },
        profession: {
            accessor: value => ({
                Profession: value,
            }),
        },
    },
    [SupportedLandingPages.Publications]: {
        author: {
            accessor: value => ({
                Author: value,
            }),
        },
        geographicalKeyword: {
            accessor: value => ({
                GeograficalKeyword: value,
            }),
        },
        relatedPerson: {
            accessor: value => ({
                RelatedPerInst: value,
            }),
        },
        relatedPerInst: {
            accessor: value => ({
                RelatedPerInst: value,
            }),
        },
        subject: {
            accessor: value => ({
                Subject: value,
            }),
        },
        typeOfPublication: {
            accessor: value => ({
                TypeOfPublication: value,
            }),
        },
    },
}

export function useZoom4QueryTask(type: SupportedLandingPages) {
    const router = useRouter()
    const collection = router.query.collection
    const filtersType = variableType[type]
    const config = variableFilters[type][router.query.filter as string]
    const query = useZoom4Query[type]({
        variables: {
            [filtersType]: {
                ...config.accessor(collection as string),
            },
            page: parseInt((router.query.page as string) ?? '1'),
            pageSize: 28,
        },
    })

    return query
}
