import { CATEGORIES, Category } from '@/features/shared/utils/categories'

import {
  Sdk,
  ZoomLevel3ArchiveQuery,
  ZoomLevel3ObjectQuery,
  ZoomLevel3PeopleQuery,
  ZoomLevel3PublicationQuery,
} from 'src/generated/graphql'

export const getZoom3Queries = (type: Category, api: Sdk) => {
  switch (type) {
    case CATEGORIES.people:
      return {
        zoomLevelQuerySmall: api.ZoomLevel3PeopleSmall,
        zoomLevelQuery: api.ZoomLevel3People,
        relationsQuery: api.PeopleRelations,
        accesor: (data?: ZoomLevel3PeopleQuery) => data?.zoomLevel3People,
      }
    case CATEGORIES.archives:
      return {
        zoomLevelQuerySmall: api.ZoomLevel3ArchiveSmall,
        zoomLevelQuery: api.ZoomLevel3Archive,
        relationsQuery: api.ArchivesRelations,
        accesor: (data?: ZoomLevel3ArchiveQuery) => data?.zoomLevel3Archive,
      }
    case CATEGORIES.publications:
      return {
        zoomLevelQuerySmall: api.ZoomLevel3PublicationSmall,
        zoomLevelQuery: api.ZoomLevel3Publication,
        relationsQuery: api.PublicationRelations,
        accesor: (data?: ZoomLevel3PublicationQuery) => data?.zoomLevel3Publication,
      }
    case CATEGORIES.objects:
      return {
        zoomLevelQuerySmall: api.ZoomLevel3ObjectSmall,
        zoomLevelQuery: api.ZoomLevel3Object,
        relationsQuery: api.ObjectRelations,
        accesor: (data?: ZoomLevel3ObjectQuery) => data?.zoomLevel3Object,
      }
  }
}
