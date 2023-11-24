'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { getZoom3RecordTask } from '@/features/pages/tasks/getZoom3Record'
import { Category } from '../../utils/categories'
import { useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { State } from '../../configs/store'
import { getPublicationState } from '../../utils/publication-state'

export function useRecordDetail(type: Category, id: string) {
  const { isDraftMode } = useSelector((state: State) => state.shared)
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  const queryFn = () => getZoom3RecordTask(type, { id, locale: lang ?? 'nl', publicationState: getPublicationState(isDraftMode)  }, api)

  return useQuery({
    queryKey: ['record-detail', id, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
