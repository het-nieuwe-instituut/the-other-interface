import { extractStoryData } from '@/features/shared/helpers/extractStoryData'
import { PublicationState } from '@/features/shared/types/enums'
import { Category, isStoryCategory } from '@/features/shared/utils/categories'
import {
  ArchiveZoomLevel3DetailType,
  Locale,
  ObjectsZoomLevel3DetailType,
  PeopleZoomLevel3DetailType,
  PublicationZoomLevel3DetailType,
  Sdk,
} from 'src/generated/graphql'
import { getZoom3Queries } from './zoom3Config'

type Payload =
  | {
      id: string
      locale: Locale
    }
  | { locale: Locale; publicationState: PublicationState; id: string }

export type Zoom3Record =
  | PeopleZoomLevel3DetailType
  | ArchiveZoomLevel3DetailType
  | ObjectsZoomLevel3DetailType
  | PublicationZoomLevel3DetailType
  | null

export class Zoom3TaskError extends Error {
  _tag = 'RecordDetailDataError' as const
  constructor(id: string) {
    super(`Could not fetch record detail data with id: ${id}`)
  }
}

export async function getZoom3RecordTask(
  type: Category,
  payload: Payload,
  api: Sdk,
  throwOnError?: boolean
) {
  if (isStoryCategory(type)) {
    const detail = await api?.storyById(payload)
    const story = detail.storyByLocale.data
    if (!story && throwOnError) throw new Zoom3TaskError(payload.id)

    if (!story) return null

    const record = extractStoryData(story)
    return record
  }

  const configByType = getZoom3Queries(type, api)

  const data = await configByType?.zoomLevelQuery?.(payload)

  const item = configByType?.accesor?.(data)

  const invalidItem = !item?.id || (item?.thumbnail && !item?.title)
  if (invalidItem && throwOnError) throw new Zoom3TaskError(payload.id)

  if (!item?.id) return null

  if (item.__typename === 'ArchiveZoomLevel3DetailType') {
    item.asteriskSuggestions = [
      {
        asterisk_date_title: 'Date',
        asterisk_date_description: '2021-09-01',
        asterisk_name_title: 'Name',
        asterisk_name_description: 'John Doe',
        asterisk_subject_title: 'Subject',
        asterisk_subject_description: 'This is a description',
      },
    ]
  }

  if (item.__typename === 'ObjectsZoomLevel3DetailType') {
    item.asteriskSuggestions = [
      {
        asterisk_date_title: 'Date',
        asterisk_subject_title: 'Subject',
        asterisk_name_title: 'Name',
      },
    ]
  }

  if (item.__typename === 'PeopleZoomLevel3DetailType') {
    item.asteriskSuggestions = [
      {
        asterisk_date_description: 'Date',
        asterisk_name_description: 'Name',
        asterisk_subject_description: 'Subject',
      },
    ]
  }

  return item
}
