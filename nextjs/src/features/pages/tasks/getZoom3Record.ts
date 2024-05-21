import { Category, isStoryCategory } from '@/features/shared/utils/categories'
import { getZoom3Queries } from './zoom3Config'
import {
  Sdk,
  StoryByIdQuery,
  StoryEntity,
  PeopleZoomLevel3DetailType,
  ArchiveZoomLevel3DetailType,
  ObjectsZoomLevel3DetailType,
  PublicationZoomLevel3DetailType,
  Locale,
} from 'src/generated/graphql'
import { PublicationState } from '@/features/shared/types/enums'
import { extractStoryData } from '@/features/shared/helpers/extractStoryData'

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

export async function getZoom3RecordTask(type: Category, payload: Payload, api: Sdk) {
  try {
    if (isStoryCategory(type)) {
      const detail = await api?.storyById(payload)
      const story = (detail as StoryByIdQuery)?.storyByLocale?.data
      const record = extractStoryData(story as StoryEntity)
      return record
    }

    const configByType = getZoom3Queries(type, api)

    const data = await configByType?.zoomLevelQuery?.(payload)
    const item = configByType?.accesor?.(data)

    // TODO this might cause console errors 'Cannot return null for non-nullable field'
    if (!item?.thumbnail && !item?.title) return null

    return {
      ...item,
      description: item?.description ?? '',
      locale: payload.locale,
    }
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
