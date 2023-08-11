import { Box } from '@chakra-ui/react'

import { Position } from './types'

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
  3: {},
  4: null,
  5: null,
  6: {},
  7: {},
}

export const StoriesContainer: React.FC = () => (
  <Box
    position="absolute"
    w="65vw"
    h="55%"
    border="1px solid red"
    top="12.73%"
    right="17.58vw"
    display="grid"
    gridTemplateColumns="repeat(4, 1fr)"
    gridTemplateRows="repeat(2, 1fr)"
    gap="20px"
  >
    {[0, 1, 2, 3, 4, 5, 6, 7].map((el, index) => {
      const positioning = positioningTemplate[index]

      return (
        <Box key={el} border="1px solid blue" position="relative">
          {positioning && (
            <Box
              position="absolute"
              maxW="80%"
              maxH="80%"
              minW="70%"
              minH="70%"
              border="1px solid green"
              style={{
                ...positioning,
              }}
            >
              {el}
            </Box>
          )}
        </Box>
      )
    })}
  </Box>
)
