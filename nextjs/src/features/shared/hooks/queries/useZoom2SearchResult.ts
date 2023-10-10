'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { CATEGORIES_TO_ENTITY_MAPPER, CloudCategory } from '@/features/shared/utils/categories'

export function useZoom2SearchResult(category: CloudCategory) {
  const api = initApiClientService()

  const queryFn = () =>
    api.Zoom2({
      entityName: CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory],
      page: 1,
      pageSize: 12,
    })

  return useQuery({
    queryKey: ['search-result', category],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
