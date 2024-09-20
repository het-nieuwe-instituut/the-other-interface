'use client'
import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useBreakpoint } from '../../configs/chakra'

import { MOBILE_OVERLAY_Z_INDEX } from '../../constants/mainConstants'
import { StaticHeader } from '../StaticHeader/StaticHeader'
import { CSSProperties } from 'react'
import { TypographyVariants } from '@/features/ui/components/typography/variants'

interface Props {
  children: React.ReactNode
}

const MobileOverlayProvider = (props: Props) => {
  const breakpoint = useBreakpoint()
  const isMobile = breakpoint === 'sm'

  return (
    <div className="overflow-hidden">
      {props.children}
      {isMobile && <MobileOverlay />}
    </div>
  )
}

const MobileOverlay = () => {
  const { t: tCommon } = useLooseTypeSafeTranslation('common')

  return (
    <div
      style={
        {
          '--z-index': `${MOBILE_OVERLAY_Z_INDEX}`,
          backdropFilter: 'blur(60px)',
        } as CSSProperties
      }
      className="fixed right-0 top-0 z-[var(--z-index)] flex h-screen w-full overflow-hidden bg-pink-60 px-0 xl:px-6"
    >
      <div
        style={{ '--z-index': `${MOBILE_OVERLAY_Z_INDEX + 1}` } as CSSProperties}
        className="absolute z-[var(--z-index-minus-1)] h-screen w-screen "
      >
        <StaticHeader />
      </div>
      <div
        style={{ '--z-index': `${MOBILE_OVERLAY_Z_INDEX}` } as CSSProperties}
        className="relative inset-x-0 z-[var(--z-index)] mx-auto max-w-[90em] flex-wrap justify-between self-center px-8"
      >
        <p className={TypographyVariants({ timesDot: 'lg', className: 'text-blue-100' })}>
          {tCommon('mobileVersionIsNotYetThere1')}
        </p>
        <br />
        <p className={TypographyVariants({ timesDot: 'lg', className: 'text-blue-100' })}>
          {tCommon('mobileVersionIsNotYetThere2')}
        </p>
      </div>
    </div>
  )
}

export default MobileOverlayProvider
