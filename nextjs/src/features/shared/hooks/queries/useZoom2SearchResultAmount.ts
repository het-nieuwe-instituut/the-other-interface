'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { CATEGORIES_TO_ENTITY_MAPPER, CloudCategory } from '@/features/shared/utils/categories'

export function useZoom2SearchResultAmount(category: CloudCategory) {
  const api = initApiClientService()

  const queryFn = () =>
    api.Zoom2Amount({
      entityName: CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory],
    })

  return useQuery({
    queryKey: ['search-result-amount', category],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
