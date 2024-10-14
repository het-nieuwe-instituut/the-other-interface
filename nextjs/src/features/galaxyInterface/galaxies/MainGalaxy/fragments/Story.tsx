import { StoryOrRecordResponsiveImage } from '@/features/shared/components/ResponsiveImage/StoryOrRecordResponsiveImage'
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
import { PositionedStory } from './types'

type Props = {
  className?: string
  story: PositionedStory
  isMainGrid?: boolean
  onLoad?: (storyId: string) => void
  positionClassName?: string
}

export const Story: React.FC<Props> = ({
  story,
  isMainGrid,
  onLoad,
  className,
  positionClassName,
}) => {
  const { t: hoverT } = useTypeSafeTranslation('category')
  const lang = useLocale()

  const { id, title, image, position, grid, alt } = story

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
      <div
        className={cn(
          'absolute flex size-4/5 cursor-pointer flex-col items-center justify-center gap-[2px]',
          !animationState && isClickable && 'group',
          'use-calculate-line-element'
        )}
      >
        <DelayedNextLinkWithZoomAnimationsContext
          delay={600}
          animation="forward"
          ref={positionRef}
          href={url}
          className={cn(
            'ease-toi-cubic-bezier',
            'absolute w-[154px] h-[198px] flex-col items-center justify-center gap-[5px] z-[20] transition-transform duration-[400ms] ',
            animationState === 'forward' && !clicked && 'animate-[toBlurAndHide_300ms_forwards]',
            animationState === 'forward' &&
              clicked &&
              'animate-[toCenterOfGalaxy_500ms_forwards] z-[1000]',
            positionClassName
          )}
          style={{ ...position, ...animationCssVariables }}
          onClick={() => {
            setClicked(true)
          }}
        >
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
            floating={true}
          >
            <div
              className={cn(
                'flex size-full flex-col gap-[12px] transition-all duration-300 ease-toi-cubic-bezier group-hover:scale-105',
                !animationState && 'group-hover-blur-item'
              )}
            >
              <StoryOrRecordResponsiveImage
                recordOrStoryId={story.id}
                src={image}
                alt={alt ?? title}
                className={cn(
                  'size-full max-h-[calc(100%-2vw-5px)]',
                  isMainGrid ? 'story-grid-item' : ''
                )} // where 2vw is a title's line height, 5px is gap
                imageClassName="object-bottom"
                size={'12vw'}
                style={{
                  flex: `1 1 calc(100% - 2vw - 5px)`,
                }}
                onLoad={handleImageLoad}
              />
              <div className="w-full flex-1">
                <p
                  lang="nl"
                  className={cn(
                    'ease-toi-cubic-bezier',
                    animationState === 'forward' && 'animate-[toBlurAndHide_300ms_forwards]',
                    TypographyVariants({
                      responsive: 'storyOrRecordTitle',
                      className:
                        'line-clamp-2 text-center hyphens-auto overflow-hidden items-center text-blue-100 w-full',
                    })
                  )}
                >
                  {title}
                </p>
                <p
                  lang="nl"
                  className={TypographyVariants({
                    responsive: 'detailedStoryOrRecordSubTitle',
                    className: 'text-center mt-1 text-blue-100',
                  })}
                >
                  {hoverT('story')}
                </p>
              </div>
            </div>
          </ReadMoreTooltip>
        </DelayedNextLinkWithZoomAnimationsContext>
      </div>
    </div>
  )
}
