'use client'
import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'

import { WELCOME_PAGE_Z_INDEX } from '../../constants/mainConstants'
import { StaticHeader } from '../StaticHeader/StaticHeader'
import { useState, useEffect } from 'react'
import StorageService from '../../services/storageService'
import BlurOverlay from '../BlurOverlay/BlurOverlay'
import useDisableScroll from '../../hooks/ui/useDisableScroll'
import { Button } from '@/features/ui/components/button/component'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'

interface Props {
  children: React.ReactNode
}

const WelcomeOverlayProvider: React.FC<Props> = ({ children }) => {
  const [showOverlay, setShowOverlay] = useState(false)
  useDisableScroll(showOverlay)

  useEffect(() => {
    const hasSeenOverlay = StorageService.getItem('hasSeenWelcomeOverlay')
    if (hasSeenOverlay === null || hasSeenOverlay === 'false') {
      setShowOverlay(true)
    }
  }, [])

  const closeOverlay = () => {
    StorageService.setItem('hasSeenWelcomeOverlay', 'true')
    setShowOverlay(false)
  }

  return (
    <div className="relative size-full overflow-hidden">
      {showOverlay && <WelcomeOverlay onClose={closeOverlay} />}
      {children}
    </div>
  )
}

const WelcomeOverlay = ({ onClose }: { onClose: () => void }) => {
  const { t: tCommon } = useLooseTypeSafeTranslation('common')

  return (
    <div className="fixed inset-0 z-20 h-screen w-screen px-0">
      <BlurOverlay />
      <div
        className="relative mx-auto h-screen w-screen max-w-[1440px] overflow-hidden"
        style={{ zIndex: WELCOME_PAGE_Z_INDEX }}
      >
        <StaticHeader />
        <div className="relative inset-x-0 flex h-screen max-w-screen-xl flex-col justify-center px-6">
          <p
            className={cn(TypographyVariants({ times: 'xl', className: 'text-blue-100' }), 'mb-4')}
          >
            {tCommon('welcomeDescription')}
          </p>
          <Button intent={'invertedSecondary'} className="w-[185px]" onClick={onClose}>
            {tCommon('welcomeButton')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeOverlayProvider
