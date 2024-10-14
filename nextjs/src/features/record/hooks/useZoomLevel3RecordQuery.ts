'use client'

import { useLocale } from '@/features/shared/hooks/useLocale'
import { PublicationState } from '@/features/shared/types/enums'
import { useQuery } from '@tanstack/react-query'
import { Locale, Sdk } from 'src/generated/graphql'
import { Category } from '../../shared/utils/categories'
import initApiClientService from '../../shared/utils/initApiClientService'
import { zoomLevel3RecordConfig } from '@/features/pages/tasks/zoomLevel3RecordConfig'

type Payload =
  | {
      id: string
      locale: Locale
    }
  | { locale: Locale; publicationState: PublicationState; id: string }

async function getZoom3RecordMeta(type: Category, payload: Payload, api: Sdk) {
  const configByType = zoomLevel3RecordConfig(type, api)

  const data = await configByType?.zoomLevelQuery?.(payload)
  const item = configByType?.accesor?.(data)
  return item
}

export function useZoomLevel3RecordQuery(type: Category, id: string) {
  const api = initApiClientService()
  const lang = useLocale()

  const queryFn = async () => {
    const res = await getZoom3RecordMeta(type, { id, locale: lang ?? 'nl' }, api)
    return res
  }

  return useQuery({
    queryKey: ['zoom-level-3-record', type, id, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
