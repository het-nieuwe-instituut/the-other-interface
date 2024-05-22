'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../shared/utils/initApiClientService'
import { getZoom3RelationsTask } from '@/features/pages/tasks/getZoom3Relations'
import { Category } from '../../shared/utils/categories'
import { useSearchParams } from 'next/navigation'
import { useLocale } from '@/features/shared/hooks/useLocale'

export function useRecordRelations(type: Category, id: string, maxPages: number) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = useLocale()
  const page =
    maxPages && parseInt(searchParams?.get('page') || '1') > maxPages
      ? maxPages
      : parseInt(searchParams?.get('page') || '1')

  const queryFn = () => getZoom3RelationsTask({ type, id, page, locale: lang, api, maxPages })

  return useQuery({
    queryKey: ['record-relations', id, type, page, lang, maxPages],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
