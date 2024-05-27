'use client'

import { Tooltip as ReactTooltip } from 'react-tooltip'
import { cn } from '../../utils/cn'

export const ReactTooltipInitializer = () => {
  return (
    <>
      <ReactTooltip
        clickable
        noArrow
        place="bottom"
        opacity={1}
        className={cn(
          'absolute z-[10000] rounded-none bg-transparent pointer-events-auto p-[var(--tooltip-offset)]'
        )}
        anchorSelect={'.my-anchor-element'}
      />
    </>
  )
}
