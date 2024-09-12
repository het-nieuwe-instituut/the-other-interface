'use client'
import { cn } from '@/features/ui/utils/cn'
import { CSSProperties, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../configs/store'
import { NAVIGATION_OVERLAY_Z_INDEX } from '../../constants/mainConstants'
import useDisableScroll from '../../hooks/ui/useDisableScroll'

export const NavigationContainer = ({ children }: { children: React.ReactNode }) => {
  const isMenuOpen = useSelector((state: State) => state?.shared?.isMenuOpen)

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

  useDisableScroll(isMenuOpen)

  return (
    <div
      style={
        {
          '--z-index': `${NAVIGATION_OVERLAY_Z_INDEX}`,
        } as CSSProperties
      }
      id="navigation-scrollbar"
      className={cn(
        'fixed left-0 top-0 z-[var(--z-index)] h-screen w-full bg-blue-95',
        isMenuOpen
          ? 'visible transition-opacity ease-out duration-300 opacity-95'
          : 'invisible transition-opacity ease-in duration-300 opacity-0'
      )}
    >
      {children}
    </div>
  )
}
