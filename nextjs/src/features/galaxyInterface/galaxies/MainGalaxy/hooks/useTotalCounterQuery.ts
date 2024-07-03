'use client'
import { State } from '@/features/shared/configs/store'
import { useLocale } from '@/features/shared/hooks/useLocale'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { sumTotalCounts } from '../helpers/sumTotalCounts'
import { FilterArray } from '@/features/shared/hooks/search/useFilters'
import { Locale } from 'src/generated/graphql'
import { SearchCategory } from '@/features/shared/utils/categories'
import { COLLECTION_HILIGHT_ID } from '@/features/galaxyInterface/components/GalaxyWrapper/Suggestions/Suggestions'
import { searchCategoryToTriplyCategory } from '../../CategoryGalaxy/mappers/searchCategoryToTriplyMapper'

export function useTotalCounterQuery(selectedFilterSuggestions: FilterArray, text: string) {
  const api = initApiClientService()
  const locale = useLocale()
  const { searchCategory } = useSelector((state: State) => state.shared)
  const ids = selectedFilterSuggestions.map(s => s.id)

  const queryFn = getQueryFn(api, locale, selectedFilterSuggestions, searchCategory, text)

  return useQuery({
    retry: false,
    queryKey: ['total-counter', locale, searchCategory, ...ids],
    queryFn,
    cacheTime: 0,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
}

function getQueryFn(
  api: ReturnType<typeof initApiClientService>,
  locale: Locale,
  selectedFilterSuggestions: FilterArray,
  searchCategory: SearchCategory | null,
  text: string
) {
  const collectionHighlightsActive = selectedFilterSuggestions.some(
    f => f.id === COLLECTION_HILIGHT_ID
  )
  if (collectionHighlightsActive) {
    return collectionHighlightsCountQueryFn(api, locale, searchCategory, text)
  }

  return totalCountsQueryFn(api, locale, selectedFilterSuggestions, searchCategory, text)
}

function collectionHighlightsCountQueryFn(
  api: ReturnType<typeof initApiClientService>,
  locale: Locale,
  searchCategory: SearchCategory | null,
  text: string
) {
  return async () => {
    if (!searchCategory) {
      // because collection highlights are only available for categories
      return 0
    }

    const type = searchCategoryToTriplyCategory(searchCategory)

    const res = await api.searchBySelectedHighlights({
      page: 1,
      pageSize: 1,
      locale,
      filters: {
        type: { eq: type },
        subject_collectionHighlights: { eq: true },
        label: { containsi: text || undefined },
      },
      // we don't need to fetch these, so no need to pass true to any of them despite the active category
      isArchive: false,
      isObject: false,
      isPerson: false,
      isPublication: false,
    })

    return res.triplyRecords.meta?.pagination.total || 0
  }
}

function totalCountsQueryFn(
  api: ReturnType<typeof initApiClientService>,
  locale: Locale,
  selectedFilterSuggestions: FilterArray,
  searchCategory: SearchCategory | null,
  text: string
) {
  return async () => {
    const suggestions = selectedFilterSuggestions.map(s => ({ key: s.key, value: s.value }))
    const { key: storyFilterKey, id: storyFilterId } = selectedFilterSuggestions?.[0] || {}

    const data = await api.totalCounter({
      selectedFilterSuggestions: suggestions,
      locale,
      searchTerm: text || undefined,
      locationsFilterTerm: storyFilterKey === 'location' ? storyFilterId : undefined,
      themesFilterTerm: storyFilterKey === 'theme' ? storyFilterId : undefined,
      authorFilterTerm: storyFilterKey === 'author' ? storyFilterId : undefined,
    })
    return sumTotalCounts(data, searchCategory)
  }
}
