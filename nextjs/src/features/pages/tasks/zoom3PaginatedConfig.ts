import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import {
  ArchiveRecordRelationsQuery,
  ObjectRecordRelationsQuery,
  PeopleRecordRelationsQuery,
  PublicationRecordRelationsQuery,
  Sdk,
} from 'src/generated/graphql'

export const getZoom3PaginatedQueries = (type: Category, api: Sdk) => {
  switch (type) {
    case CATEGORIES.people:
      return {
        paginatedRelationsQuery: api.PeopleRecordRelations,
        accesor: (data?: PeopleRecordRelationsQuery) => data?.peopleRecordRelations,
      }
    case CATEGORIES.archives:
      return {
        paginatedRelationsQuery: api.ArchiveRecordRelations,
        accesor: (data?: ArchiveRecordRelationsQuery) => data?.archivesRecordRelations,
      }
    case CATEGORIES.publications:
      return {
        paginatedRelationsQuery: api.PublicationRecordRelations,
        accesor: (data?: PublicationRecordRelationsQuery) => data?.publicationRecordRelations,
      }
    case CATEGORIES.archives:
      return {
        paginatedRelationsQuery: api.ObjectRecordRelations,
        accesor: (data?: ObjectRecordRelationsQuery) => data?.objectRecordRelations,
      }
  }
}
