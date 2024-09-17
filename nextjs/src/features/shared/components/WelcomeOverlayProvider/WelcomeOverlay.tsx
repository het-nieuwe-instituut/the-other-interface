'use client'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'

import { Button } from '@/features/ui/components/button/component'
import React, { CSSProperties, useCallback, useEffect, useRef, useState } from 'react'
import { WELCOME_PAGE_Z_INDEX } from '../../constants/mainConstants'
import { useLooseTypeSafeTranslation } from '../../hooks/translations'
import { useLocale } from '../../hooks/useLocale'
import StorageService from '../../services/storageService'

const WelcomeOverlay = React.memo(({ className }: { className?: string }) => {
  const { t: tCommon, lang } = useLooseTypeSafeTranslation('common')
  const hasOpened = useRef(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const locale = useLocale()
  const [, forceUpdate] = useState(0)

  useEffect(() => {
    const hasSeenOverlay = StorageService.getItem('hasSeenWelcomeOverlay')
    if (hasSeenOverlay === null || hasSeenOverlay === 'false') {
      document.body.style.overflow = 'hidden'
      setShowOverlay(true)
    }
  }, [])

  const closeOverlay = useCallback(() => {
    setShowOverlay(false)

    StorageService.setItem('hasSeenWelcomeOverlay', 'true')
  }, [])

  // disable scroll when overlay is open
  useEffect(() => {
    if (showOverlay) {
      hasOpened.current = true
      document.body.style.overflow = 'hidden'
    } else if (hasOpened.current) {
      document.body.style.overflow = 'auto'
    }
  }, [showOverlay])

  // force re-render the component when the locales don't match
  useEffect(() => {
    if (locale !== lang) {
      forceUpdate(prev => prev + 1)
    }
  }, [locale, lang])

  return (
    <div
      style={{ '--z-index': `${WELCOME_PAGE_Z_INDEX}` } as CSSProperties}
      className={cn(
        'fixed inset-0 z-[var(--z-index)]  h-screen w-screen px-0 backdrop-blur-[30px] bg-pink-50',
        'transition-all duration-1000 opacity-0',
        showOverlay ? 'opacity-100' : 'pointer-events-none',
        className
      )}
    >
      <div
        className="relative mx-auto h-screen w-screen max-w-[1440px] overflow-hidden delay-100"
        style={{
          willChange: 'backdrop-filter',
          transform: 'translateZ(0)', // Ensure GPU acceleration
        }}
      >
        <div
          key={`${locale}-${lang}`} // needed to force re-render the component when locale changes
          className="relative inset-x-0 flex h-screen max-w-screen-xl flex-col justify-center px-5 md:px-6"
        >
          <p
            className={
              'mb-4 font-times-dot text-[32px] leading-[105%_] text-blue-100 lg:text-[64px] lg:leading-[100%_] lg:tracking-[-1.28px]'
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
          <Button
            intent={'invertedSecondary'}
            className="mt-8 w-[185px] font-times-dot"
            onClick={closeOverlay}
            tabIndex={0}
          >
            {tCommon('welcomeButton')}
          </Button>
        </div>
      </div>
    </div>
  )
})
WelcomeOverlay.displayName = 'WelcomeOverlay'

export default WelcomeOverlay
