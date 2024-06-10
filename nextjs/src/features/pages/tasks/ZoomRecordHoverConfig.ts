import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import {
  ArchivesZoomRecordHoverQuery,
  EntityNames,
  ObjectsZoomRecordHoverQuery,
  PeopleZoomRecordHoverQuery,
  PublicationsZoomRecordHoverQuery,
  Sdk,
} from 'src/generated/graphql'

export const getZoomRecordHoverQueries = (api: Sdk, type: Category | EntityNames) => {
  switch (type) {
    case EntityNames.People:
    case CATEGORIES.people:
      return {
        hoverData: api.PeopleZoomRecordHover,
        accesor: (data?: PeopleZoomRecordHoverQuery) => data?.peopleZoomLevelHover,
      }
    case EntityNames.Archives:
    case CATEGORIES.archives:
      return {
        hoverData: api.ArchivesZoomRecordHover,
        accesor: (data?: ArchivesZoomRecordHoverQuery) => data?.archivesZoomRecordHover,
      }
    case EntityNames.Publications:
    case CATEGORIES.publications:
      return {
        hoverData: api.PublicationsZoomRecordHover,
        accesor: (data?: PublicationsZoomRecordHoverQuery) => data?.publicationsZoomRecordHover,
      }
    case EntityNames.Objects:
    case CATEGORIES.objects:
      return {
        hoverData: api.ObjectsZoomRecordHover,
        accesor: (data?: ObjectsZoomRecordHoverQuery) => data?.objectsZoomRecordHover,
      }
  }
}
