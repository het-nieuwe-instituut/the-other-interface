import { State } from '@/features/shared/configs/store'
import { usePagination } from '@/features/shared/hooks/usePagination'
import { useSelector } from 'react-redux'

export const usePresenter = (totalPages: number) => {
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)
  const { increasePageNumber, decreasePageNumber } = usePagination(
    totalPages,
    false,
    isSearchModeActive
  )

  return {
    increasePageNumber,
    decreasePageNumber,
    isSearchModeActive,
  }
}
