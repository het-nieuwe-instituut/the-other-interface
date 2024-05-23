'use client'
import { getZoom3RecordTask } from '@/features/pages/tasks/getZoom3Record'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { UseBaseQueryOptions, useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { State } from '../../shared/configs/store'
import { Category } from '../../shared/utils/categories'
import initApiClientService from '../../shared/utils/initApiClientService'
import { getPublicationState } from '../../shared/utils/publication-state'

export function useRecordDetailQuery({
  type,
  id,
  options,
}: {
  type: Category
  id: string
  options?: Pick<
    UseBaseQueryOptions<() => typeof getZoom3RecordTask>,
    'suspense' & 'refetchOnWindowFocus'
  >
}) {
  const { isDraftMode } = useSelector((state: State) => state.shared)
  const api = initApiClientService()
  const lang = useLocale()

  const queryFn = () =>
    getZoom3RecordTask(
      type,
      { id, locale: lang ?? 'nl', publicationState: getPublicationState(isDraftMode) },
      api
    )

  return useQuery({
    queryKey: ['record-detail', id, lang],
    queryFn,
    ...options,
  })
}
