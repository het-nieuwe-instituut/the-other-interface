'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { useSearchParams } from 'next/navigation'
import { getPaginatedRelationsTask } from '@/features/pages/tasks/getPaginatedRelationsTask'
import { Category } from '../../utils/categories'
import { PaginationPagesTypes } from '../../components/Record/RecordTable/usePresenter'

export function usePaginationedRecordRelations(
  type: Category,
  id: string,
  pages: PaginationPagesTypes
) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang') || 'nl'
  console.log('usePaginationedRecordRelations', pages)
  const queryFn = () => getPaginatedRelationsTask({ type, id, locale: lang, api, pages })

  return useQuery({
    queryKey: ['paginated-record-relations', id, type, lang],
    queryFn,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
}
