import React from 'react'
import SuspenseLoader from '../SuspenseLoader/SuspenseLoader'
import { cn } from '@/features/ui/utils/cn'

interface Props {
  LeftContent: React.ReactNode
  RightContent?: React.ReactNode
  BottomContent?: React.ReactNode
}

export const LayerWrapper: React.FC<Props> = ({ LeftContent, RightContent, BottomContent }) => {
  return (
    <div className="relative min-h-[600px] w-full bg-ivory-90 px-0 xl:px-6">
      <div className="mx-auto max-w-[90em] pt-9">
        <div
          className={cn(
            'grid lg:grid-areas-editorial-large grid-areas-editorial-small',
            'lg:grid-cols-[minmax(0,1fr),320px] grid-cols-[100%,100%]',
            'lg:grid-rows-[1fr,auto] grid-rows-[auto,minmax(0,1fr),auto]',
            RightContent ? 'gap-[3.75rem]' : 'gap-0'
          )}
        >
          <SuspenseLoader>
            <div className="px-6 grid-in-left">{LeftContent}</div>
            <div className="grid-in-bottom">{BottomContent}</div>
          </SuspenseLoader>

          {RightContent && <div className="px-6 grid-in-right">{RightContent}</div>}
        </div>
      </div>
    </div>
  )
}
