import { PublicationState } from '@/features/shared/types/enums'
import { Category } from '@/features/shared/utils/categories'
import { Locale, Sdk } from 'src/generated/graphql'
import { zoom3RecordMetaConfig } from './zoom3RecordMetaConfig'

type Payload =
  | {
      id: string
      locale: Locale
    }
  | { locale: Locale; publicationState: PublicationState; id: string }

export async function getZoom3RecordMeta(type: Category, payload: Payload, api: Sdk) {
  const configByType = zoom3RecordMetaConfig(type, api)

  const data = await configByType?.zoomLevelQuery?.(payload)
  const item = configByType?.accesor?.(data)

  return item
}
