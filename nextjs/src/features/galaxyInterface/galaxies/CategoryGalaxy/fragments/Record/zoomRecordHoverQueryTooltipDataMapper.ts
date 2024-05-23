import { joinNullableStrings } from '@/features/shared/utils/text'
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
    const { title, description, authors } = initialData.publicationsZoomRecordHover

    if (!title && !description) {
      return null
    }

    return {
      title: joinNullableStrings(', ', title, authors),
      description,
    }
  }
  if ('archivesZoomRecordHover' in initialData) {
    const { title, description, creators } = initialData.archivesZoomRecordHover

    if (!title && !description) {
      return null
    }

    return {
      title: joinNullableStrings(', ', title, creators),
      description,
    }
  }

  if ('peopleZoomLevelHover' in initialData) {
    const { title, description, profession } = initialData.peopleZoomLevelHover

    if (!title && !description) {
      return null
    }

    return {
      title: joinNullableStrings(', ', title, profession),
      description,
    }
  }

  if ('objectsZoomRecordHover' in initialData) {
    const { title, description, maker } = initialData.objectsZoomRecordHover

    if (!title && !description) {
      return null
    }

    return { title: joinNullableStrings(', ', title, maker), description }
  }
}
