'use client'
import initApiClientService from '../../utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from '../useLocale'
import { StoriesWithinThemeQueryVariables } from 'src/generated/graphql'

export const useStoriesRelatedByThemeQuery = (id: string, themeIds: string[]) => {
  const api = initApiClientService()
  const locale = useLocale()

  const filters: StoriesWithinThemeQueryVariables['filters'] = {
    ...(themeIds.length ? { themes: { id: { in: themeIds } } } : {}),
    id: { ne: id },
  }

  return useQuery({
    queryKey: ['stories-within-theme', id, locale],
    queryFn: () => api.storiesWithinTheme({ locale, filters }),
    suspense: true,
    refetchOnWindowFocus: false,
  })
}
