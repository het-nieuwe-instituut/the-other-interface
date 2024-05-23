import { useSelector } from 'react-redux'
import { State } from '../../configs/store'
import { useLooseTypeSafeTranslation } from '../../hooks/translations'
import { useSearchParams } from 'next/navigation'
import { useTheme } from '@emotion/react'

export const usePresenter = () => {
  const { t: tNavigation } = useLooseTypeSafeTranslation('navigation')
  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)
  const userLooksOn = useSelector((state: State) => state.shared.userLooksOn)
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')
  const theme = useTheme()

  return {
    tNavigation,
    isMenuOpen,
    userLooksOn,
    lang,
    theme,
  }
}
