import { CATEGORIES, Category } from '@/features/shared/utils/categories'

import {
  Sdk,
  ZoomLevel3ArchiveRecordQuery,
  ZoomLevel3ObjectRecordQuery,
  ZoomLevel3PeopleRecordQuery,
} from 'src/generated/graphql'

export const zoom3RecordMetaConfig = (type: Category, api: Sdk) => {
  switch (type) {
    case CATEGORIES.people:
      return {
        zoomLevelQuery: api.ZoomLevel3PeopleRecord,
        accesor: (data?: ZoomLevel3PeopleRecordQuery) => data?.peopleRecordZoomLevel3,
      }
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

    case CATEGORIES.objects:
      return {
        zoomLevelQuery: api.ZoomLevel3ObjectRecord,
        accesor: (data?: ZoomLevel3ObjectRecordQuery) => data?.objectsRecordZoomLevel3,
      }
  }
}
