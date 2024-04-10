'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../shared/utils/initApiClientService'
import { Category } from '../../shared/utils/categories'
import { useSearchParams } from 'next/navigation'
import { getZoom3RecordMeta } from '@/features/pages/tasks/getZoom3RecordMeta'

export function useRecordMeta(type: Category, id: string) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  const queryFn = () => getZoom3RecordMeta(type, { id, locale: lang ?? 'nl' }, api)

  return useQuery({
    queryKey: ['record-meta', id, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
