'use client'
import { cn } from '@/features/ui/utils/cn'
import React, { PropsWithChildren, useId, useRef } from 'react'
import { Tooltip as ReactTooltip, TooltipRefProps } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

export interface BaseTooltipProps extends PropsWithChildren {
  html: string
  color: 'black' | 'blue'
}

export const BaseTooltip = React.forwardRef<TooltipRefProps, BaseTooltipProps>(
  ({ children, html, color }, forwardedRef) => {
    const id = useId()
    const internalRef = useRef<TooltipRefProps>(null)
    return (
      <button
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
        className="bg-green-100"
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
          delayHide={100}
          imperativeModeOnly
          className={cn(
            'absolute z-[9999] rounded-none p-0 pointer-events-auto',
            color === 'black' && 'bg-black-100',
            color === 'blue' && 'bg-blue-100'
          )}
          id={id}
        ></ReactTooltip>
        {children}
      </button>
    )
  }
)
BaseTooltip.displayName = 'BaseTooltip'
