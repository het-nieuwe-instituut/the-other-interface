import { CATEGORIES, Category } from '@/features/shared/utils/categories'

import {
  ArchivesZoomRecordHoverQuery,
  ObjectsZoomRecordHoverQuery,
  PeopleZoomRecordHoverQuery,
  PublicationsZoomRecordHoverQuery,
  Sdk,
} from 'src/generated/graphql'

export const getZoomRecordHoverQueries = (api: Sdk, type: Category) => {
  switch (type) {
    case CATEGORIES.people:
      return {
        hoverData: api.PeopleZoomRecordHover,
        accesor: (data?: PeopleZoomRecordHoverQuery) => data?.peopleZoomLevelHover,
      }
    case CATEGORIES.archives:
      return {
        hoverData: api.ArchivesZoomRecordHover,
        accesor: (data?: ArchivesZoomRecordHoverQuery) => data?.archivesZoomRecordHover,
      }
    case CATEGORIES.publications:
      return {
        hoverData: api.PublicationsZoomRecordHover,
        accesor: (data?: PublicationsZoomRecordHoverQuery) => data?.publicationsZoomRecordHover,
      }

    case CATEGORIES.objects:
      return {
        hoverData: api.ObjectsZoomRecordHover,
        accesor: (data?: ObjectsZoomRecordHoverQuery) => data?.objectsZoomRecordHover,
      }
  }
}
