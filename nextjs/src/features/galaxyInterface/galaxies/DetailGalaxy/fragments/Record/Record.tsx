import React, { CSSProperties, useContext, useState } from 'react'

import { getZoom3RecordTask } from '@/features/pages/tasks/getZoom3Record'
import { StoryOrRecordResponsiveImage } from '@/features/shared/components/ResponsiveImage/StoryOrRecordResponsiveImage'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useZoomHoverRecordResultQuery } from '@/features/shared/hooks/queries/useZoomHoverRecordResultQuery'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { DelayedNextLinkWithZoomAnimationsContext } from '@/features/ui/components/DelayedNextLink/DelayedNextLinkWithZoomAnimationsContext'
import {
  ReadMoreTooltip,
  ReadMoreTooltipProps,
} from '@/features/ui/components/tooltip/ReadMoreTooltip'
import { cn } from '@/features/ui/utils/cn'
import {
  GalaxyZoomAnimationStateContext,
  useMoveElementToCenterValues,
} from '../../../hooks/GalaxyZoomAnimationStateProvider'
import { PositionedRecord } from '../types'
import { RecordText } from './RecordText'
import { useCalculateLine } from './useCalculateLine'

type Props = {
  record: PositionedRecord
  tabIndex?: number
  style?: React.CSSProperties
  tooltipPlace?: ReadMoreTooltipProps['place']
  isIdLoading?: boolean
  className?: string
  recordDetails: Awaited<ReturnType<typeof getZoom3RecordTask>>
  positionClassName?: string
}

export const Record = React.memo(
  ({
    record,
    style,
    positionClassName,
    tabIndex = 0,
    tooltipPlace = 'bottom',
    className,
    recordDetails,
  }: Props) => {
    const { t } = useTypeSafeTranslation('category')
    const lang = useLocale()
    const { id, category, position, grid } = record
    const {
      data,
      isError: isLoadingHoverError,
      isLoading: isLoadingHover,
    } = useZoomHoverRecordResultQuery({ id, category })
    const { coordinates, ref } = useCalculateLine({ trigger: true })
    const [animationCssVariables, positionRef] = useMoveElementToCenterValues({
      scale: 1.65,
      offsetTop: -80,
    })
    const { animationState } = useContext(GalaxyZoomAnimationStateContext)
    const [clicked, setClicked] = useState(false)

    let url = `/detail/${category}/${id}`
    url = addLocaleToUrl(url, lang)

    return (
      <div className={cn(className)} style={{ ...grid, ...style }}>
        <div
          className={cn(
            'group relative size-full opacity-0 transition-opacity',
            clicked === true && 'opacity-100',
            clicked === false && 'opacity-100',
            animationCssVariables
          )}
        >
          <ReadMoreTooltip
            floating={true}
            hideTooltip={animationState === 'forward'}
            isLoading={isLoadingHover}
            error={isLoadingHoverError ? t('couldNotFetchHover') : ''}
            place={tooltipPlace}
            isEmpty={!data?.description && !data?.title}
            title={data?.title ?? undefined}
            description={data?.description ?? undefined}
            className="size-full"
            color="blue"
          >
            <DelayedNextLinkWithZoomAnimationsContext
              style={{ ...animationCssVariables, ...position } as CSSProperties}
              animation="forward"
              delay={600}
              ref={positionRef}
              href={url}
              tabIndex={tabIndex}
              className={cn(
                'ease-toi-cubic-bezier',
                'fixed',
                'absolute flex size-4/5 cursor-pointer flex-col items-center justify-center gap-[2px]',
                !clicked && 'group-hover-blur-item transition-all duration-300',
                !clicked && 'use-calculate-line-element',
                !clicked && 'group-hover-blur-item',
                animationState === 'forward' &&
                  !clicked &&
                  'animate-[toBlurAndHide_300ms_forwards]',
                animationState === 'forward' &&
                  clicked &&
                  'animate-[toCenterOfGalaxy_500ms_forwards] z-[1000]',
                positionClassName
              )}
              onClick={() => setClicked(true)}
            >
              <div ref={ref} className="relative size-full ">
                <div className="flex size-full flex-col gap-[12px] transition-all  duration-300 ease-toi-cubic-bezier hover:scale-105">
                  <div
                    className="flex  size-full items-center  justify-center "
                    style={{
                      flex: '1 1 calc(100% - 2vw - 5px)',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        zIndex: -80,
                      }}
                      className={cn(
                        'hidden group-hover:block size-full ',
                        (animationState === 'forward' || animationState === 'backwards') &&
                          'hidden group-hover:hidden'
                      )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-full overflow-visible"
                      >
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
                    <StoryOrRecordResponsiveImage
                      recordOrStoryId={id}
                      src={recordDetails?.thumbnail?.[0]}
                      alt={recordDetails?.title}
                      className="size-full"
                      imageClassName={cn('object-bottom')}
                      size={'11vw'}
                    />
                  </div>
                  <RecordText
                    className={cn(
                      'ease-toi-cubic-bezier',
                      animationState === 'forward' && 'animate-[toBlurAndHide_300ms_forwards]'
                    )}
                    title={recordDetails?.title}
                    categoryType={category}
                  />
                </div>
              </div>
            </DelayedNextLinkWithZoomAnimationsContext>
          </ReadMoreTooltip>
        </div>
      </div>
    )
  }
)

Record.displayName = 'Record'
