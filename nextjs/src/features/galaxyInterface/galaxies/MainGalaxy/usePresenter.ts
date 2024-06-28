import { State } from '@/features/shared/configs/store'

import { useArrowNavigation } from '@/features/ui/hooks/useArrowNavigation'
import { useSearchParamPagination } from '@/features/ui/hooks/useSearchParamPagination'
import { useSelector } from 'react-redux'

export const usePresenter = (totalPages: number) => {
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)
  const { increasePageNumber, decreasePageNumber } = useSearchParamPagination(totalPages, false)

  useArrowNavigation({
    onLeft: decreasePageNumber,
    onRight: increasePageNumber,
    disabled: isSearchModeActive,
  })

  return {
    increasePageNumber,
    decreasePageNumber,
    isSearchModeActive,
  }
}
