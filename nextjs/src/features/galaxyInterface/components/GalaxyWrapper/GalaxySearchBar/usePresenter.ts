import { State } from '@/features/shared/configs/store'
import { useZoom2SearchResult } from '@/features/shared/hooks/queries/useZoom2SearchResult'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { usePageCategory } from '@/features/shared/hooks/usePageCategory'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const usePresenter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch()
  const searchParams = useSearchParams()
  const { isSearchModeActive, searchCategory, isCategorySuggestionsOpen } = useSelector(
    (state: State) => state.shared
  )

  const { t } = useTypeSafeTranslation('category')
  const { pageCategory } = usePageCategory()
  const { data } = useZoom2SearchResult(pageCategory)

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

  const resetSearchFilters = () => {
    dispatch(sharedActions.searchCategory({ searchCategory: pageCategory }))
    setInputValue(searchParams?.get('search') || '')
  }

  const handleSearchModeClose = () => {
    dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
    dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: false }))

    resetSearchFilters()
  }

  const handleGoClick = useCallback(() => {
    const searchParam = inputValue ? `&search=${inputValue}` : ''
    router.push(`/landingpage?category=${searchCategory}${searchParam}`)

    handleSearchModeClose()
  }, [inputValue, searchCategory, router])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleGoClick()
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleGoClick])

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
    searchResultAmount: data?.zoomLevel2?.total || '0',
    inputValue,
    handleInputChange,
  }
}
