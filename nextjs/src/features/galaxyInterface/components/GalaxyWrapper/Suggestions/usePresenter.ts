import { State } from '@/features/shared/configs/store'
import { sharedActions } from '@/features/shared/stores/shared.store'
import { SearchCategory } from '@/features/shared/utils/categories'

import { useDispatch, useSelector } from 'react-redux'

export const usePresenter = () => {
  const dispatch = useDispatch()

  const { isCategorySuggestionsOpen } = useSelector((state: State) => state.shared)

  return {
    isCategorySuggestionsOpen,
    setSearchCategory: (category: SearchCategory) => {
      dispatch(sharedActions.searchCategory({ searchCategory: category }))
    },
  }
}
