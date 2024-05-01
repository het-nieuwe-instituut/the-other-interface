import { State } from '@/features/shared/configs/store'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { SearchCategory } from '@/features/shared/utils/categories'

import { useDispatch, useSelector } from 'react-redux'

export const usePresenter = () => {
  const dispatch = useDispatch()

  const { isCategorySuggestionsOpen } = useSelector((state: State) => state.shared)

  const { t } = useTypeSafeTranslation('category')

  return {
    t,
    isCategorySuggestionsOpen,
    setSearchCategory: (category: SearchCategory) => {
      dispatch(sharedActions.searchCategory({ searchCategory: category }))
    },
  }
}
