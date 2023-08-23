import { Box, Text, GridItem } from '@chakra-ui/react'

import { Position } from './types'
import { HOMEPAGE_Z_INDEXES } from './constants'
import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'

type Props = {
  story: {
    title: string
    image: string
    position: Position
  } | null
}

export const Story: React.FC<Props> = ({ story }) => (
  <GridItem position="relative" zIndex={HOMEPAGE_Z_INDEXES.STORIES} border="1px solid blue">
    {story && (
      <Box
        position="absolute"
        style={{ ...story.position }}
        width="80%"
        height="80%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="10px"
        border="1px solid green"
      >
        <ResponsiveImage src={story.image} alt={story.title} />

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
      </Box>
    )}
  </GridItem>
)
