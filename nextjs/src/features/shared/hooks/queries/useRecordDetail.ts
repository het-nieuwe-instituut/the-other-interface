'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { getZoom3RecordTask } from '@/features/pages/tasks/getZoom3Record'
import { Category } from '../../utils/categories'
import useTranslation from 'next-translate/useTranslation'

export function useRecordDetail(type: Category, id: string) {
  const api = initApiClientService()
  const { lang } = useTranslation()

  const queryFn = () => getZoom3RecordTask(type, { id, locale: lang }, api)

  return useQuery({
    queryKey: ['record-detail', id, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
