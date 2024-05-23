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
  constructor() {
    super('Could not fetch record detail data')
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
    if (!story && throwOnError) throw new Zoom3TaskError()

    if (!story) return null

    const record = extractStoryData(story)
    return record
  }

  const configByType = getZoom3Queries(type, api)

  const data = await configByType?.zoomLevelQuery?.(payload)

  const item = configByType?.accesor?.(data)

  const invalidItem = !item?.id || (item?.thumbnail && !item?.title)
  if (!invalidItem && throwOnError) throw new Zoom3TaskError()

  if (!item?.id) return null

  return item
}
