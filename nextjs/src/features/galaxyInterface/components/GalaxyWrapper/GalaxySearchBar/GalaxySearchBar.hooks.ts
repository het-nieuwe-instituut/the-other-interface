import {
  useDecodedSearchFilters,
  useFilterActions,
} from '@/features/shared/hooks/search/useFilters'
import { useFocusOnElement } from '@/features/shared/hooks/useFocusOnElement'
import { usePageCategory } from '@/features/shared/hooks/usePageCategory'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useDispatch } from 'react-redux'

export function useSyncSearchInputToStore() {
  const dispatch = useDispatch()

  const syncInput = useCallback(
    (value: string) => {
      dispatch(sharedActions.setSearch({ searchValue: value }))
      dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: false }))
    },
    [dispatch]
  )

  return { syncInput }
}

export function useCloseSearchOnPathnameChange() {
  const dispatch = useDispatch()
  const pathname = usePathname()
  const prevPath = useRef(pathname)

  useEffect(() => {
    if (pathname !== prevPath.current) {
      prevPath.current = pathname
      dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
    }
  }, [pathname, dispatch])
}

export function useOpenSearchModeOnInactiveSearch(
  filterRef: React.RefObject<HTMLInputElement>,
  isSearchInactive?: boolean
) {
  const dispatch = useDispatch()
  const { isSearchResult } = useZoom2Params()

  const openSearch = useCallback(() => {
    dispatch(sharedActions.searchModeActive({ isSearchModeActive: true }))
    filterRef.current?.focus()
  }, [dispatch, filterRef])

  useEffect(() => {
    if (isSearchInactive && !isSearchResult) {
      openSearch()
    }
  }, [isSearchInactive, isSearchResult, openSearch])

  return {
    openSearch,
  }
}

export const useSearchValue = () => {
  const searchParams = useSearchParams()
  const { search } = useMemo(() => {
    return {
      search: searchParams?.get('search'),
    }
  }, [searchParams])

  return search
}

export function useSearchBarActions({
  filterInputRef,
  isNoActiveSearch,
}: {
  filterInputRef: React.RefObject<HTMLInputElement>
  isNoActiveSearch?: boolean
}) {
  const dispatch = useDispatch()
  const { focus } = useFocusOnElement(filterInputRef, !isNoActiveSearch)
  const search = useSearchValue()
  const { pageCategory } = usePageCategory()
  const { openSearch } = useOpenSearchModeOnInactiveSearch(filterInputRef, isNoActiveSearch)
  const { decodedFilters } = useDecodedSearchFilters()
  const { clearFilters } = useFilterActions({
    onSelectFilter: focus,
    onRemoveFilter: focus,
  })

  const resetSearchFilters = useCallback(() => {
    dispatch(sharedActions.searchCategory({ searchCategory: pageCategory }))
    dispatch(sharedActions.setSearch({ searchValue: search || '' }))
    dispatch(sharedActions.setFilters({ selectedFilters: decodedFilters || [] }))
  }, [search, pageCategory, dispatch, decodedFilters])

  const closeSearchMode = useCallback(
    (resetFilters = false) => {
      dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
      dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: false }))

      if (resetFilters) {
        resetSearchFilters()
      }
    },
    [dispatch, resetSearchFilters]
  )

  const clearAllSearch = useCallback(() => {
    clearFilters()
    dispatch(sharedActions.searchCategory({ searchCategory: pageCategory }))
    dispatch(sharedActions.setSearch({ searchValue: '' }))
    dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: false }))
    focus()
  }, [clearFilters, dispatch, focus, pageCategory])

  return {
    closeSearchMode,
    clearAllSearch,
    openSearch,
    focus,
  }
}
