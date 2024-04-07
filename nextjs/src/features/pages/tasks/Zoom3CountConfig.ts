import { CATEGORIES, Category } from '@/features/shared/utils/categories'

import {
  ArchiveRecordRelationsQuery,
  ObjectRecordRelationsQuery,
  PeopleRecordRelationsQuery,
  PublicationRecordRelationsQuery,
  Sdk,
} from 'src/generated/graphql'

export const getZoom3CountQueries = (type: Category, api: Sdk) => {
  switch (type) {
    case CATEGORIES.people:
      return {
        relationsCount: api.PeopleRecordRelationsCount,
        accesor: (data?: PeopleRecordRelationsQuery) => data?.peopleRecordRelations,
      }
    case CATEGORIES.archives:
      return {
        relationsCount: api.ArchivesRecordRelationsCount,
        accesor: (data?: ArchiveRecordRelationsQuery) => data?.archivesRecordRelations,
      }
    case CATEGORIES.publications:
      return {
        relationsCount: api.PublicationsRecordRelationsCount,
        accesor: (data?: PublicationRecordRelationsQuery) => data?.publicationRecordRelations,
      }

    case CATEGORIES.objects:
      return {
        zoomLevelQuery: api.ZoomLevel3Object,
        relationsCount: api.ObjectRecordRelationsCount,
        accesor: (data?: ObjectRecordRelationsQuery) => data?.objectRecordRelations,
      }
  }
}
