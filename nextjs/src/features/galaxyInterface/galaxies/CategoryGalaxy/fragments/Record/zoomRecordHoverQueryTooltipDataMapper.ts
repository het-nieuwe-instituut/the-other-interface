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
    const multipleTitles = title?.split(';')

    return {
      title: joinNullableStrings(
        ' ',
        multipleTitles && multipleTitles.length > 1 ? multipleTitles[0] : title,
        authors ? `(${authors})` : undefined
      ),
      description,
    }
  }
  if ('archivesZoomRecordHover' in initialData) {
    const { title, description, creators } = initialData.archivesZoomRecordHover

    if (!title && !description) {
      return null
    }
    const multipleTitles = title?.split(';')

    return {
      title: joinNullableStrings(
        ' ',
        multipleTitles && multipleTitles.length > 1 ? multipleTitles[0] : title,
        creators ? `(${creators})` : undefined
      ),
      description,
    }
  }

  if ('peopleZoomLevelHover' in initialData) {
    const { title, description, profession } = initialData.peopleZoomLevelHover

    if (!title && !description) {
      return null
    }
    const multipleTitles = title?.split(';')

    return {
      title: joinNullableStrings(
        ' ',
        multipleTitles && multipleTitles.length > 1 ? multipleTitles[0] : title,
        profession ? `(${profession})` : undefined
      ),
      description,
    }
  }

  if ('objectsZoomRecordHover' in initialData) {
    const { title, description, maker } = initialData.objectsZoomRecordHover

    if (!title && !description) {
      return null
    }

    const multipleTitles = title?.split(';')

    return {
      title: joinNullableStrings(
        ' ',
        multipleTitles && multipleTitles.length > 1 ? multipleTitles[0] : title,
        maker ? `(${maker})` : undefined
      ),
      description,
    }
  }
}
