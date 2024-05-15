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
import { Filter, FilterArray } from '../Suggestions/Suggestions'
import { decodeFilters, encodeFilters } from './searchHelpers'
import { useEnterKey } from '@/features/shared/hooks/ui/useEnterKey'

export const usePresenter = (isNoActiveSearch?: boolean) => {
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch()

  const { lang, search, isSearchResult, filters } = useZoom2Params()

  const filterInputRef = useRef<HTMLInputElement>(null)
  const searchBarRef = useRef<HTMLDivElement>(null)
  const { isSearchModeActive, searchCategory, isCategorySuggestionsOpen } = useSelector(
    (state: State) => state.shared
  )

  const { t } = useTypeSafeTranslation('category')
  const { pageCategory } = usePageCategory()
  const { data } = useSearch({ category: pageCategory, text: search })
  const { total } = data || { total: 0 }

  const [inputValue, setInputValue] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<FilterArray>([])

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
    const encodedFilters = encodeFilters(selectedFilters)
    const searchParam = inputValue ? `&search=${inputValue}` : ''
    const filtersParam = encodedFilters ? `&filters=${encodedFilters}` : ''
    let url = `/landingpage?category=${searchCategory}${searchParam}${filtersParam}&searchResult=true`
    url = addLocaleToUrl(url, lang)
    router.push(url)

    handleSearchModeClose(false)
  }, [inputValue, searchCategory, router, handleSearchModeClose, lang, selectedFilters])

  useEnterKey(handleGoClick)

  useEffect(() => {
    if (typeof filters === 'string') {
      const decodedFilters: FilterArray = decodeFilters(filters)
      setSelectedFilters(decodedFilters)
    }
  }, [filters])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      setInputValue(newValue)
      dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: newValue !== '' }))
    },
    [dispatch]
  )

  const handleSelectFilter = useCallback(
    (filter: Filter) => {
      setSelectedFilters([...selectedFilters, filter])
      dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: false }))
    },
    [selectedFilters, dispatch]
  )

  const clearAllFilters = () => {
    setSelectedFilters([])
  }

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
    setInputValue('')
    clearAllFilters()
    dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: false }))
    filterInputRef.current?.focus()
  }, [dispatch, pageCategory])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        handleSearchModeClose()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [handleSearchModeClose])

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
    isUserTyping: !!inputValue,
    selectedFilters,
    handleSelectFilter,
  }
}
