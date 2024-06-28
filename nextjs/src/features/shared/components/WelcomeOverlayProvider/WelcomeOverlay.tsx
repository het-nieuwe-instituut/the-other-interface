'use client'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'

import { useState, useEffect, useCallback } from 'react'
import { WELCOME_PAGE_Z_INDEX } from '../../constants/mainConstants'
import { useLooseTypeSafeTranslation } from '../../hooks/translations'
import StorageService from '../../services/storageService'
import BlurOverlay from '../BlurOverlay/BlurOverlay'
import { StaticHeader } from '../StaticHeader/StaticHeader'
import { Button } from '@/features/ui/components/button/component'

const WelcomeOverlay = ({ className }: { className?: string }) => {
  const { t: tCommon } = useLooseTypeSafeTranslation('common')
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    const hasSeenOverlay = StorageService.getItem('hasSeenWelcomeOverlay')
    if (hasSeenOverlay === null || hasSeenOverlay === 'false') {
      setShowOverlay(true)
    }
  }, [])

  const closeOverlay = useCallback(() => {
    setShowOverlay(false)

    StorageService.setItem('hasSeenWelcomeOverlay', 'true')
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-0 z-20 h-screen w-screen px-0',

        'transition-opacity delay-1000 opacity-0',
        showOverlay ? 'opacity-100' : 'pointer-events-none',
        className
      )}
    >
      <BlurOverlay />
      <div
        className="relative mx-auto h-screen w-screen max-w-[1440px] overflow-hidden"
        style={{ zIndex: WELCOME_PAGE_Z_INDEX }}
      >
        <StaticHeader />
        <div className="relative inset-x-0 flex h-screen max-w-screen-xl flex-col justify-center px-6">
          <p
            className={
              'mb-4 font-times-large text-[32px] leading-[105%_] text-blue-100 lg:text-[64px] lg:leading-[100%_] lg:tracking-[-1.28px]'
            }
          >
            {tCommon('welcomeDescription')}
          </p>
          <p
            className={cn(
              TypographyVariants({ socialLarge: 'md', className: 'text-blue-100' }),
              'mb-4 lg:hidden'
            )}
          >
            {tCommon('welcomeWarning')}
          </p>
          <p
            className={cn(
              TypographyVariants({ socialLarge: 'lg', className: 'text-blue-100' }),
              'mb-4 hidden lg:block'
            )}
          >
            {tCommon('welcomeWarning')}
          </p>
          <Button intent={'invertedSecondary'} className="mt-4 w-[185px]" onClick={closeOverlay}>
            {tCommon('welcomeButton')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeOverlay
