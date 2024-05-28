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
        relationsCount: api.PeopleRecordRelationsCount,
        accesor: (data?: PeopleRecordRelationsQuery) => data?.peopleRecordRelations,
      }
    case CATEGORIES.archives:
      return {
        paginatedRelationsQuery: api.ArchiveRecordRelations,
        relationsCount: api.ArchivesRecordRelationsCount,
        accesor: (data?: ArchiveRecordRelationsQuery) => data?.archivesRecordRelations,
      }
    case CATEGORIES.publications:
      return {
        paginatedRelationsQuery: api.PublicationRecordRelations,
        relationsCount: api.PublicationsRecordRelationsCount,
        accesor: (data?: PublicationRecordRelationsQuery) => data?.publicationRecordRelations,
      }
    case CATEGORIES.objects:
      return {
        paginatedRelationsQuery: api.ObjectRecordRelations,
        relationsCount: api.ObjectRecordRelationsCount,
        accesor: (data?: ObjectRecordRelationsQuery) => data?.objectRecordRelations,
      }
  }
}
