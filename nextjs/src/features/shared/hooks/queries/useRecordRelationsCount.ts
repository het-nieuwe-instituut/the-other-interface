'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { Category } from '../../utils/categories'
import { useSearchParams } from 'next/navigation'
import { getZoom3CountsTask } from '@/features/pages/tasks/getZoom3CountsTask'

export function useRecordRelationsCount(type: Category, id: string) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang') || 'nl'

  const queryFn = () => getZoom3CountsTask({ type, id, locale: lang, api })

  return useQuery({
    queryKey: ['record-relations', id, type, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
