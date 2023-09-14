import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { Box, Text, GridItem, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

import { HOMEPAGE_Z_INDEXES } from './constants'
import { Position } from '@/features/shared/types/position'

type Props = {
  story: {
    id: string
    title: string
    image: string
    position: Position
    locale: string
  } | null
}

export const Story: React.FC<Props> = ({ story }) => {
  const router = useRouter()

  if (!story) return <Box />

  const { id, title, image, position } = story

  const isClickable = !!title

  const handleClick = () => {
    if (!title) return

    router.push(`/detail/stories/${id}`)
  }

  return (
    <GridItem position="relative">
      <Flex
        position="absolute"
        style={{ ...position }}
        width="80%"
        height="80%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="10px"
        zIndex={HOMEPAGE_Z_INDEXES.STORY}
        cursor={isClickable ? 'pointer' : 'default'}
        onClick={handleClick}
        _hover={isClickable ? { transform: 'scale(1.05)' } : undefined}
        transition="all .4s ease-in-out"
      >
        <ResponsiveImage
          src={image}
          alt={title}
          maxHeight="calc(100% - 2vw - 10px)" // where 1.6vw is a title's line height, 10px is gap
        />
        <Box w="100%">
          <Text
            align="center"
            isTruncated
            textStyle="headingTimesLarge.md"
            color="blueAlpha.100"
            fontSize="1.5vw"
            lineHeight="2vw"
          >
            {title}
          </Text>
        </Box>
      </Flex>
    </GridItem>
  )
}
