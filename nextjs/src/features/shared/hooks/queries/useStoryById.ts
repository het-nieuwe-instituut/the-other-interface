'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { useSelector } from 'react-redux'
import { State } from '../../configs/store'
import { getPublicationState } from '../../utils/publication-state'
import { useLocale } from '../useLocale'

export function useStoryById(id: string) {
  const { isDraftMode } = useSelector((state: State) => state.shared)

  const api = initApiClientService()
  const lang = useLocale()
  const queryFn = () =>
    api.storyById({ id, locale: lang ?? 'nl', publicationState: getPublicationState(isDraftMode) })

  return useQuery({
    queryKey: ['story-by-id', id, lang, isDraftMode],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
