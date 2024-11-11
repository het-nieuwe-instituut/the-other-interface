import { cn } from '@/features/ui/utils/cn'
import { useContext, useMemo } from 'react'
import {
  GalaxyPaginationAnimationStateContext,
  getItemsAnimationClassNames,
  getItemsCssProperties,
  getNextItemsAnimationClassNames,
  getNextItemsCssProperties,
} from '../../../hooks/GalaxyPaginationAnimationStateProvider'
import { StoriesData } from '../../hooks/useThemesQuery'
import { Story } from '../Story'
import { useDrawLines } from './useDrawLines'
import { usePresenter } from './usePresenter'
import {
  GalaxyZoomAnimationStateContext,
  getScaleAnimationClassName,
} from '../../../hooks/GalaxyZoomAnimationStateProvider'

type Props = {
  stories: StoriesData
  nextStories: StoriesData
}

export const Stories: React.FC<Props> = ({ stories, nextStories }) => {
  const {
    positionedStories,
    positionedNextStories,
    originalTemplateIndex,
    pageNumber: currentPage,
  } = usePresenter(stories, nextStories)
  const { animationState: paginationAnimationState, conditions: paginationAnimationConditions } =
    useContext(GalaxyPaginationAnimationStateContext)
  const { animationState: zoomAnimationState, conditions: galaxyZoomAnimationConditions } =
    useContext(GalaxyZoomAnimationStateContext)
  const svgRef = useDrawLines({
    hideLines: !!paginationAnimationState,
    selector: '.story-grid-item',
    template: originalTemplateIndex,
    stories: positionedStories,
    delay: 350,
  })

  const animations = useMemo(() => {
    const config = [
      cn('animate-[zoomFirstRender_300ms_both_100ms]'),
      cn('animate-[zoomFirstRender_325ms_both_125ms]'),
      cn('animate-[zoomFirstRender_350ms_both_150ms]'),
      cn('animate-[zoomFirstRender_375ms_both_175ms]'),
      cn('animate-[zoomFirstRender_400ms_both_200ms]'),
      cn('animate-[zoomFirstRender_425ms_both_225ms]'),
      cn('animate-[zoomFirstRender_450ms_both_250ms]'),
      cn('animate-[zoomFirstRender_475ms_both_275ms]'),
      cn('animate-[zoomFirstRender_500ms_both_300ms]'),
      cn('animate-[zoomFirstRender_525ms_both_325ms]'),
      cn('animate-[zoomFirstRender_550ms_both_350ms]'),
      cn('animate-[zoomFirstRender_575ms_both_375ms]'),
    ]
    // shuffle the array
    return config.sort(() => Math.random() - 0.5)
  }, [])

  return (
    <div className={cn('size-full')}>
      <div className="absolute right-[18%] top-[13%] h-[55%] w-[65vw] max-w-[936px]">
        <div
          style={getItemsCssProperties('50')}
          className={cn(
            'relative size-full z-20 grid grid-cols-4 grid-rows-2 gap-[20px]',
            getItemsAnimationClassNames(paginationAnimationState, paginationAnimationConditions)
          )}
        >
          {positionedStories.map((positionedStory, index) => (
            <Story
              key={`${positionedStory.id}-${positionedStory.locale}-${currentPage}`}
              story={positionedStory}
              isMainGrid
              positionClassName={getScaleAnimationClassName({
                allLoaded: true,
                animation: animations[index],
                galaxyZoomAnimationConditions: galaxyZoomAnimationConditions,
                galaxyZoomAnimationState: zoomAnimationState,
                galaxyPaginationAnimationState: paginationAnimationState,
                galaxyPaginationAnimationConditions: paginationAnimationConditions,
              })}
            />
          ))}
        </div>
      </div>

      <svg
        ref={svgRef}
        className={'group-hover-blur-except-self transition-all duration-300 ease-toi-cubic-bezier'}
        style={{
          display: zoomAnimationState === 'forward' ? 'none' : 'block',
          position: 'fixed',
          top: 0,
          left: 0,
          opacity: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <div
        style={getNextItemsCssProperties('50')}
        className={cn(
          'absolute right-[18%] top-[13%] grid h-[55%] w-[65vw] max-w-[936px] grid-cols-4 grid-rows-2 gap-[20px] z-10',
          getNextItemsAnimationClassNames(
            paginationAnimationState,
            paginationAnimationConditions,
            !!positionedStories?.length
          )
        )}
      >
        {positionedNextStories.map(positionedStory => (
          <Story
            className={cn(
              'ease-toi-cubic-bezier',
              paginationAnimationConditions === 'firstRender' &&
                'animate-[fromHideToShow_1000ms_forwards]'
            )}
            key={`${positionedStory.id}-${positionedStory.locale}`}
            story={positionedStory}
          />
        ))}
      </div>
    </div>
  )
}
