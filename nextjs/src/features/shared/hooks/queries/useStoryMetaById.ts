'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { useSearchParams } from 'next/navigation'

export function useStoryMetaById(id: string) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  const queryFn = () => api.storyMetaById({ id, locale: lang ?? 'nl' })

  return useQuery({
    queryKey: ['story-meta-by-id', id, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
