'use client'
import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, useBreakpoint } from '../../configs/chakra'

import { MOBILE_OVERLAY_Z_INDEX } from '../../constants/mainConstants'
import { StaticHeader } from '../StaticHeader/StaticHeader'
import { CSSProperties } from 'react'

interface Props {
  children: React.ReactNode
}

const MobileOverlayProvider = (props: Props) => {
  const breakpoint = useBreakpoint()
  const isMobile = breakpoint === 'sm'

  return (
    <Box overflow={'hidden'}>
      {isMobile && <MobileOverlay />}
      {props.children}
    </Box>
  )
}

const MobileOverlay = () => {
  const { t: tCommon } = useLooseTypeSafeTranslation('common')

  return (
    <div
      style={{ '--z-index': `${MOBILE_OVERLAY_Z_INDEX}` } as CSSProperties}
      className="fixed right-0 top-0 z-[var(--z-index)] flex h-screen w-full overflow-hidden px-0 xl:px-6"
    >
      <div
        style={{ '--z-index': `${MOBILE_OVERLAY_Z_INDEX - 1}` } as CSSProperties}
        className="absolute z-[var(--z-index-minus-1)] h-screen w-screen bg-[#CCCED0] opacity-70 before:backdrop-blur-[20px]"
      />
      <StaticHeader />
      <div
        style={{ '--z-index': `${MOBILE_OVERLAY_Z_INDEX}` } as CSSProperties}
        className="relative inset-x-0 z-[var(--z-index)] mx-auto max-w-[90em] flex-wrap justify-between self-center px-8"
      >
        <p className="text-base">{tCommon('mobileVersionIsNotYetThere')}</p>
      </div>
    </div>
  )
}

export default MobileOverlayProvider
