import {
  ArchivesZoom2HoverQuery,
  ObjectsZoom2HoverQuery,
  PeopleZoom2HoverQuery,
  PublicationsZoom2HoverQuery,
} from 'src/generated/graphql'

type TooltipData =
  | ArchivesZoom2HoverQuery
  | ObjectsZoom2HoverQuery
  | PeopleZoom2HoverQuery
  | PublicationsZoom2HoverQuery
  | undefined

export const zoom2HoverQueryTooltipDataMapper = (initialData: TooltipData) => {
  if (!initialData) {
    return null
  }
  if ('publicationsZoomLevel2Hover' in initialData) {
    if (
      initialData.publicationsZoomLevel2Hover.title === null &&
      initialData.publicationsZoomLevel2Hover.description === null
    ) {
      return null
    }
    return {
      title: `${initialData.publicationsZoomLevel2Hover.title}${
        initialData.publicationsZoomLevel2Hover.authors
          ? ', ' + initialData.publicationsZoomLevel2Hover.authors
          : ''
      }`,
      description: initialData.publicationsZoomLevel2Hover.description,
    }
  }
  if ('archivesZoomLevel2Hover' in initialData) {
    if (
      initialData.archivesZoomLevel2Hover.title === null &&
      initialData.archivesZoomLevel2Hover.description === null
    ) {
      return null
    }
    return {
      title: `${initialData.archivesZoomLevel2Hover.title}${
        initialData.archivesZoomLevel2Hover.creators
          ? '' + initialData.archivesZoomLevel2Hover.creators
          : ''
      }`,
      description: initialData.archivesZoomLevel2Hover.description,
    }
  }
  if ('peopleZoomLevel2Hover' in initialData) {
    if (
      initialData.peopleZoomLevel2Hover.title === null &&
      initialData.peopleZoomLevel2Hover.description === null
    ) {
      return null
    }
    return {
      title: `${initialData.peopleZoomLevel2Hover.title}${
        initialData.peopleZoomLevel2Hover.profession
          ? '' + initialData.peopleZoomLevel2Hover.profession
          : ''
      }`,
      description: initialData.peopleZoomLevel2Hover.description,
    }
  }
  if ('objectsZoomLevel2Hover' in initialData) {
    if (
      initialData.objectsZoomLevel2Hover.title === null &&
      initialData.objectsZoomLevel2Hover.description === null
    ) {
      return null
    }
    return {
      title: initialData.objectsZoomLevel2Hover.title,
      description: initialData.objectsZoomLevel2Hover.description,
    }
  }
}
