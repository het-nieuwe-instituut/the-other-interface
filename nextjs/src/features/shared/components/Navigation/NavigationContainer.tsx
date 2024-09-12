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
    <>
      <div
        className={cn(
          'fixed inset-0 z-[var(--z-index)] h-screen w-screen',
          'backdrop-blur-[10px]',
          'transition-opacity duration-300',
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        style={{ '--z-index': `${NAVIGATION_OVERLAY_Z_INDEX}` } as CSSProperties}
      />

      <div
        className={cn(
          'fixed inset-0 z-[var(--z-index)] h-screen w-screen',
          'bg-blue-95',
          'transition-opacity duration-300',
          isMenuOpen ? 'opacity-95' : 'opacity-0 pointer-events-none'
        )}
        style={{ '--z-index': `${NAVIGATION_OVERLAY_Z_INDEX}` } as CSSProperties}
      />

      <div
        style={
          {
            '--z-index': `${NAVIGATION_OVERLAY_Z_INDEX}`,
          } as CSSProperties
        }
        className={cn(
          'fixed left-0 top-0  z-[calc(var(--z-index)+1)] h-screen w-screen duration-300 box-border',
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        id="navigation-scrollbar"
      >
        {children}
      </div>
    </>
  )
}
