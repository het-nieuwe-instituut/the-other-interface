import { decodeFilters, encodeFilters } from '@/features/shared/helpers/searchHelpers'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../configs/store'
import { useZoom2Params } from '../useZoom2Params'

// TODO: Remove when we connect real query
export interface Filter {
  field: string
  value: string
  id: string
}

export type FilterArray = Filter[]

interface UseFiltersProps {
  onSelectFilter?: () => void
  onRemoveFilter?: () => void
}

export const useFilters = ({ onSelectFilter, onRemoveFilter }: UseFiltersProps = {}) => {
  const { filters } = useZoom2Params()
  const selectedFilters = useSelector((state: State) => state.shared.selectedFilters)
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof filters === 'string') {
      const decodedFilters: FilterArray = decodeFilters(filters)
      dispatch(sharedActions.setFilters({ selectedFilters: decodedFilters }))
    }
  }, [dispatch, filters])

  const selectFilter = useCallback(
    (filter: Filter) => {
      if (selectedFilters.some(f => f.id === filter.id)) {
        return
      }

      dispatch(sharedActions.setFilters({ selectedFilters: [...selectedFilters, filter] }))
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
        sharedActions.setFilters({ selectedFilters: selectedFilters.filter(f => f.id !== id) })
      )
      if (onRemoveFilter) {
        onRemoveFilter()
      }
    },
    [dispatch, onRemoveFilter, selectedFilters]
  )

  const clearFilters = useCallback(() => {
    sharedActions.setFilters({ selectedFilters: [] })
  }, [])

  return {
    selectedFilters,
    selectFilter,
    clearFilters,
    encodedFilters: encodeFilters(selectedFilters),
    removeFilter,
  }
}
