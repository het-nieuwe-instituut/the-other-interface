import {
  ArchivesZoom2HoverQuery,
  ObjectsZoom2HoverQuery,
  PeopleZoom2HoverQuery,
  PublicationsZoom2HoverQuery,
} from 'src/generated/graphql'

type DataType =
  | ArchivesZoom2HoverQuery
  | PeopleZoom2HoverQuery
  | PublicationsZoom2HoverQuery
  | ObjectsZoom2HoverQuery
  | undefined

export const tooltipMapper = (initialData: DataType) => {
  if (!initialData) {
    return null
  }

  // if (initialData?.publicationsZoomLevel2Hover) {
  //   return {
  //     title: `${initialData.publicationsZoomLevel2Hover.title}, ${initialData.publicationsZoomLevel2Hover.authors}`,
  //     description: initialData.publicationsZoomLevel2Hover.description,
  //   }
  // }
  // if (initialData?.archivesZoomLevel2Hover) {
  //   return {
  //     title: `${initialData.archivesZoomLevel2Hover.title}, ${initialData.archivesZoomLevel2Hover.creators}`,
  //     description: initialData.archivesZoomLevel2Hover.description,
  //   }
  // }
  // if (initialData?.peopleZoomLevel2Hover) {
  //   return {
  //     title: `${initialData.archivesZoomLevel2Hover.title}, ${initialData.peopleZoomLevel2Hover.profession}`,
  //     description: initialData.archivesZoomLevel2Hover.description,
  //   }
  // }
  // if (initialData?.objectsZoomLevel2Hover) {
  //   return {
  //     title: initialData.archivesZoomLevel2Hover.title,
  //     description: initialData.archivesZoomLevel2Hover.description,
  //   }
  // }
}
