import { State } from '@/features/shared/configs/store'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useSearch } from '@/features/shared/hooks/queries/useSearch'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { usePageCategory } from '@/features/shared/hooks/usePageCategory'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEnterKey } from '@/features/shared/hooks/ui/useEnterKey'
import { useOutsideClick } from '@/features/shared/hooks/ui/useOutsideClick'
import { useFilters } from '@/features/shared/hooks/search/useFilters'

export const usePresenter = (isNoActiveSearch?: boolean) => {
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch()

  const { lang, search, isSearchResult } = useZoom2Params()

  const filterInputRef = useRef<HTMLInputElement>(null)
  const searchBarRef = useRef<HTMLDivElement>(null)
  const { isSearchModeActive, searchCategory, isCategorySuggestionsOpen } = useSelector(
    (state: State) => state.shared
  )

  const handleInputFocus = () => {
    filterInputRef.current?.focus()
  }

  const { selectedFilters, selectFilter, clearFilters, encodedFilters, removeFilter } = useFilters({
    onSelectFilter: handleInputFocus,
    onRemoveFilter: handleInputFocus,
  })

  const { t } = useTypeSafeTranslation('category')
  const { pageCategory } = usePageCategory()
  const { data } = useSearch({ category: pageCategory, text: search })
  const { total } = data || { total: 0 }

  const [inputValue, setInputValue] = useState('')
  const [isUserTyping, setIsUserTyping] = useState(false)

  const resetSearchFilters = useCallback(() => {
    dispatch(sharedActions.searchCategory({ searchCategory: pageCategory }))
    setInputValue(search || '')
  }, [search, pageCategory, dispatch])

  const handleSearchModeClose = useCallback(
    (resetFilters = true) => {
      dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
      dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: false }))

      if (resetFilters) {
        resetSearchFilters()
      }
    },
    [dispatch, resetSearchFilters]
  )

  const handleGoClick = useCallback(() => {
    const searchParam = inputValue ? `&search=${inputValue}` : ''
    const filtersParam = encodedFilters ? `&filters=${encodedFilters}` : ''
    let url = `/landingpage?category=${searchCategory}${searchParam}${filtersParam}&searchResult=true`
    url = addLocaleToUrl(url, lang)
    router.push(url)

    setIsUserTyping(false)
    handleSearchModeClose(false)
  }, [inputValue, searchCategory, router, handleSearchModeClose, lang, selectedFilters])

  useEnterKey(handleGoClick)
  useOutsideClick(searchBarRef, handleSearchModeClose)

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setInputValue(newValue)
      setIsUserTyping(true)
      dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: false }))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(sharedActions.searchCategory({ searchCategory: pageCategory }))
    setInputValue(search || '')

    return () => {
      dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
    }
  }, [pageCategory, search, dispatch])

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
    filterInputRef.current?.focus()
  }, [dispatch, pageCategory])

  return {
    category: searchCategory,
    handleSearchModeOpen,
    handleSearchModeClose,
    isSearchModeActive,
    t,
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
    inputValue,
    handleInputChange,
    searchBarRef,
    filterInputRef,
    handleClearAll,
    isUserTyping: !!inputValue && isUserTyping && isSearchModeActive,
    selectedFilters,
    handleSelectFilter: selectFilter,
    removeFilter,
  }
}
