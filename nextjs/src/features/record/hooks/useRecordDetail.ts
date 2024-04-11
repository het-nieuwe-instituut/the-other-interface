'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../shared/utils/initApiClientService'
import { getZoom3RecordTask } from '@/features/pages/tasks/getZoom3Record'
import { Category } from '../../shared/utils/categories'
import { useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { State } from '../../shared/configs/store'
import { getPublicationState } from '../../shared/utils/publication-state'

export function useRecordDetail(type: Category, id: string) {
  const { isDraftMode } = useSelector((state: State) => state.shared)
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  const queryFn = () =>
    getZoom3RecordTask(
      type,
      { id, locale: lang ?? 'nl', publicationState: getPublicationState(isDraftMode) },
      api
    )

  return useQuery({
    queryKey: ['record-detail', id, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}