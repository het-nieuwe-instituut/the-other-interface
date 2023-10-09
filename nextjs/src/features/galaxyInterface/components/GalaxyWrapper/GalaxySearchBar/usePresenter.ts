import { State } from '@/features/shared/configs/store'
import { getCurrentZoomNumber } from '@/features/shared/helpers/getCurrentZoomNumber'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const usePresenter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()
  const dispatch = useDispatch()
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)
  const searchCategory = useSelector((state: State) => state.shared.searchCategory)
  const isCategorySuggestionsOpen = useSelector(
    (state: State) => state.shared.isCategorySuggestionsOpen
  )
  const { t } = useTypeSafeTranslation('category')

  const initialCategory = useMemo(() => {
    const currentZoomNumber = getCurrentZoomNumber(pathname)
    let category: Category | null = null

    if (currentZoomNumber === 2) {
      category = searchParams?.get('category') as Category
    }

    if (currentZoomNumber === 3) {
      category = params?.category as Category
    }

    if (category === CATEGORIES.stories) {
      category = null
    }

    return category
  }, [pathname, params, searchParams])

  useEffect(() => {
    dispatch(sharedActions.searchCategory({ searchCategory: initialCategory }))

    return () => {
      dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
    }
  }, [initialCategory, dispatch])

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
