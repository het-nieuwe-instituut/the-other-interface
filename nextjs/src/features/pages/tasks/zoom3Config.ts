import { CLOUD_CATEGORIES, Category } from '@/features/shared/utils/categories'

import {
  Sdk,
  ZoomLevel3ArchivesQuery,
  ZoomLevel3ObjectQuery,
  ZoomLevel3PersonQuery,
  ZoomLevel3PublicationQuery,
} from 'src/generated/graphql'

export const getZoom3Queries = (type: Category, api: Sdk) => {
  switch (type) {
    case CLOUD_CATEGORIES.people:
      return {
        zoomLevelQuery: api.ZoomLevel3Person,
        relationsQuery: api.PeopleRelations,
        accesor: (data?: ZoomLevel3PersonQuery) => data?.zoomLevel3Person,
      }
    case CLOUD_CATEGORIES.archives:
      return {
        zoomLevelQuery: api.ZoomLevel3Archives,
        relationsQuery: api.ArchivesRelations,
        accesor: (data?: ZoomLevel3ArchivesQuery) => data?.zoomLevel3Archive,
      }
    case CLOUD_CATEGORIES.publications:
      return {
        zoomLevelQuery: api.ZoomLevel3Publication,
        relationsQuery: api.PublicationRelations,
        accesor: (data?: ZoomLevel3PublicationQuery) => data?.zoomLevel3Publication,
      }

    case CLOUD_CATEGORIES.objects:
      return {
        zoomLevelQuery: api.ZoomLevel3Object,
        relationsQuery: api.ObjectRelations,
        accesor: (data?: ZoomLevel3ObjectQuery) => data?.zoomLevel3Object,
      }
  }
}
