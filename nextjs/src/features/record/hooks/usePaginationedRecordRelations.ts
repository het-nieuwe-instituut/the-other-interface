'use client'
import { InfiniteData, useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import initApiClientService from '../../shared/utils/initApiClientService'
import { getPaginatedRelationsTask } from '@/features/pages/tasks/getPaginatedRelationsTask'
import { Category } from '../../shared/utils/categories'
import { useLocale } from '@/features/shared/hooks/useLocale'

const CACHE_FIRST_N_PAGES = 1 // Adjust this number as needed

export function usePaginationedRecordRelations(type: Category, id: string, category: Category) {
  const api = initApiClientService()
  const lang = useLocale()
  const queryClient = useQueryClient()

  const queryFn = ({ pageParam = 1 }) => {
    return getPaginatedRelationsTask({
      type,
      id,
      locale: lang,
      api,
      page: pageParam,
      category,
    })
  }

  const result = useInfiniteQuery({
    queryKey: ['paginated-record-relations', id, type, lang, category],
    queryFn,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    suspense: true,
    getNextPageParam: (_lastPage, allPages) => {
      if (!allPages[0]) return null

      return allPages.length >= Math.ceil(parseInt(allPages[0].total) / 5)
        ? null
        : allPages.length + 1
    },
  })

  useEffect(() => {
    return () => {
      queryClient.setQueryData(
        ['paginated-record-relations', id, type, lang, category],
        (
          oldData: InfiniteData<Awaited<ReturnType<typeof getPaginatedRelationsTask>>> | undefined
        ) => {
          if (oldData && oldData.pages) {
            return {
              ...oldData,
              pages: oldData.pages.slice(0, CACHE_FIRST_N_PAGES),
            }
          }
          return oldData
        }
      )
    }
  }, [queryClient, id, type, lang, category])

  return result
}
