import { CSSProperties, useState } from 'react'
import { SEARCH_MODE_OVERLAY_Z_INDEX } from '../../constants/mainConstants'
import { cn } from '@/features/ui/utils/cn'

const BlurOverlay = ({ hide = false }: { hide: boolean }) => {
  return (
    <div
      style={{ '--z-index': SEARCH_MODE_OVERLAY_Z_INDEX } as CSSProperties}
      className={cn(
        'absolute inset-0 z-[var(--z-index)] bg-pink-60 backdrop-blur-[5px] cursor-pointer hidden',
        hide && 'animate-[toFadeOut_300ms_ease-in-out_forwards] pointer-events-none',
        !hide && 'animate-[toFadeIn_300ms_ease-in-out_forwards] block'
      )}
    />
  )
}

export default BlurOverlay
