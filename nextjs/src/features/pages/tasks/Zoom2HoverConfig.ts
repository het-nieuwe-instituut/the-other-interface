import {
  ArchivesZoom2HoverQuery,
  EntityNames,
  ObjectsZoom2HoverQuery,
  PeopleZoom2HoverQuery,
  PublicationsZoom2HoverQuery,
  Sdk,
} from 'src/generated/graphql'

export const getZoom2HoverQueries = (api: Sdk, type: EntityNames) => {
  switch (type) {
    case EntityNames.People:
      return {
        hoverData: api.PeopleZoom2Hover,
        accesor: (data?: PeopleZoom2HoverQuery) => data?.peopleZoomLevel2Hover,
      }
    case EntityNames.Archives:
      return {
        hoverData: api.ArchivesZoom2Hover,
        accesor: (data?: ArchivesZoom2HoverQuery) => data?.archivesZoomLevel2Hover,
      }
    case EntityNames.Publications:
      return {
        hoverData: api.PublicationsZoom2Hover,
        accesor: (data?: PublicationsZoom2HoverQuery) => data?.publicationsZoomLevel2Hover,
      }

    case EntityNames.Objects:
      return {
        hoverData: api.ObjectsZoom2Hover,
        accesor: (data?: ObjectsZoom2HoverQuery) => data?.objectsZoomLevel2Hover,
      }
  }
}
