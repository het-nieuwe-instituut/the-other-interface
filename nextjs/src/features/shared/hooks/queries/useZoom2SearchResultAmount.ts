'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { CATEGORIES_TO_ENTITY_MAPPER, CloudCategory } from '@/features/shared/utils/categories'
import { useLocale } from '../useLocale'

export function useZoom2SearchResultAmount(category: CloudCategory, text?: string) {
  const api = initApiClientService()
  const locale = useLocale()

  const queryFn = () =>
    api.Zoom2Amount({
      entityName: CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory],
      text: text || undefined,
      locale,
    })

  return useQuery({
    queryKey: ['search-result-amount', category, text],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
