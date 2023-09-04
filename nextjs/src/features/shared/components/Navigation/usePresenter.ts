import { useEffect } from 'react'

import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import useTranslation from 'next-translate/useTranslation'
import { State } from '../../configs/store'
import { useSelector } from 'react-redux'

export const usePresenter = () => {
  const api = initApiClientService()
  const { t: tNavigation, lang } = useTranslation('navigation')
  const isMenuOpen = useSelector((state: State) => state?.shared?.isMenuOpen)

  const result = useQuery({
    queryKey: ['stream-hydrate-menu-pages'],
    queryFn: () => api?.menuPages({ locale: lang }),
  })

  console.log(result)

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
    menupages: result?.data ?? { menupages: { data: [] } },
    tNavigation,
    lang,
    isMenuOpen,
  }
}
