'use client'
import { getZoom3RecordTask } from '@/features/pages/tasks/getZoom3Record'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { UseBaseQueryOptions, useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { Locale } from 'src/generated/graphql'
import { State } from '../../shared/configs/store'
import { Category } from '../../shared/utils/categories'
import initApiClientService from '../../shared/utils/initApiClientService'
import { getPublicationState } from '../../shared/utils/publication-state'

export const getRecordDetailQueryKey = (id: string, lang: string) => ['record-detail', id, lang]
export function useRecordDetailQuery({
  type,
  id,
  options,
}: {
  type: Category
  id: string
  options?: Pick<
    UseBaseQueryOptions<() => typeof getZoom3RecordTask>,
    'suspense' | 'refetchOnWindowFocus'
  >
}) {
  const { isDraftMode } = useSelector((state: State) => state.shared)
  const api = initApiClientService()
  const lang = useLocale()

  return useQuery({
    queryKey: getRecordDetailQueryKey(id, lang),
    queryFn: async () => {
      const res = await getZoom3RecordTask(
        type,
        { id, locale: Locale.Nl, publicationState: getPublicationState(isDraftMode) },
        api,
        options?.suspense
      )

      return res
    },
    staleTime: Infinity,
    suspense: options?.suspense ?? false,
    retry: 0,
  })
}
