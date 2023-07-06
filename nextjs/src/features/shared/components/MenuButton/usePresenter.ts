import { useDispatch, useSelector } from 'react-redux'

import { State } from '../../configs/store'
import { sharedActions } from '../../stores/shared.store'

export const usePresenter = () => {
  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)
  const dispatch = useDispatch()

  const handleOpenMenu = (flag: boolean) => {
    dispatch(sharedActions.menuOpen({ isMenuOpen: flag }))
  }

  return {
    isMenuOpen,
    handleOpenMenu,
  }
}
