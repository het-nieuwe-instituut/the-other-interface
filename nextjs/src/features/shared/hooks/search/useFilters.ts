import { decodeFilters, encodeFilters } from '@/features/shared/helpers/searchHelpers'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { useSearchParams } from 'next/navigation'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../configs/store'
import { FilterSuggestionType } from 'src/generated/graphql'

export interface Filter extends FilterSuggestionType {
  id: string
}

export type FilterArray = Filter[]

interface UseFiltersProps {
  onSelectFilter?: () => void
  onRemoveFilter?: () => void
}

export const useFilterActions = ({ onSelectFilter, onRemoveFilter }: UseFiltersProps = {}) => {
  const selectedFilters = useSelector((state: State) => state.shared.selectedFilters)
  const dispatch = useDispatch()

  const selectFilter = useCallback(
    (filter: Filter) => {
      if (selectedFilters.some(f => f.value === filter.value && f.key === filter.key)) {
        return
      }

      dispatch(sharedActions.setFilters({ selectedFilters: [...selectedFilters, filter] }))
      dispatch(sharedActions.setSearch({ searchValue: '' }))
      dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: false }))

      if (onSelectFilter) {
        onSelectFilter()
      }
    },
    [selectedFilters, dispatch, onSelectFilter]
  )

  const removeFilter = useCallback(
    (id: string) => {
      dispatch(
        sharedActions.setFilters({
          selectedFilters: selectedFilters.filter(f => f.id !== id),
        })
      )
      if (onRemoveFilter) {
        onRemoveFilter()
      }
    },
    [dispatch, onRemoveFilter, selectedFilters]
  )

  const clearFilters = useCallback(() => {
    dispatch(sharedActions.setFilters({ selectedFilters: [] }))
  }, [dispatch])

  return {
    selectFilter,
    clearFilters,
    removeFilter,
  }
}

export const useSelectedFilters = () => {
  const selectedFilters = useSelector((state: State) => state.shared.selectedFilters)
  return selectedFilters
}

export const useDecodedSearchFilters = () => {
  const searchParams = useSearchParams()

  const { filters } = useMemo(() => {
    return {
      filters: searchParams?.get('filters'),
    }
  }, [searchParams])
  return {
    decodedFilters: decodeFilters(filters),
  }
}

export const useEncodedSearchFilters = () => {
  const selectedFilters = useSelector((state: State) => state.shared.selectedFilters)

  return {
    encodedFilters: encodeFilters(selectedFilters),
  }
}
