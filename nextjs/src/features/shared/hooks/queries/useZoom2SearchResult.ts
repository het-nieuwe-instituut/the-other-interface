'use client'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { CATEGORIES_TO_ENTITY_MAPPER, CloudCategory } from '@/features/shared/utils/categories'
import { ZOOM2_RECORDS_PER_PAGE } from '../../constants/mainConstants'

export function useZoom2SearchResult({
  category,
  pageAmount,
  page,
  enabled = true,
}: {
  category: CloudCategory
  pageAmount: number
  page: number
  enabled?: boolean
}) {
  const api = initApiClientService()
  const queryClient = useQueryClient()

  const entityName = CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory]

  return useQuery({
    queryKey: ['search-result', category, page],
    enabled,
    queryFn: () => {
      return api.Zoom2({
        entityName,
        page,
        pageSize: ZOOM2_RECORDS_PER_PAGE,
      })
    },

    refetchOnWindowFocus: false,
    onSuccess: () => {
      if (page === pageAmount) return

      const nextPage = page + 1

      queryClient.prefetchQuery(['search-result', category, nextPage], () =>
        api.Zoom2({
          entityName,
          page: nextPage,
          pageSize: ZOOM2_RECORDS_PER_PAGE,
        })
      )
    },
  })
}
