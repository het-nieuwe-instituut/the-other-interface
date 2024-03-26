'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { useSearchParams } from 'next/navigation'
import { getPaginatedRelationsTask } from '@/features/pages/tasks/getPaginatedRelationsTask'
import { Category } from '../../utils/categories'

export function usePaginationedRecordRelations(type: Category, id: string) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang') || 'nl'

  const queryFn = () => getPaginatedRelationsTask({ type, id, locale: lang, api })

  return useQuery({
    queryKey: ['paginated-record-relations', id, type, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
