'use client'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { CATEGORIES_TO_ENTITY_MAPPER, CloudCategory } from '@/features/shared/utils/categories'
import { ZOOM2_RECORDS_PER_PAGE } from '../../constants/mainConstants'
import { useEffect, useState } from 'react'

export function useZoom2SearchResult({
  category,
  pageAmount,
  page,
}: {
  category: CloudCategory
  pageAmount: number
  page: number
}) {
  const api = initApiClientService()
  const queryClient = useQueryClient()

  const [shouldFetch, setShouldFetch] = useState(false)

  const entityName = CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory]

  useEffect(() => {
    setShouldFetch(false)
    // Fetch data only if user is at least 200 ms on a page
    const handle = setTimeout(() => setShouldFetch(true), 200)

    return () => clearTimeout(handle)
  }, [page])

  return useQuery({
    queryKey: ['search-result', category, page],
    queryFn: () => {
      return api.Zoom2({
        entityName,
        page,
        pageSize: ZOOM2_RECORDS_PER_PAGE,
      })
    },
    enabled: shouldFetch,
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
