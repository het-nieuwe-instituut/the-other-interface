import { Box, Grid, keyframes } from '@chakra-ui/react'

import { Story } from '../Story'
import { usePresenter } from './usePresenter'
import { StoryEntity } from 'src/generated/graphql'

type Props = {
  stories: StoryEntity[]
  nextStories: StoryEntity[]
}

const currentPageFadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })
const nextPageFadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 0.2 } })

export const Stories: React.FC<Props> = ({ stories, nextStories }) => {
  const { positionedStories, positionedNextStories, isCurrentStoriesEmpty, isNextStoriesEmpty } =
    usePresenter(stories, nextStories)

  return (
    <Box width={'100%'} height={'100%'}>
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
          animation: isCurrentStoriesEmpty ? 'none' : `${currentPageFadeIn} 300ms linear`,
          zIndex: 20,
        }}
      >
        {positionedStories.map(positionedStory => (
          <Story key={`${positionedStory.id}-${positionedStory.locale}`} story={positionedStory} />
        ))}
      </Grid>

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
          animation: isNextStoriesEmpty ? 'none' : `${nextPageFadeIn} 300ms linear`,
          zIndex: 10,
          opacity: 0.2,
          filter: 'blur(6px)',
        }}
      >
        {positionedNextStories.map(positionedStory => (
          <Story key={`${positionedStory.id}-${positionedStory.locale}`} story={positionedStory} />
        ))}
      </Grid>
    </Box>
  )
}
