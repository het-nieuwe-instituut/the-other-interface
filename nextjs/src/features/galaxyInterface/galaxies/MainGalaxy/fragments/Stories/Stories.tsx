import { cn } from '@/features/ui/utils/cn'
import { useContext } from 'react'
import {
  GalaxyPaginationAnimationStateContext,
  getItemsAnimationClassNames,
  getNextItemsAnimationClassNames,
} from '../../../hooks/GalaxyPaginationAnimationStateProvider'
import { StoriesData } from '../../hooks/useThemesQuery'
import { Story } from '../Story'
import { useDrawLines } from './useDrawLines'
import { usePresenter } from './usePresenter'
import { GalaxyZoomAnimationStateContext } from '../../../hooks/GalaxyZoomAnimationStateProvider'

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
  const { animationState: zoomAnimationState } = useContext(GalaxyZoomAnimationStateContext)
  const svgRef = useDrawLines({
    hideLines: !!paginationAnimationState,
    selector: '.story-grid-item',
    template: originalTemplateIndex,
    stories: positionedStories,
  })

  return (
    <div className={cn('size-full')}>
      <div className="absolute right-[18%] top-[13%] h-[55%] w-[65vw] max-w-[936px]">
        <div
          className={cn(
            'relative size-full z-20 grid   grid-cols-4 grid-rows-2 gap-[20px] opacity-100  '
          )}
        >
          {positionedStories.map(positionedStory => (
            <Story
              className={getItemsAnimationClassNames(
                paginationAnimationState,
                paginationAnimationConditions
              )}
              key={`${positionedStory.id}-${positionedStory.locale}-${currentPage}`}
              story={positionedStory}
              isMainGrid
            />
          ))}
        </div>
      </div>

      <svg
        ref={svgRef}
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
              paginationAnimationConditions === 'firstRender' &&
                'animate-[fromHideToShow_1000ms_ease-in-out_forwards]'
            )}
            key={`${positionedStory.id}-${positionedStory.locale}`}
            story={positionedStory}
          />
        ))}
      </div>
    </div>
  )
}
