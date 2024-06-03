import { State } from '@/features/shared/configs/store'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useSearchByCategoryQuery } from '@/features/shared/hooks/queries/useSearchByCategoryQuery'
import { useFilters } from '@/features/shared/hooks/search/useFilters'
import { useEnterKey } from '@/features/shared/hooks/ui/useEnterKey'
import { useOutsideClick } from '@/features/shared/hooks/ui/useOutsideClick'
import { useFocusOnElement } from '@/features/shared/hooks/useFocusOnElement'
import { usePageCategory } from '@/features/shared/hooks/usePageCategory'
import { usePageNumber } from '@/features/shared/hooks/usePageNumber'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const usePresenter = (isNoActiveSearch?: boolean) => {
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch()
  const filterInputRef = useRef<HTMLInputElement>(null)

  const { focus } = useFocusOnElement(filterInputRef, isNoActiveSearch ?? false)

  const { lang, search, isSearchResult } = useZoom2Params()
  const { pageNumber } = usePageNumber()

  const searchBarRef = useRef<HTMLDivElement>(null)
  const { isSearchModeActive, searchCategory, isCategorySuggestionsOpen, searchValue } =
    useSelector((state: State) => state.shared)

  const {
    selectedFilters,
    selectFilter,
    clearFilters,
    encodedFilters,
    decodedFilters,
    removeFilter,
  } = useFilters({
    onSelectFilter: focus,
    onRemoveFilter: focus,
  })

  const { pageCategory } = usePageCategory()
  const { data, isLoading, isError, fetchStatus } = useSearchByCategoryQuery({
    category: pageCategory,
    text: search,
    page: pageNumber,
    enabled: !isNoActiveSearch,
  })
  const { total } = data || { total: 0 }
  const [isUserTyping, setIsUserTyping] = useState(false)

  const resetSearchFilters = useCallback(() => {
    dispatch(sharedActions.searchCategory({ searchCategory: pageCategory }))
    dispatch(sharedActions.setSearch({ searchValue: search || '' }))
    dispatch(sharedActions.setFilters({ selectedFilters: decodedFilters || [] }))
  }, [search, pageCategory, dispatch, decodedFilters])

  const handleSearchModeClose = useCallback(
    (resetFilters = false) => {
      dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
      dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: false }))

      if (resetFilters) {
        resetSearchFilters()
      }
    },
    [dispatch, resetSearchFilters]
  )

  const handleGoClick = useCallback(() => {
    const searchParam = searchValue ? `&search=${searchValue}` : ''
    const filtersParam = encodedFilters ? `&filters=${encodedFilters}` : ''
    let url = `/landingpage?category=${searchCategory}${searchParam}${filtersParam}&searchResult=true`
    url = addLocaleToUrl(url, lang)
    router.push(url)

    setIsUserTyping(false)
    handleSearchModeClose(false)
  }, [searchValue, encodedFilters, searchCategory, lang, router, handleSearchModeClose])

  useEnterKey(handleGoClick)
  useOutsideClick(searchBarRef, () => {
    handleSearchModeClose(true)
  })

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value

      dispatch(sharedActions.setSearch({ searchValue: newValue }))
      setIsUserTyping(true)
      dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: false }))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
  }, [pathname, dispatch])

  const handleSearchModeOpen = useCallback(() => {
    dispatch(sharedActions.searchModeActive({ isSearchModeActive: true }))
    filterInputRef.current?.focus()
  }, [dispatch])

  useEffect(() => {
    if (isNoActiveSearch && !isSearchResult) {
      handleSearchModeOpen()
    }
  }, [isNoActiveSearch, handleSearchModeOpen, isSearchResult])

  const handleClearAll = useCallback(() => {
    resetSearchFilters()
    clearFilters()
    dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: false }))
    focus()
  }, [clearFilters, dispatch, resetSearchFilters, focus])

  return {
    category: searchCategory,
    handleSearchModeOpen,
    handleSearchModeClose,
    isSearchModeActive,
    isCategorySuggestionsOpen,
    setIsCategorySuggestionsOpen: (isCategorySuggestionsOpen: boolean) => {
      dispatch(
        sharedActions.categorySuggestionsOpen({
          categorySuggestionsOpen: isCategorySuggestionsOpen,
        })
      )
    },
    handleGoClick,
    searchResultAmount: total,
    inputValue: searchValue,
    handleInputChange,
    searchBarRef,
    filterInputRef,
    handleClearAll,
    isUserTyping: !!searchValue && isUserTyping && isSearchModeActive,
    selectedFilters,
    handleSelectFilter: selectFilter,
    removeFilter,
    isSearchError: isError,
    // see https://github.com/TanStack/query/issues/3584
    isSearchLoading: isLoading && fetchStatus !== 'idle',
  }
}
