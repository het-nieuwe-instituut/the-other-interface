/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { randomNumberBetweenPoints } from '@/features/shared/utils/numbers'
import PaginationLeft from '@/icons/arrows/pagination-left.svg'
import PaginationRight from '@/icons/arrows/pagination-right.svg'
import { Box, Flex, Grid, GridItem, Img, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useId, useMemo } from 'react'
import {
    useZoom4ArchivesQuery,
    useZoom4ObjectsQuery,
    useZoom4PeopleQuery,
    useZoom4PublicationsQuery,
    Zoom4ArchivesQuery,
    Zoom4ObjectsQuery,
    Zoom4PeopleQuery,
    Zoom4PublicationsQuery,
    ZoomLevel4ParentType,
} from 'src/generated/graphql'
import { SupportedLandingPages } from '../FilterClouds/FilterCloudsContainer'
import { usePresenter } from './usePresenter'

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
    const splitted = value.split(' - ')

    return {
        StartDate: splitted[0],
        EndDate: splitted[0],
    }
}

const variableFilters: {
    [key1: string]: {
        [key: string]: {
            accessor: (value: string) => { [key: string]: string }
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
        endDate: 'EndDate',
        maker: 'Maker',
        material: 'Material',
        objectname: 'Objectname',
        perInst: 'PerInst',
        startDate: 'StartDate',
        subject: 'Subject',
        technique: 'Technique',
    },
    [SupportedLandingPages.People]: {
        birthDate: 'BirthDate',
        deathDate: 'DeathDate',
        nameType: 'NameType',
        period: 'Period',
        place: 'Place',
        profession: 'Profession',
    },
    [SupportedLandingPages.Publications]: {
        author: 'Author',
        geograficalKeyword: 'GeograficalKeyword',
        relatedPerInst: 'RelatedPerInst',
        subject: 'Subject',
        typeOfPublication: 'TypeOfPublication',
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
