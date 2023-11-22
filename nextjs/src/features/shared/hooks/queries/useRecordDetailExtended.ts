'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { Category } from '../../utils/categories'
import { useSearchParams } from 'next/navigation'
import { getZoom3RecordDetail } from '@/features/pages/tasks/getZoom3RecordDetail'

export function useRecordDetailExtended(type: Category, id: string) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  const queryFn = () => getZoom3RecordDetail(type, { id, locale: lang ?? 'nl' }, api)

  return useQuery({
    queryKey: ['record-detail-extended', id, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
