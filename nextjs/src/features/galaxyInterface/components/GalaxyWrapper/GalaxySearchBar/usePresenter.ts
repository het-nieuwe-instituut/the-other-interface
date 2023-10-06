import { State } from '@/features/shared/configs/store'
import { getCurrentZoomNumber } from '@/features/shared/helpers/getCurrentZoomNumber'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const usePresenter = () => {
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()
  const dispatch = useDispatch()
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)
  const { t } = useTypeSafeTranslation('category')
  // TODO: move to use selector
  const [isSuggestsOpen, setIsSuggestsOpen] = useState(false)

  // TODO: refactor this, probably put category on zoom 3 to search param ?
  const getCurrentCategory = () => {
    const currentZoomNumber = getCurrentZoomNumber(pathname)

    if (currentZoomNumber === 2) {
      return searchParams?.get('category') as Category
    }

    if (currentZoomNumber === 3) {
      return params?.category as Category
    }
  }

  useEffect(() => {
    ;() => {
      dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
    }
  })

  useEffect(() => {
    dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
  }, [pathname, dispatch])

  const handleSearchModeOpen = () => {
    dispatch(sharedActions.searchModeActive({ isSearchModeActive: true }))
  }

  const handleSearchModeClose = () => {
    dispatch(sharedActions.searchModeActive({ isSearchModeActive: false }))
  }

  const category = getCurrentCategory()
  const currentZoomNumber = getCurrentZoomNumber(pathname)

  return {
    category,
    showInitialCategory: category !== CATEGORIES.stories,
    handleSearchModeOpen,
    handleSearchModeClose,
    isSearchModeActive,
    t,
    isSuggestsOpen,
    setIsSuggestsOpen,
    currentZoomNumber,
  }
}
