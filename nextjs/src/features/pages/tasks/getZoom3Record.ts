import { extractStoryData } from '@/features/shared/helpers/extractStoryData'
import { PublicationState } from '@/features/shared/types/enums'
import { Category, isStoryCategory } from '@/features/shared/utils/categories'
import {
  ArchiveZoomLevel3DetailType,
  ObjectsZoomLevel3DetailType,
  PeopleZoomLevel3DetailType,
  PublicationZoomLevel3DetailType,
  Sdk,
} from 'src/generated/graphql'
import { getZoom3Queries } from './zoom3Config'

type Payload =
  | {
      id: string
    }
  | { locale?: string | null; publicationState: PublicationState; id: string }

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
      const story = detail.storyByLocale.data
      if (!story) return null
      const record = extractStoryData(story)
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
      locale: 'nl',
    }
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
