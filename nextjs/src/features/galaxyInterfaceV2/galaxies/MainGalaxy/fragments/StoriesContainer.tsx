import { Grid } from '@chakra-ui/react'

import { Position } from './types'
import { useMemo } from 'react'
import { Story } from './Story'

// For readability advantage, we are using the object representation.
type PositioningTemplate = {
  [index: number]: Position | null
}

const positioningTemplate: PositioningTemplate = {
  0: {
    top: 0,
    left: 0,
  },
  1: {
    right: 0,
    bottom: 0,
  },
  2: null,
  3: { top: 0, left: 0 },
  4: null,
  5: null,
  6: { left: 0, bottom: 0 },
  7: { top: 0, right: 0 },
}

const stories = [
  {
    title: 'Oral Herstories',
    image: 'https://picsum.photos/150/100',
  },
  {
    title: 'Nelly &',
    image: 'https://picsum.photos/104/160',
  },
  {
    title: 'De Witdruk',
    image: 'https://picsum.photos/104/160',
  },
  {
    title: 'Collecting Other Types',
    image: 'https://picsum.photos/150/100',
  },
  {
    title: 'Architect Portrait',
    image: 'https://picsum.photos/104/160',
  },
]

//  TODO: usePresenter
export const StoriesContainer: React.FC = () => {
  const positionedStories = useMemo(() => {
    let lastStoryIndex = 0
    const positionedStories = []

    for (const position of Object.values(positioningTemplate)) {
      if (!position) {
        positionedStories.push(null)
      } else {
        positionedStories.push({ ...stories[lastStoryIndex], position })
        lastStoryIndex++
      }
    }

    return positionedStories
  }, [stories])

  return (
    <Grid
      position="absolute"
      top="13%"
      right="18vw"
      w="65vw"
      h="55%"
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(2, 1fr)"
      gap="20px"
      border="1px solid red"
    >
      {positionedStories.map((positionedStory, index) => (
        <Story key={positionedStory?.title ?? `empty-${index}`} story={positionedStory} />
      ))}
    </Grid>
  )
}
