'use client'
import { useQuery } from '@tanstack/react-query'
import useTranslation from 'next-translate/useTranslation'
import initApiClientService from '../../utils/initApiClientService'
import { getZoom3RelationsTask } from '@/features/pages/tasks/getZoom3Relations'
import { Category } from '../../utils/categories'

export function useRecordRelations(type: Category, id: string) {
  const api = initApiClientService()
  const { lang = 'nl' } = useTranslation()

  const queryFn = () => getZoom3RelationsTask({ type, id, locale: lang, api })

  return useQuery({
    queryKey: ['record-relations', id],
    queryFn,
  })
}
