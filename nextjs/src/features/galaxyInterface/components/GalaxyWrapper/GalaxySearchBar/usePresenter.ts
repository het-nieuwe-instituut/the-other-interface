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

export const usePresenter = (isCollapsable?: boolean) => {
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch()

  const { lang, search } = useZoom2Params()

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
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
    if (isCollapsable) {
      handleSearchModeOpen()
    }
  }, [isCollapsable, handleSearchModeOpen])

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
    let url = `/landingpage?category=${searchCategory}${searchParam}`
    url = addLocaleToUrl(url, lang)
    router.push(url)

    handleSearchModeClose(false)
  }, [inputValue, searchCategory, router, handleSearchModeClose, lang])

  useEffect(() => {
    const handleEnterPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleGoClick()
      }
    }

    document.addEventListener('keydown', handleEnterPress)

    return () => {
      document.removeEventListener('keydown', handleEnterPress)
    }
  }, [handleGoClick])

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
  }
}
