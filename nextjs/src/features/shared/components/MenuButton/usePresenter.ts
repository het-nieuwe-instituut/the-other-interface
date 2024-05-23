import { useDispatch, useSelector } from 'react-redux'

import { State } from '../../configs/store'
import { sharedActions } from '../../stores/shared.store'
import { useState } from 'react'

export const usePresenter = () => {
  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)
  const [isHovering, setIsHovering] = useState(false)
  const dispatch = useDispatch()

  const handleOpenMenu = (flag: boolean) => {
    dispatch(sharedActions.menuOpen({ isMenuOpen: flag }))
  }

  return {
    isMenuOpen,
    handleOpenMenu,
    setIsHovering,
    isHovering,
  }
}
