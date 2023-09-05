import { useEffect } from 'react'

import useTranslation from 'next-translate/useTranslation'
import { State } from '../../configs/store'
import { useSelector } from 'react-redux'
import { useMenuPages } from '../../hooks/queries/useMenuPages'

export const usePresenter = () => {
  const { t: tNavigation, lang } = useTranslation('navigation')
  const isMenuOpen = useSelector((state: State) => state?.shared?.isMenuOpen)

  const { data } = useMenuPages()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isMenuOpen])

  return {
    menupages: data?.menupages,
    tNavigation,
    lang,
    isMenuOpen,
  }
}
