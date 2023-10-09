import { State } from '@/features/shared/configs/store'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { CloudCategory } from '@/features/shared/utils/categories'

import { useDispatch, useSelector } from 'react-redux'

export const usePresenter = () => {
  const dispatch = useDispatch()

  const searchCategory = useSelector((state: State) => state.shared.searchCategory)

  const { t } = useTypeSafeTranslation('category')

  return {
    t,
    searchCategory,
    setSearchCategory: (category: CloudCategory) => {
      dispatch(sharedActions.searchCategory({ searchCategory: category }))
    },
  }
}
