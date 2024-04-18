'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import {
  CATEGORIES_TO_ENTITY_MAPPER,
  CloudCategory,
  SEARCH_CATEGORIES,
  SearchCategory,
} from '@/features/shared/utils/categories'
import { useSearchParams } from 'next/navigation'

export function useZoom2SearchResultAmount(category: SearchCategory, text?: string) {
  const api = initApiClientService()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  const queryFn = async () => {
    if (category === SEARCH_CATEGORIES.stories) {
      const result = await api.searchByStoriesAmount({
        searchTerm: text || undefined,
        locale: lang ?? 'nl',
      })

      return result.stories.meta?.pagination?.total
    } else {
      const data = await api.Zoom2Amount({
        entityName: CATEGORIES_TO_ENTITY_MAPPER[category as CloudCategory],
        text: text || undefined,
      })
      return data.zoomLevel2Amount.total
    }
  }

  const queryKey =
    category === SEARCH_CATEGORIES.stories
      ? ['searchByStoriesAmount', category, text, lang]
      : ['Zoom2Amount', category, text]

  return useQuery(queryKey, queryFn, {
    refetchOnWindowFocus: false,
  })
}
