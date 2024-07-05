import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'

import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useZoomHoverRecordResultQuery } from '@/features/shared/hooks/queries/useZoomHoverRecordResultQuery'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { CATEGORIES } from '@/features/shared/utils/categories'
import { DelayedNextLinkWithZoomAnimationsContext } from '@/features/ui/components/DelayedNextLink/DelayedNextLinkWithZoomAnimationsContext'
import { ReadMoreTooltip } from '@/features/ui/components/tooltip/ReadMoreTooltip'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { useCallback, useContext, useState } from 'react'
import {
  GalaxyZoomAnimationStateContext,
  useMoveElementToCenterValues,
} from '../../hooks/GalaxyZoomAnimationStateProvider'
import { useSetStoryOrRecordImageToCache } from '../hooks/useStoryOrRecordImageQuery'
import { PositionedStory } from './types'

type Props = {
  className?: string
  story: PositionedStory
  isMainGrid?: boolean
  onLoad?: (storyId: string) => void
}

export const Story: React.FC<Props> = ({ story, isMainGrid, onLoad, className }) => {
  const { t: hoverT } = useTypeSafeTranslation('category')
  const lang = useLocale()

  const { id, title, image, position, grid } = story

  const {
    data,
    isError: isLoadingHoverError,
    isLoading: isLoadingHover,
  } = useZoomHoverRecordResultQuery({ id, category: CATEGORIES.stories })

  const isClickable = !!title

  let url = `/detail/stories/${id}`
  url = addLocaleToUrl(url, lang)

  const { animationState } = useContext(GalaxyZoomAnimationStateContext)

  const [clicked, setClicked] = useState(false)
  const setStoryOrRecorImageToCache = useSetStoryOrRecordImageToCache()
  const [animationCssVariables, positionRef] = useMoveElementToCenterValues({
    scale: 2.39,
    offsetTop: -62,
  })

  const handleImageLoad = useCallback(() => {
    if (onLoad) {
      onLoad(story.id)
    }
  }, [onLoad, story.id])

  return (
    <div className={cn('relative', className)} style={{ ...grid }}>
      <ReadMoreTooltip
        hideTooltip={animationState === 'forward'}
        isLoading={isLoadingHover}
        error={isLoadingHoverError ? hoverT('couldNotFetchHover') : ''}
        place={'bottom'}
        isEmpty={!data?.description && !data?.title}
        title={data?.title ?? undefined}
        description={data?.description ?? undefined}
        className="size-full"
        color="blue"
      >
        <div
          className={cn(
            'absolute flex size-4/5 cursor-pointer flex-col items-center justify-center gap-[2px]',
            !animationState &&
              isClickable &&
              'hover:scale-105 ease-in-out duration-[.4] transition-transform ',
            'use-calculate-line-element',
            !animationState && 'group-hover-blur-item'
          )}
        >
          <DelayedNextLinkWithZoomAnimationsContext
            delay={600}
            animation="forward"
            ref={positionRef}
            href={url}
            className={cn(
              'absolute w-[154px] h-[198px] flex-col items-center justify-center gap-[5px] z-[20] transition-transform duration-[400ms] ease-in-out ',
              isMainGrid ? 'story-grid-item' : '',
              animationState === 'forward' &&
                !clicked &&
                'animate-[toBlurAndHide_300ms_ease-in-out_forwards]',
              animationState === 'forward' &&
                clicked &&
                'animate-[toCenterOfGalaxy_500ms_ease-in-out_forwards] z-[1000]'
            )}
            style={{ ...position, ...animationCssVariables }}
            onClick={() => {
              setStoryOrRecorImageToCache({ id: story.id, image })
              setClicked(true)
            }}
          >
            <ResponsiveImage
              src={image}
              alt={title}
              className="size-full max-h-[calc(100%-2vw-5px)]" // where 2vw is a title's line height, 5px is gap
              size={'12vw'}
              style={{
                flex: `1 1 calc(100% - 2vw - 5px)`,
              }}
              onLoad={handleImageLoad}
            />
            <div className="mt-1 w-full flex-1">
              <p
                className={cn(
                  animationState === 'forward' &&
                    'animate-[toBlurAndHide_300ms_ease-in-out_forwards]',
                  TypographyVariants({
                    responsive: 'storyOrRecordTitle',
                    className: 'line-clamp-1 overflow-hidden items-center text-blue-100 w-full',
                  })
                )}
              >
                {title}
              </p>
            </div>
          </DelayedNextLinkWithZoomAnimationsContext>
        </div>
      </ReadMoreTooltip>
    </div>
  )
}
