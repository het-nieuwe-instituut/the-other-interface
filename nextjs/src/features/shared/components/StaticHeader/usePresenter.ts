import { useSelector } from 'react-redux'
import { State } from '../../configs/store'
import { useLooseTypeSafeTranslation } from '../../hooks/translations'
import { useTheme } from '@emotion/react'
import { useLocale } from '../../hooks/useLocale'

export const usePresenter = () => {
  const { t: tNavigation } = useLooseTypeSafeTranslation('navigation')
  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)
  const userLooksOn = useSelector((state: State) => state.shared.userLooksOn)
  const lang = useLocale()
  const theme = useTheme()

  return {
    tNavigation,
    isMenuOpen,
    userLooksOn,
    lang,
    theme,
  }
}
