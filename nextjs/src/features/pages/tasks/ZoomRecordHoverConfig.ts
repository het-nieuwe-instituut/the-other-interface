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
    case CATEGORIES.people || EntityNames.People:
      return {
        hoverData: api.PeopleZoomRecordHover,
        accesor: (data?: PeopleZoomRecordHoverQuery) => data?.peopleZoomLevelHover,
      }
    case CATEGORIES.archives || EntityNames.Archives:
      return {
        hoverData: api.ArchivesZoomRecordHover,
        accesor: (data?: ArchivesZoomRecordHoverQuery) => data?.archivesZoomRecordHover,
      }
    case CATEGORIES.publications || EntityNames.Publications:
      return {
        hoverData: api.PublicationsZoomRecordHover,
        accesor: (data?: PublicationsZoomRecordHoverQuery) => data?.publicationsZoomRecordHover,
      }

    case CATEGORIES.objects || EntityNames.Objects:
      return {
        hoverData: api.ObjectsZoomRecordHover,
        accesor: (data?: ObjectsZoomRecordHoverQuery) => data?.objectsZoomRecordHover,
      }
  }
}
