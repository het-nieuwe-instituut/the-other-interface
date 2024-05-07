import {
  ArchivesZoomRecordHoverQuery,
  ObjectsZoomRecordHoverQuery,
  PeopleZoomRecordHoverQuery,
  PublicationsZoomRecordHoverQuery,
} from 'src/generated/graphql'

type TooltipData =
  | ArchivesZoomRecordHoverQuery
  | ObjectsZoomRecordHoverQuery
  | PeopleZoomRecordHoverQuery
  | PublicationsZoomRecordHoverQuery
  | undefined

export const zoomRecordHoverQueryTooltipDataMapper = (initialData: TooltipData) => {
  if (!initialData) {
    return null
  }
  if ('publicationsZoomRecordHover' in initialData) {
    if (
      initialData.publicationsZoomRecordHover.title === null &&
      initialData.publicationsZoomRecordHover.description === null
    ) {
      return null
    }
    return {
      title: `${initialData.publicationsZoomRecordHover.title}${
        initialData.publicationsZoomRecordHover.authors
          ? ', ' + initialData.publicationsZoomRecordHover.authors
          : ''
      }`,
      description: initialData.publicationsZoomRecordHover.description,
    }
  }
  if ('archivesZoomRecordHover' in initialData) {
    if (
      initialData.archivesZoomRecordHover.title === null &&
      initialData.archivesZoomRecordHover.description === null
    ) {
      return null
    }
    return {
      title: `${initialData.archivesZoomRecordHover.title}${
        initialData.archivesZoomRecordHover.creators
          ? ', ' + initialData.archivesZoomRecordHover.creators
          : ''
      }`,
      description: initialData.archivesZoomRecordHover.description,
    }
  }
  if ('peopleZoomLevelHover' in initialData) {
    if (
      initialData.peopleZoomLevelHover.title === null &&
      initialData.peopleZoomLevelHover.description === null
    ) {
      return null
    }
    return {
      title: `${initialData.peopleZoomLevelHover.title}${
        initialData.peopleZoomLevelHover.profession
          ? ', ' + initialData.peopleZoomLevelHover.profession
          : ''
      }`,
      description: initialData.peopleZoomLevelHover.description,
    }
  }
  if ('objectsZoomRecordHover' in initialData) {
    if (
      initialData.objectsZoomRecordHover.title === null &&
      initialData.objectsZoomRecordHover.description === null
    ) {
      return null
    }
    return {
      title: initialData.objectsZoomRecordHover.title,
      description: initialData.objectsZoomRecordHover.description,
    }
  }
}
