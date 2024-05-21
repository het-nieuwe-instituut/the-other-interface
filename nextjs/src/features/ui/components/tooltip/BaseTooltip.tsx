'use client'
import { cn } from '@/features/ui/utils/cn'
import React, { PropsWithChildren } from 'react'
import { PlacesType, TooltipRefProps } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

export interface BaseTooltipProps extends PropsWithChildren {
  html: string
  offset?: number
  place: PlacesType
  className?: string
}

export const BaseTooltip = React.forwardRef<TooltipRefProps, BaseTooltipProps>(
  ({ children, html, offset = 16, place = 'bottom', className }) => {
    return (
      <div
        className={cn(className, 'my-anchor-element')}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        data-tooltip-html={html}
        data-tooltip-offset={offset ?? 0}
        data-tooltip-place={place}
      >
        {children}
      </div>
    )
  }
)
BaseTooltip.displayName = 'BaseTooltip'
