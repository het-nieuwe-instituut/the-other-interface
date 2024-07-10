'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { Category } from '../../utils/categories'
import { getZoom3CountsTask } from '@/features/pages/tasks/getZoom3CountsTask'
import { useLocale } from '../useLocale'
import { GALAXY_QUERIES_STALE_TIME } from '@/features/galaxyInterface/galaxies/galaxies.constants'

export function useRecordRelationsCountQuery(type: Category, id: string) {
  const api = initApiClientService()
  const lang = useLocale()

  const queryFn = () => getZoom3CountsTask({ type, id, locale: lang, api })

  return useQuery({
    queryKey: ['record-relations-count', id, type, lang],
    queryFn,
    staleTime: GALAXY_QUERIES_STALE_TIME,
    refetchOnWindowFocus: false,
  })
}
