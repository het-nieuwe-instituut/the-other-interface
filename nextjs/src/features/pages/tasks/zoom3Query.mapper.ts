import { ApiClientType } from '@/features/graphql/api'

import {
  Zoom3ArchivesQuery,
  Zoom3DPeopleQuery,
  Zoom3DPublicationsQuery,
  Zoom3ObjectsQuery,
} from 'src/generated/graphql'

export enum SupportedLandingPages {
  Publications = 'publications',
  People = 'people',
  Archives = 'archives',
  Objects = 'objects',
}

export const zoom3Query = (api: ApiClientType) => ({
  [SupportedLandingPages.Archives]: api?.Zoom3Archives,
  [SupportedLandingPages.Objects]: api?.Zoom3Objects,
  [SupportedLandingPages.People]: api?.Zoom3DPeople,
  [SupportedLandingPages.Publications]: api?.Zoom3DPublications,
})

export type Zoom3ReturnType =
  | Zoom3ArchivesQuery
  | Zoom3ObjectsQuery
  | Zoom3DPeopleQuery
  | Zoom3DPublicationsQuery
