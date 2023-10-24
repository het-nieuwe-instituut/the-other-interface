'use client'
import { useEffect, useMemo, useRef } from 'react'

import useTranslation from 'next-translate/useTranslation'
import { State } from '../../configs/store'
import { useSelector } from 'react-redux'
import { useBreakpoint } from '../../configs/chakra'
import { USER_LOOKS_ON } from '../../constants/mainConstants'

export const usePresenter = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isMenuOpen = useSelector((state: State) => state?.shared?.isMenuOpen)
  const userLooksOn = useSelector((state: State) => state.shared.userLooksOn)
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

  const navTextStyle = useMemo(() => {
    if (userLooksOn === USER_LOOKS_ON.EDITORIAL) {
      return 'impactNew.xl'
    }
    if (userLooksOn === USER_LOOKS_ON.GALAXY) {
      return 'headingTimesLarge.2xl'
    }
  }, [userLooksOn])

  return {
    tNavigation,
    lang,
    isMenuOpen,
    ref,
    isMobile,
    breakpoint,
    userLooksOn,
    navTextStyle,
  }
}
