import { CATEGORIES, Category } from '@/features/shared/utils/categories'

import {
  Sdk,
  //   ZoomLevel3ArchiveQuery,
  ZoomLevel3ArchiveRecordQuery,
  //   ZoomLevel3ObjectQuery,
  //   ZoomLevel3PersonQuery,
  //   ZoomLevel3PublicationQuery,
} from 'src/generated/graphql'

export const getZoomRecord3Queries = (type: Category, api: Sdk) => {
  switch (type) {
    // case CATEGORIES.people:
    //   return {
    //     zoomLevelQuery: api.ZoomLevel3Person,
    //     accesor: (data?: ZoomLevel3PersonQuery) => data?.zoomLevel3Person,
    //   }
    case CATEGORIES.archives:
      return {
        zoomLevelQuery: api.ZoomLevel3ArchiveRecord,
        accesor: (data?: ZoomLevel3ArchiveRecordQuery) => data?.archivesRecordZoomLevel3,
      }
    // case CATEGORIES.publications:
    //   return {
    //     zoomLevelQuery: api.ZoomLevel3Publication,
    //     accesor: (data?: ZoomLevel3PublicationQuery) => data?.zoomLevel3Publication,
    //   }

    // case CATEGORIES.objects:
    //   return {
    //     zoomLevelQuery: api.ZoomLevel3ObjectRecord,
    //     accesor: (data?: ZoomLevel3ObjectQuery) => data?.zoomLevel3Object,
    //   }
  }
}
