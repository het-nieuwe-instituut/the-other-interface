import { State } from '@/features/shared/configs/store'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useZoom2SearchResultAmount } from '@/features/shared/hooks/queries/useZoom2SearchResultAmount'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { usePageCategory } from '@/features/shared/hooks/usePageCategory'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const usePresenter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch()
  const searchParams = useSearchParams()

  const lang = searchParams?.get('lang')
  const searchBarRef = useRef<HTMLDivElement>(null)
  const { isSearchModeActive, searchCategory, isCategorySuggestionsOpen } = useSelector(
    (state: State) => state.shared
  )

  const { t } = useTypeSafeTranslation('category')
  const { pageCategory } = usePageCategory()
  const { data } = useZoom2SearchResultAmount(pageCategory)

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    dispatch(sharedActions.searchCategory({ searchCategory: pageCategory }))
    setInputValue(searchParams?.get('search') || '')

    return () => {
      dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
    }
  }, [pageCategory, searchParams, dispatch])

  useEffect(() => {
    dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
  }, [pathname, dispatch])

  const handleSearchModeOpen = () => {
    dispatch(sharedActions.searchModeActive({ isSearchModeActive: true }))
  }

  const resetSearchFilters = useCallback(() => {
    dispatch(sharedActions.searchCategory({ searchCategory: pageCategory }))
    setInputValue(searchParams?.get('search') || '')
  }, [searchParams, pageCategory, dispatch])

  const handleSearchModeClose = useCallback(() => {
    dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
    dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: false }))

    resetSearchFilters()
  }, [dispatch, resetSearchFilters])

  const handleGoClick = useCallback(() => {
    const searchParam = inputValue ? `&search=${inputValue}` : ''
    let url = `/landingpage?category=${searchCategory}${searchParam}`
    url = addLocaleToUrl(url, lang)
    router.push(url)

    handleSearchModeClose()
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
    searchResultAmount: data?.zoomLevel2Amount?.total || '0',
    inputValue,
    handleInputChange,
    searchBarRef,
  }
}
