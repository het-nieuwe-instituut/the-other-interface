import { BelowTheFoldWrapper } from '@/features/editorial/components/BelowTheFoldWrapper'
import { EditorialSkeleton } from '@/features/ui/components/Skeletons/EditorialSkeleton'
import { cn } from '@/features/ui/utils/cn'
import React, { Suspense } from 'react'

interface Props {
  LeftContent: React.ReactNode
  RightContent?: React.ReactNode
  BottomContent?: React.ReactNode
  disableBelowTheFold?: boolean
  isLoading?: boolean
  suspense?: boolean
}

export const LayerWrapper: React.FC<Props> = ({
  LeftContent,
  RightContent,
  BottomContent,
  disableBelowTheFold,
  isLoading,
  suspense,
}) => {
  if (disableBelowTheFold) {
    return (
      <div className="relative mx-auto block min-h-[600px] w-full px-0 xl:px-6">
        {renderContent()}
      </div>
    )
  }

  return (
    <BelowTheFoldWrapper className="relative min-h-[600px] w-full px-0 xl:px-6">
      {renderContent()}
    </BelowTheFoldWrapper>
  )

  function renderContent() {
    return (
      <div className="mx-auto max-w-[90em] pt-9">
        <div
          className={cn(
            'grid lg:grid-areas-editorial-large grid-areas-editorial-small',
            'lg:grid-cols-[minmax(0,1fr),320px] grid-cols-[100%,100%]',
            'lg:grid-rows-[1fr,auto] grid-rows-[auto,minmax(0,1fr),auto]',
            RightContent ? 'gap-[3.75rem]' : 'gap-0'
          )}
        >
          {suspense ? (
            <Suspense fallback={<EditorialSkeleton />}>
              <div className="px-6 grid-in-left">{LeftContent}</div>
              <div className="grid-in-bottom">{BottomContent}</div>
            </Suspense>
          ) : (
            <>
              {isLoading ? (
                <EditorialSkeleton />
              ) : (
                <>
                  <div className="px-6 grid-in-left">{LeftContent}</div>
                  <div className="grid-in-bottom">{BottomContent}</div>
                </>
              )}
            </>
          )}

          {RightContent && <div className="px-6 grid-in-right">{RightContent}</div>}
        </div>
      </div>
    )
  }
}
