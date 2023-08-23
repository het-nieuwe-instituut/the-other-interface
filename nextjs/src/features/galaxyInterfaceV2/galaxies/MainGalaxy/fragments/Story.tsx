import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { Box, Text, GridItem, Flex } from '@chakra-ui/react'

import { HOMEPAGE_Z_INDEXES } from './constants'
import { Position } from './types'

type Props = {
  story: {
    title: string
    image: string
    position: Position
  } | null
}

export const Story: React.FC<Props> = ({ story }) => (
  <GridItem position="relative" zIndex={HOMEPAGE_Z_INDEXES.STORIES}>
    {story && (
      <Flex
        position="absolute"
        style={{ ...story.position }}
        width="80%"
        height="80%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="10px"
      >
        <ResponsiveImage
          src={story.image}
          alt={story.title}
          maxHeight="calc(100% - 2vw - 10px)" // where 1.6vw is a title's line height, 10px is gap
        />

        <Box w="100%">
          <Text
            align="center"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            textStyle="headingTimesLarge.md"
          >
            {story.title}
          </Text>
        </Box>
      </Flex>
    )}
  </GridItem>
)