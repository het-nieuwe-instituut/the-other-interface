'use client'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { sharedActions } from '../../stores/shared.store'
import { useZoom2Params } from '../../hooks/useZoom2Params'
import { decodeFilters } from '../../helpers/searchHelpers'
import { FilterArray } from '../../hooks/search/useFilters'
import { usePageCategory } from '../../hooks/usePageCategory'

export const ReduxSearchSync = () => {
  const { filters, search } = useZoom2Params()
  const { pageCategory } = usePageCategory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(sharedActions.setSearch({ searchValue: search || '' }))
  }, [dispatch, search])

  useEffect(() => {
    if (typeof filters === 'string') {
      const decodedFilters: FilterArray = decodeFilters(filters)
      dispatch(sharedActions.setFilters({ selectedFilters: decodedFilters }))
    }
  }, [dispatch, filters])

  useEffect(() => {
    dispatch(sharedActions.searchCategory({ searchCategory: pageCategory }))

    return () => {
      dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
    }
  }, [pageCategory, search, dispatch])

  return null
}
