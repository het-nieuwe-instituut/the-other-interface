'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { useSearchParams } from 'next/navigation'
import { PublicationState } from '../../types/enums'

export function useStoryById(id: string, isDraftMode?: boolean) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')
  const publicationState = isDraftMode ? PublicationState.Preview : PublicationState.Live

  const queryFn = () => api.storyById({ id, locale: lang ?? 'nl', publicationState })

  return useQuery({
    queryKey: ['story-by-id', id, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
