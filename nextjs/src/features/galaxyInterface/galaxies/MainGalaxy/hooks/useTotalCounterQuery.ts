'use client'
import { State } from '@/features/shared/configs/store'
import { useLocale } from '@/features/shared/hooks/useLocale'
import initApiClientService from '@/features/shared/utils/initApiClientService'
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { sumTotalCounts } from '../helpers/sumTotalCounts'
import { FilterArray } from '@/features/shared/hooks/search/useFilters'

export function useTotalCounterQuery(selectedFilterSuggestions: FilterArray) {
  const api = initApiClientService()
  const locale = useLocale()
  const { searchCategory } = useSelector((state: State) => state.shared)
  const ids = selectedFilterSuggestions.map(s => s.id)

  const queryFn = async () => {
    const data = await api.totalCounter({
      selectedFilterSuggestions: selectedFilterSuggestions.map(v => ({
        key: v.key,
        value: v.value,
      })),
      locale,
    })
    return sumTotalCounts(data, searchCategory)
  }

  return useQuery({
    retry: false,
    queryKey: ['total-counter', locale, searchCategory, ...ids],
    queryFn,
    cacheTime: 0,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })
}
