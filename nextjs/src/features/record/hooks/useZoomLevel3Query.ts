'use client'
import { getZoom3RecordTask } from '@/features/pages/tasks/getZoom3Record'
import { UseBaseQueryOptions, useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { Locale } from 'src/generated/graphql'
import { State } from '../../shared/configs/store'
import { Category } from '../../shared/utils/categories'
import initApiClientService from '../../shared/utils/initApiClientService'
import { getPublicationState } from '../../shared/utils/publication-state'

export const getRecordDetailQueryKey = (id: string, lang: string) => ['record-detail', id, lang]
export function useZoomLevel3Query({
  type,
  id,
  options,
  locale,
}: {
  type: Category
  id: string
  options?: Pick<
    UseBaseQueryOptions<() => typeof getZoom3RecordTask>,
    'suspense' | 'refetchOnWindowFocus'
  >
  locale: Locale
}) {
  const { isDraftMode } = useSelector((state: State) => state.shared)
  const api = initApiClientService()

  return useQuery({
    queryKey: getRecordDetailQueryKey(id, locale),
    queryFn: async () => {
      const res = await getZoom3RecordTask(
        type,
        { id, locale, publicationState: getPublicationState(isDraftMode) },
        api,
        options?.suspense
      )

      return res
    },
    staleTime: Infinity,
    suspense: options?.suspense ?? false,
    refetchOnWindowFocus: false,
    retry: 0,
  })
}
