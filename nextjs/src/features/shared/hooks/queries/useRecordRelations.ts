'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { getZoom3RelationsTask } from '@/features/pages/tasks/getZoom3Relations'
import { Category } from '../../utils/categories'
import { useSearchParams } from 'next/navigation'

export function useRecordRelations(type: Category, id: string, maxPages?: number) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang') || 'nl'
  const page =
    maxPages && parseInt(searchParams?.get('page') || '1') > maxPages
      ? maxPages
      : parseInt(searchParams?.get('page') || '1')

  const queryFn = () => getZoom3RelationsTask({ type, id, page, locale: lang, api })

  return useQuery({
    queryKey: ['record-relations', id, type, page, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
