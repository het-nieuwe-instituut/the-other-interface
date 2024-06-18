'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../shared/utils/initApiClientService'
import { Category } from '../../shared/utils/categories'
import { getZoom3RecordMeta } from '@/features/pages/tasks/getZoom3RecordMeta'
import { useLocale } from '@/features/shared/hooks/useLocale'

export function useRecordMeta(type: Category, id: string) {
  const api = initApiClientService()
  const lang = useLocale()

  const queryFn = () => getZoom3RecordMeta(type, { id, locale: lang ?? 'nl' }, api)

  return useQuery({
    queryKey: ['record-meta', id, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
