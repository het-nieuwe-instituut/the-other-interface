import { State } from '@/features/shared/configs/store'
import { useSelector } from 'react-redux'

export const usePresenter = () => {
  const isSearchModeActive = useSelector((state: State) => state.shared.isSearchModeActive)

  return {
    isSearchModeActive,
  }
}
