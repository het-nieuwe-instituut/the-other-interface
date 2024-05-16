'use client'
import { cn } from '@/features/ui/utils/cn'
import React, { CSSProperties, PropsWithChildren, useRef } from 'react'
import { Tooltip as ReactTooltip, TooltipRefProps } from 'react-tooltip'
import { PlacesType } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

export interface BaseTooltipProps extends PropsWithChildren {
  html: string
  offset?: number
  id: string
  place: PlacesType
  className?: string
}

export const BaseTooltip = React.forwardRef<TooltipRefProps, BaseTooltipProps>(
  ({ children, html, offset = 16, id, place, className }, forwardedRef) => {
    const internalRef = useRef<TooltipRefProps>(null)
    return (
      <div
        className={className}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        aria-describedby={id}
        data-tooltip-id={id}
        data-tooltip-html={html}
        data-tooltip-offset={0}
        onBlur={() => {
          internalRef.current?.close()
        }}
        onMouseLeave={() => {
          internalRef.current?.close()
        }}
        onMouseEnter={() => {
          internalRef.current?.open()
        }}
        onFocus={() => {
          internalRef.current?.open()
        }}
      >
        <ReactTooltip
          ref={ref => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (internalRef) (internalRef as any).current = ref
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (forwardedRef) (forwardedRef as any).current = ref
          }}
          noArrow
          opacity={1}
          imperativeModeOnly
          style={
            {
              '--tooltip-offset': offset + 'px',
            } as CSSProperties
          }
          className={cn(
            'absolute z-[9999] rounded-none bg-transparent pointer-events-auto p-[var(--tooltip-offset)]'
          )}
          id={id}
          place={place}
        ></ReactTooltip>
        {children}
      </div>
    )
  }
)
BaseTooltip.displayName = 'BaseTooltip'
