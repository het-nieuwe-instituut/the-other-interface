import React, { CSSProperties, useContext, useState } from 'react'
import { useRecordDetailQuery } from '@/features/record/hooks/useRecordDetailQuery'
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
}

export const Record = React.memo(
  ({ record, style, tabIndex = 0, tooltipPlace = 'bottom', className }: Props) => {
    const { t } = useTypeSafeTranslation('category')
    const lang = useLocale()
    const { id, category, position, grid } = record
    const {
      data: recordDetails,
      isLoading,
      isError,
    } = useRecordDetailQuery({
      type: category,
      id,
      locale: lang,
      options: { refetchOnWindowFocus: false },
    })
    const {
      data,
      isError: isLoadingHoverError,
      isLoading: isLoadingHover,
    } = useZoomHoverRecordResultQuery({ id, category })
    const { coordinates, ref } = useCalculateLine()
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
            'peer relative size-full',
            !clicked && 'transition-opacity opacity-0',
            !clicked && !isLoading && !isError && 'opacity-100',
            animationCssVariables
          )}
          ref={ref}
        >
          <ReadMoreTooltip
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
                'fixed',
                'absolute flex size-4/5 cursor-pointer flex-col items-center justify-center gap-[2px]',
                !clicked &&
                  'group-hover-blur-item transition-all duration-300 ease-in-out hover:scale-105',
                !clicked && 'use-calculate-line-element',
                !clicked && 'group-hover-blur-item',
                animationState === 'forward' &&
                  !clicked &&
                  'animate-[toBlurAndHide_300ms_ease-in-out_forwards]',
                animationState === 'forward' &&
                  clicked &&
                  'animate-[toCenterOfGalaxy_500ms_ease-in-out_forwards] z-[1000]'
              )}
              onClick={() => setClicked(true)}
            >
              <StoryOrRecordResponsiveImage
                recordOrStoryId={id}
                src={recordDetails?.thumbnail?.[0]}
                alt={recordDetails?.title}
                className="max-h-[calc(100%-2vw-5px)]" // where 1.6vw are a texts' line heights, 5px are gaps
                size={'11vw'}
                style={{
                  flex: '1 1 calc(100% - 2vw - 5px)',
                }}
              />
              <RecordText title={recordDetails?.title} categoryType={category} />
            </DelayedNextLinkWithZoomAnimationsContext>
          </ReadMoreTooltip>
        </div>

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -80,
            marginTop: `-${coordinates.offsetTop ?? 0}px`,
            marginLeft: `-${coordinates.offsetLeft ?? 0}px`,
            width: '100vw',
          }}
          className="hidden h-[calc(100vh-12vh)] peer-hover:block"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="size-full">
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
      </div>
    )
  }
)

Record.displayName = 'Record'
