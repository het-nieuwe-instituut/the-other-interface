'use client'
import { useInfiniteQuery } from '@tanstack/react-query' //
import initApiClientService from '../../shared/utils/initApiClientService'
import { useSearchParams } from 'next/navigation'
import { getPaginatedRelationsTask } from '@/features/pages/tasks/getPaginatedRelationsTask'
import { Category } from '../../shared/utils/categories'

export function usePaginationedRecordRelations(type: Category, id: string, category: Category) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang') || 'nl'

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

  return useInfiniteQuery({
    queryKey: ['paginated-record-relations', id, type, lang, category],
    queryFn,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    getNextPageParam: (_lastPage, allPages) => {
      if (!allPages[0]) return null

      return allPages.length >= Math.ceil(parseInt(allPages[0].total) / 5)
        ? null
        : allPages.length + 1
    },
  })
}
