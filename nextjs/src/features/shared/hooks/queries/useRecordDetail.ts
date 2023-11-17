'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { getZoom3RecordTask } from '@/features/pages/tasks/getZoom3Record'
import { Category } from '../../utils/categories'
import { useSearchParams } from 'next/navigation'

export function useRecordDetail(type: Category, id: string) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  const queryFn = () => getZoom3RecordTask(type, { id, locale: lang ?? 'nl' }, api)

  return useQuery({
    queryKey: ['record-detail', id, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
