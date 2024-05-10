import { Box, Flex, Grid } from '@chakra-ui/react'

import { Story } from '../Story'
import { usePresenter } from './usePresenter'
import { StoryEntity } from 'src/generated/graphql'
import { useDrawLines } from './useDrawLines'
import { Loader } from '@/features/galaxyInterface/components/Loader/Loader'
import { useImageLoader } from './useImageLoader'

type Props = {
  stories: StoryEntity[]
  nextStories: StoryEntity[]
}

// const currentPageFadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })
// const nextPageFadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 0.2 } })

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

  const svgRef = useDrawLines('.story-grid-item', originalTemplateIndex, positionedStories)

  return (
    <Box width={'100%'} height={'100%'}>
      {!allImagesLoaded && (
        <Flex justify={'center'} align={'center'} height={'100%'}>
          <Loader />
        </Flex>
      )}
      <Grid
        position="absolute"
        top="13%"
        right="18vw"
        w="65vw"
        h="55%"
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap="20px"
        css={{
          // animation: isCurrentStoriesEmpty ? 'none' : `${currentPageFadeIn} 200ms linear`,
          zIndex: 20,
          visibility: allImagesLoaded ? 'visible' : 'hidden',
        }}
      >
        {positionedStories.map(positionedStory => (
          <Story
            key={`${positionedStory.id}-${positionedStory.locale}-${currentPage}`}
            story={positionedStory}
            isMainGrid
            onLoad={handleImageLoaded}
          />
        ))}
      </Grid>

      <svg
        ref={svgRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          visibility: allImagesLoaded ? 'visible' : 'hidden',
        }}
      />

      <Grid
        position="absolute"
        top="13%"
        right="18vw"
        w="65vw"
        h="55%"
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap="20px"
        css={{
          // animation: isNextStoriesEmpty ? 'none' : `${nextPageFadeIn} 300ms linear`,
          zIndex: 10,
          opacity: 0.2,
          filter: 'blur(6px)',
          visibility: allImagesLoaded ? 'visible' : 'hidden',
        }}
      >
        {positionedNextStories.map(positionedStory => (
          <Story key={`${positionedStory.id}-${positionedStory.locale}`} story={positionedStory} />
        ))}
      </Grid>
    </Box>
  )
}
