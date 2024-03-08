'use client'
import { useSearchParams } from 'next/navigation'
import initApiClientService from '../../utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'

export const useStoriesRelatedByTheme = (id: string) => {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')
  const queryFn = () => api.storiesRealtedWithinTheme({ id, locale: lang ?? 'nl' })

  return useQuery({
    queryKey: ['stories-related-within-theme', id, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
