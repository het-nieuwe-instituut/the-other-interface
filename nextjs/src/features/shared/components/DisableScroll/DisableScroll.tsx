'use client'
import { useBreakpoint } from '../../configs/chakra'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { State } from '../../configs/store'

interface Props {
  children: JSX.Element | null
}

const DisableScroll = (props: Props) => {
  const breakpoint = useBreakpoint()
  const isMobile = breakpoint === 'sm'
  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)

  useEffect(() => {
    if (isMobile || isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isMenuOpen, isMobile])

  return props.children
}

export default DisableScroll
