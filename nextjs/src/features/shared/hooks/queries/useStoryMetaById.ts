'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { useSearchParams } from 'next/navigation'
import { PublicationState } from '../../types/enums'
import { useSelector } from 'react-redux'
import { State } from '../../configs/store'

export function useStoryMetaById(id: string) {
  const { isDraftMode } = useSelector((state: State) => state.shared)

  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')
  const publicationState = isDraftMode ? PublicationState.Preview : PublicationState.Live

  const queryFn = () => api.storyMetaById({ id, locale: lang ?? 'nl', publicationState })

  return useQuery({
    queryKey: ['story-meta-by-id', id, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
