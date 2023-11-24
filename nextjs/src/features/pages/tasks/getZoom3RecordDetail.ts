import { Category } from '@/features/shared/utils/categories'
import {
  Sdk,
  // PeopleZoomLevel3DetailType,
  // ArchiveZoomLevel3DetailType,
  // ObjectsZoomLevel3DetailType,
  // PublicationZoomLevel3DetailType,
} from 'src/generated/graphql'
import { PublicationState } from '@/features/shared/types/enums'
import { getZoomRecord3Queries } from './zoom3RecordConfig'

type Payload =
  | {
      id: string
    }
  | { locale?: string | null; publicationState: PublicationState; id: string }

export async function getZoom3RecordDetail(type: Category, payload: Payload, api: Sdk) {
  try {
    const configByType = getZoomRecord3Queries(type, api)

    const data = await configByType?.zoomLevelQuery?.(payload)
    const item = configByType?.accesor?.(data)

    // TODO this might cause console errors 'Cannot return null for non-nullable field'
    if (!item?.[0]) return null

    return {
      ...item[0],
    }
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
