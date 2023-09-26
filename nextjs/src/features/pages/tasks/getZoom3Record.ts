import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { getZoom3Queries } from './zoom3Config'
import { Sdk, StoryByIdQuery, StoryEntity } from 'src/generated/graphql'
import { PublicationState } from '@/features/shared/types/enums'
import { extractStoryData } from '@/features/shared/helpers/extractStoryData'

type Payload =
  | {
      id: string
    }
  | { lang?: string; publicationState: PublicationState; id: string }

export type Zoom3Record = {
  title: string
  image: string
  locale: string
  id: string
} | null

export async function getZoom3RecordTask(type: Category, payload: Payload, api: Sdk) {
  try {
    if (type === CATEGORIES.stories) {
      const detail = await api?.storyById(payload)
      const story = (detail as StoryByIdQuery)?.stories?.data?.[0]
      const record = extractStoryData(story as StoryEntity)
      return record
    }

    const configByType = getZoom3Queries(type, api)

    const data = await configByType?.zoomLevelQuery?.(payload)
    const item = configByType?.accesor?.(data)

    // console.log(item, 'this is item')
    return {
      id: item?.id ?? '',
      // TODO map name
      title: item?.title ?? '',
      locale: 'nl',
      image: item?.thumbnail ?? '',
    }
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
