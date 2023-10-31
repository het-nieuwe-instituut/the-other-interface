import { useSelector } from 'react-redux'
import { State } from '../../configs/store'
import { useLooseTypeSafeTranslation } from '../../hooks/translations'

export const usePresenter = () => {
  const { t: tNavigation } = useLooseTypeSafeTranslation('navigation')
  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)
  const userLooksOn = useSelector((state: State) => state.shared.userLooksOn)

  return {
    tNavigation,
    isMenuOpen,
    userLooksOn,
  }
}
