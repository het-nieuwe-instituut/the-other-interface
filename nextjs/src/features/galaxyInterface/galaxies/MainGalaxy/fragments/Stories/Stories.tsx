import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import { cn } from '@/features/ui/utils/cn'
import { useContext } from 'react'
import { MainGalaxyAnimationContext } from '../../MainGalaxy'
import { StoriesData } from '../../hooks/useThemesQuery'
import { Story } from '../Story'
import { useDrawLines } from './useDrawLines'
import { useImageLoader } from './useImageLoader'
import { usePresenter } from './usePresenter'

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

  const { handleImageLoaded, allImagesLoaded } = useImageLoader(
    positionedStories,
    currentPage,
    stories
  )

  const { animationState } = useContext(MainGalaxyAnimationContext)
  const svgRef = useDrawLines({
    hideLines: !!animationState,
    selector: '.story-grid-item',
    template: originalTemplateIndex,
    stories: positionedStories,
  })

  return (
    <div className="size-full">
      {animationState}
      {!allImagesLoaded && (
        <div className="flex h-full items-center justify-center">
          <ThemedSpinner />
        </div>
      )}
      <div
        className="absolute right-[18%] top-[13%] grid h-[55%] w-[65vw] max-w-[936px] grid-cols-4 grid-rows-2 gap-20 opacity-100"
        style={{
          zIndex: 20,
          visibility: allImagesLoaded ? 'visible' : 'hidden',
        }}
      >
        {positionedStories.map(positionedStory => (
          <Story
            className={cn(
              'fromHideToShow',
              animationState === 'forward' && 'animate-toBlurAndHide',
              animationState === 'backwards' && 'animate-toBlur'
            )}
            key={`${positionedStory.id}-${positionedStory.locale}-${currentPage}`}
            story={positionedStory}
            isMainGrid
            onLoad={handleImageLoaded}
          />
        ))}
      </div>

      <svg
        ref={svgRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          visibility: allImagesLoaded ? 'visible' : 'hidden',
        }}
      />

      <div
        className={cn(
          'fromHideToShow',
          'absolute left-1/2 top-[13%] grid h-[55%] w-[65vw] max-w-[936px] -translate-x-1/2 grid-cols-4 grid-rows-2 gap-[20px] ',
          !animationState && 'blur-[10px]',
          animationState === 'forward' && 'animate-toUnblur'
        )}
        style={{
          zIndex: 10,
          visibility: allImagesLoaded ? 'visible' : 'hidden',
        }}
      >
        {positionedNextStories.map(positionedStory => (
          <Story key={`${positionedStory.id}-${positionedStory.locale}`} story={positionedStory} />
        ))}
      </div>
    </div>
  )
}
