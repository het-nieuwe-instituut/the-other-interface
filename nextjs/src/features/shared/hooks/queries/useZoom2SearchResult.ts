'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { CATEGORIES_TO_ENTITY_MAPPER, CloudCategory } from '@/features/shared/utils/categories'
import { ZOOM2_RECORDS_PER_PAGE } from '../../constants/mainConstants'

export function useZoom2SearchResult({
  category,
  text,
  page = 1,
  enabled = true,
}: {
  category: CloudCategory
  text?: string
  page?: number
  enabled?: boolean
}) {
  const api = initApiClientService()

  const entityName = CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory]

  return useQuery({
    queryKey: ['search-result', category, text, page],
    queryFn: () => {
      return api.Zoom2({
        entityName,
        page,
        pageSize: ZOOM2_RECORDS_PER_PAGE,
        text: text || undefined,
      })
    },
    enabled,
    refetchOnWindowFocus: false,
  })
}
