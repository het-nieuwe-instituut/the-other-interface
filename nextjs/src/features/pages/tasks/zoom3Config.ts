import { CATEGORIES, Category } from '@/features/shared/utils/categories'

import {
  Sdk,
  ZoomLevel3ArchiveQuery,
  ZoomLevel3ObjectQuery,
  ZoomLevel3PersonQuery,
  ZoomLevel3PublicationQuery,
} from 'src/generated/graphql'

export const getZoom3Queries = (type: Category, api: Sdk) => {
  switch (type) {
    case CATEGORIES.people:
      return {
        zoomLevelQuery: api.ZoomLevel3Person,
        relationsQuery: api.PeopleRelations,
        accesor: (data?: ZoomLevel3PersonQuery) => data?.zoomLevel3Person,
      }
    case CATEGORIES.archives:
      return {
        zoomLevelQuery: api.ZoomLevel3Archive,
        relationsQuery: api.ArchivesRelations,
        accesor: (data?: ZoomLevel3ArchiveQuery) => data?.zoomLevel3Archive,
      }
    case CATEGORIES.publications:
      return {
        zoomLevelQuery: api.ZoomLevel3Publication,
        relationsQuery: api.PublicationRelations,
        accesor: (data?: ZoomLevel3PublicationQuery) => data?.zoomLevel3Publication,
      }
    case CATEGORIES.objects:
      return {
        zoomLevelQuery: api.ZoomLevel3Object,
        relationsQuery: api.ObjectRelations,
        accesor: (data?: ZoomLevel3ObjectQuery) => data?.zoomLevel3Object,
      }
  }
}
