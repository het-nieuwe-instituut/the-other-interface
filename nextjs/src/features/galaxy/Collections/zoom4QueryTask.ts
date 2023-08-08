/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ApiClientType } from '@/features/graphql/api'

import {
  ArchivesZoomLevel4FiltersArgs,
  ObjectsZoomLevel4FiltersArgs,
  PeopleZoomLevel4FiltersArgs,
  PublicationsZoomLevel4FiltersArgs,
  Zoom4ArchivesQuery,
  Zoom4ObjectsQuery,
  Zoom4PeopleQuery,
  Zoom4PublicationsQuery,
} from 'src/generated/graphql'

import { SupportedLandingPages } from '../FilterClouds/FilterCloudsContainer'

const zoom4Config = (api: ApiClientType) => ({
  [SupportedLandingPages.Archives]: api?.Zoom4Archives,
  [SupportedLandingPages.Objects]: api?.Zoom4Objects,
  [SupportedLandingPages.People]: api?.Zoom4People,
  [SupportedLandingPages.Publications]: api?.Zoom4Publications,
  [SupportedLandingPages.Stories]: api?.Zoom4Publications,
})

const variableType = {
  [SupportedLandingPages.Archives]: 'archivesFilters',
  [SupportedLandingPages.Objects]: 'objectsFilters',
  [SupportedLandingPages.People]: 'peopleFilters',
  [SupportedLandingPages.Publications]: 'publicationsFilters',
  [SupportedLandingPages.Stories]: '',
}

interface Filters {
  [SupportedLandingPages.Archives]: {
    [key: string]: {
      accessor: (value: string) => ArchivesZoomLevel4FiltersArgs
    }
  }
  [SupportedLandingPages.Objects]: {
    [key: string]: {
      accessor: (value: string) => ObjectsZoomLevel4FiltersArgs
    }
  }
  [SupportedLandingPages.People]: {
    [key: string]: {
      accessor: (value: string) => PeopleZoomLevel4FiltersArgs
    }
  }
  [SupportedLandingPages.Publications]: {
    [key: string]: {
      accessor: (value: string) => PublicationsZoomLevel4FiltersArgs
    }
  }
  [SupportedLandingPages.Stories]: {
    [key: string]: {
      accessor: (value: string) => Record<string, unknown>
    }
  }
}

const variableFilters: Filters = {
  [SupportedLandingPages.Archives]: {
    descriptionLevel: {
      accessor: value => ({
        descriptionLevel: value,
      }),
    },
    relatedNames: {
      accessor: value => ({
        relatedName: value,
      }),
    },
    date: {
      accessor: value => ({
        date: value,
      }),
    },
  },
  [SupportedLandingPages.Objects]: {
    date: {
      accessor: value => ({
        date: value,
      }),
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
    personInstitution: {
      accessor: value => ({
        PerInst: value,
      }),
    },
    startDate: {
      accessor: value => ({
        date: value,
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
  [SupportedLandingPages.Stories]: {},
}

export function zoom4QueryTask(
  type: SupportedLandingPages,
  {
    page,
    filter,
    collection,
  }: {
    filter: string
    collection: string
    page: string
  },
  api: ApiClientType
) {
  const filtersType = variableType[type]
  const config = variableFilters[type][filter]
  const query = zoom4Config(api)[type]?.({
    [filtersType]: {
      ...config.accessor(collection as string),
    },
    page: parseInt((page as string) ?? '1'),
    pageSize: 28,
  })

  return query
}

export type Zoom4ReturnType =
  | Zoom4ArchivesQuery
  | Zoom4ObjectsQuery
  | Zoom4PeopleQuery
  | Zoom4PublicationsQuery
