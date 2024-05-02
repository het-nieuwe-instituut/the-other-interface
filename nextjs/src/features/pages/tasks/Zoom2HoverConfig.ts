import { CATEGORIES, Category } from '@/features/shared/utils/categories'

import {
  ArchivesZoom2HoverQuery,
  ObjectsZoom2HoverQuery,
  PeopleZoom2HoverQuery,
  PublicationsZoom2HoverQuery,
  Sdk,
} from 'src/generated/graphql'

export const getZoom2HoverQueries = (api: Sdk, type: Category) => {
  switch (type) {
    case CATEGORIES.people:
      return {
        hoverData: api.PeopleZoom2Hover,
        accesor: (data?: PeopleZoom2HoverQuery) => data?.peopleZoomLevel2Hover,
      }
    case CATEGORIES.archives:
      return {
        hoverData: api.ArchivesZoom2Hover,
        accesor: (data?: ArchivesZoom2HoverQuery) => data?.archivesZoomLevel2Hover,
      }
    case CATEGORIES.publications:
      return {
        hoverData: api.PublicationsZoom2Hover,
        accesor: (data?: PublicationsZoom2HoverQuery) => data?.publicationsZoomLevel2Hover,
      }

    case CATEGORIES.objects:
      return {
        hoverData: api.ObjectsZoom2Hover,
        accesor: (data?: ObjectsZoom2HoverQuery) => data?.objectsZoomLevel2Hover,
      }
  }
}
