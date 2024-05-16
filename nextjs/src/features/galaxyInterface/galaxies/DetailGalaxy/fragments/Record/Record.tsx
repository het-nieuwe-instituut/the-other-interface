import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'

import { Tooltip } from '@/features/modules/components/ToolTip/Tooltip'
import { useZoomHoverRecordResultQuery } from '@/features/shared/hooks/queries/useZoomHoverRecordResultQuery'
import { cn } from '@/features/ui/utils/cn'
import { PositionedRecord } from '../types'
import { RecordText } from './RecordText'
import { useCalculateLine } from './useCalculateLine'
import { usePresenter } from './usePresenter'
import { TypographyVariants } from '@/features/ui/components/typography/variants'

type Props = {
  record: PositionedRecord
  tabIndex?: number
  style?: React.CSSProperties
}

export const Record: React.FC<Props> = ({ record, style, tabIndex = 0 }) => {
  const { id, category, position, grid } = record
  const { recordDetails, isLoading, handleClick } = usePresenter(id, category)
  // TODO: HNIT-1833 - add in loading and error handling
  const { data } = useZoomHoverRecordResultQuery({ id, category })
  const { coordinates, ref } = useCalculateLine()

  if (!recordDetails && !isLoading) return null

  return (
    <>
      <div className="relative peer" style={{ ...grid, ...style }}>
        <Tooltip
          isDisabled={!data}
          label={
            <div>
              <p className={TypographyVariants({ social: 'sm', className: ' font-bold' })}>
                {data?.title}
              </p>
              <p className={TypographyVariants({ social: 'sm' })}>{data?.description}</p>
            </div>
          }
        >
          <button
            ref={ref}
            tabIndex={tabIndex}
            className={cn(
              'ease-in-out duration-[.4] transition-all absolute flex size-4/5 cursor-pointer flex-col items-center justify-center gap-[2px] hover:scale-105',
              'use-calculate-line-element',
              'group-hover-blur-item'
            )}
            onClick={handleClick}
            style={{ ...position }}
          >
            <ResponsiveImage
              src={recordDetails?.thumbnail?.[0]}
              alt={recordDetails?.title}
              maxHeight={'calc(100% - 2vw - 5px)'} // where 1.6vw are a texts' line heights, 5px are gaps
              size={'11vw'}
              css={{
                flex: '1 1 calc(100% - 2vw - 5px)',
              }}
              disableRightClick
            />

            <RecordText title={recordDetails?.title} categoryType={category} />
          </button>
        </Tooltip>
      </div>

      <div
        className="hidden peer-hover:block"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -80,
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <line
            x1={coordinates.x1}
            y1={coordinates.y1}
            x2={coordinates.x2}
            y2={coordinates.y2}
            strokeWidth={1}
            stroke={'RGBA(0, 81, 255, .4)'}
          />
        </svg>
      </div>
    </>
  )
}
