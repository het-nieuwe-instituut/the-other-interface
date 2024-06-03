'use client'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { sharedActions } from '../../stores/shared.store'
import { useZoom2Params } from '../../hooks/useZoom2Params'
import { decodeFilters } from '../../helpers/searchHelpers'
import { FilterArray } from '../../hooks/search/useFilters'
import { usePageCategory } from '../../hooks/usePageCategory'

export const useReduxSearchSync = () => {
  const { filters, search } = useZoom2Params()
  const { pageCategory } = usePageCategory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(sharedActions.setSearch({ searchValue: search || '' }))

    if (typeof filters === 'string') {
      const decodedFilters: FilterArray = decodeFilters(filters)
      dispatch(sharedActions.setFilters({ selectedFilters: decodedFilters }))
    }

    dispatch(sharedActions.searchCategory({ searchCategory: pageCategory }))

    return () => {
      dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
      dispatch(sharedActions.setFilters({ selectedFilters: [] }))
      dispatch(sharedActions.setSearch({ searchValue: '' }))
    }
  }, [dispatch, search, filters, pageCategory])
}
