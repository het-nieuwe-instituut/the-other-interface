'use client'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { State } from '../../configs/store'
import initApiClientService from '../../utils/initApiClientService'
import { getPublicationState } from '../../utils/publication-state'
import { useLocale } from '../useLocale'

export function useStoryMetaByIdQuery({
  id,
  options,
}: {
  id: string
  options: Pick<UseQueryOptions, 'refetchOnWindowFocus' & 'suspense'>
}) {
  const api = initApiClientService()
  const lang = useLocale()
  const { isDraftMode } = useSelector((state: State) => state.shared)

  const queryFn = () => {
    return api.storyMetaById({
      id,
      locale: lang ?? 'nl',
      publicationState: getPublicationState(isDraftMode),
    })
  }

  return useQuery({
    queryKey: ['story-meta-by-id', id, lang, isDraftMode] as const,
    queryFn,
    ...options,
  })
}
