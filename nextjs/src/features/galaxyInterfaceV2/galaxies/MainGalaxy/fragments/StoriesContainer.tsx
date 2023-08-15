import { Box, Image, Text } from '@chakra-ui/react'

import { Position } from './types'
import { HOMEPAGE_Z_INDEXES } from './constants'

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

export const StoriesContainer: React.FC = () => (
  <Box
    position="absolute"
    top="13%"
    right="18vw"
    w="65vw"
    h="55%"
    display="grid"
    gridTemplateColumns="repeat(4, 1fr)"
    gridTemplateRows="repeat(2, 1fr)"
    gap="20px"
    border="1px solid red"
  >
    {stories.map((story, index) => {
      const positioning = positioningTemplate[index]

      return (
        <Box
          key={story.title}
          position="relative"
          zIndex={HOMEPAGE_Z_INDEXES.STORIES}
          border="1px solid blue"
        >
          {positioning && (
            <Box
              position="absolute"
              style={{
                ...positioning,
              }}
              maxW="80%"
              maxH="80%"
              minW="70%"
              minH="70%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              border="1px solid green"
            >
              <Image
                src={story.image}
                maxW="100%"
                maxH="20%"
                objectFit="contain"
                alt={story.title}
              />
              <Box w="100%">
                <Text
                  w="100%"
                  align="center"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  // add font style
                >
                  {story.title}
                </Text>
              </Box>
            </Box>
          )}
        </Box>
      )
    })}
  </Box>
)
