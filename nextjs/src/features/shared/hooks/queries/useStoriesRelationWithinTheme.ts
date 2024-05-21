'use client'
import initApiClientService from '../../utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from '../useLocale'

export const useStoriesRelatedByTheme = (id: string) => {
  const api = initApiClientService()
  const lang = useLocale()
  const queryFn = () => api.storiesRealtedWithinTheme({ id, locale: lang ?? 'nl' })

  return useQuery({
    queryKey: ['stories-related-within-theme', id, lang],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
