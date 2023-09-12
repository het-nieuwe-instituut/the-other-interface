'use client'
import { useEffect, useRef } from 'react'

import useTranslation from 'next-translate/useTranslation'
import { State } from '../../configs/store'
import { useSelector } from 'react-redux'
import { useBreakpoint } from '../../configs/chakra'

export const usePresenter = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isMenuOpen = useSelector((state: State) => state?.shared?.isMenuOpen)
  const breakpoint = useBreakpoint()
  const { t: tNavigation, lang } = useTranslation('navigation')
  const isMobile = breakpoint === 'sm'

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
    tNavigation,
    lang,
    isMenuOpen,
    ref,
    isMobile,
    breakpoint,
  }
}
