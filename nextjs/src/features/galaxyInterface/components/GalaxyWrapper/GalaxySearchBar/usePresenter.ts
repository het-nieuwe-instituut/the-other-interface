import { State } from '@/features/shared/configs/store'
import { getCurrentZoomNumber } from '@/features/shared/helpers/getCurrentZoomNumber'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { usePageCategory } from '@/features/shared/hooks/usePageCategory'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const usePresenter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch()
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)
  const searchCategory = useSelector((state: State) => state.shared.searchCategory)
  const isCategorySuggestionsOpen = useSelector(
    (state: State) => state.shared.isCategorySuggestionsOpen
  )
  const { t } = useTypeSafeTranslation('category')

  const { pageCategory } = usePageCategory()

  useEffect(() => {
    dispatch(sharedActions.searchCategory({ searchCategory: pageCategory }))

    return () => {
      dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
    }
  }, [pageCategory, dispatch])

  useEffect(() => {
    dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
  }, [pathname, dispatch])

  const handleSearchModeOpen = () => {
    dispatch(sharedActions.searchModeActive({ isSearchModeActive: true }))
  }

  const handleSearchModeClose = () => {
    dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
    dispatch(sharedActions.categorySuggestionsOpen({ categorySuggestionsOpen: false }))
  }

  const currentZoomNumber = getCurrentZoomNumber(pathname)

  const handleGoClick = () => {
    router.push(`/landingpage?category=${searchCategory}`)
  }

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
    currentZoomNumber,
    handleGoClick,
  }
}
