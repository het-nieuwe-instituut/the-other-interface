'use client'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { CATEGORIES_TO_ENTITY_MAPPER, CloudCategory } from '@/features/shared/utils/categories'
import { ZOOM2_RECORDS_PER_PAGE } from '../../constants/mainConstants'
import { useEffect, useRef, useState } from 'react'

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
  const isCurrentPage = useRef(true)

  const entityName = CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory]

  useEffect(() => {
    // Set shouldFetch to false when page changes
    setShouldFetch(false)

    // Update the ref to indicate the current page
    isCurrentPage.current = true

    console.log(
      `${page}, useEffect, shouldFetch: ${shouldFetch}}, isCurrentPage: ${isCurrentPage.current}`
    )
    // Start a timeout to set shouldFetch to true
    const handle = setTimeout(() => {
      if (isCurrentPage.current) {
        console.log(
          `${page}, setTimeout, shouldFetch: ${shouldFetch}}, isCurrentPage: ${isCurrentPage.current}`
        )
        setShouldFetch(true)
      }
    }, 500)

    // Cleanup function to run when the component unmounts or the page changes
    return () => {
      // Clear the timeout
      clearTimeout(handle)
      // Update the ref to indicate that we've moved on from this page
      isCurrentPage.current = false
      console.log(
        `${page}, return, shouldFetch: ${shouldFetch}}, isCurrentPage: ${isCurrentPage.current}`
      )
    }
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
