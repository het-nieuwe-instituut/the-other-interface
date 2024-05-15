import { useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { decodeFilters, encodeFilters } from '@/features/shared/helpers/searchHelpers'
import { useZoom2Params } from '../useZoom2Params'

// TODO: Remove when we connect real query
export interface Filter {
  field: string
  value: string
  id: string
}

export type FilterArray = Filter[]

export const useFilters = () => {
  const { filters } = useZoom2Params()
  const [selectedFilters, setSelectedFilters] = useState<FilterArray>([])
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof filters === 'string') {
      const decodedFilters: FilterArray = decodeFilters(filters)
      setSelectedFilters(decodedFilters)
    }
  }, [filters])

  const selectFilter = useCallback(
    (filter: Filter) => {
      setSelectedFilters([...selectedFilters, filter])
      dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: false }))
    },
    [selectedFilters, dispatch]
  )

  const clearFilters = useCallback(() => {
    setSelectedFilters([])
  }, [])

  return {
    selectedFilters,
    selectFilter,
    clearFilters,
    encodedFilters: encodeFilters(selectedFilters),
  }
}
