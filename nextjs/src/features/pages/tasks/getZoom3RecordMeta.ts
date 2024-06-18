import { Category } from '@/features/shared/utils/categories'
import { Locale, Sdk } from 'src/generated/graphql'
import { PublicationState } from '@/features/shared/types/enums'
import { zoom3RecordMetaConfig } from './zoom3RecordMetaConfig'

type Payload =
  | {
      id: string
      locale: Locale
    }
  | { locale: Locale; publicationState: PublicationState; id: string }

export async function getZoom3RecordMeta(type: Category, payload: Payload, api: Sdk) {
  try {
    const configByType = zoom3RecordMetaConfig(type, api)

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
