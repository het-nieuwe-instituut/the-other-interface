import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { Box, Text, GridItem, Flex } from '@chakra-ui/react'
import { useRouter, useSearchParams } from 'next/navigation'

import { HOMEPAGE_Z_INDEXES } from './constants'
import { PositionedStory } from './types'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'

type Props = {
  story: PositionedStory
}

export const Story: React.FC<Props> = ({ story }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  const { id, title, image, position, grid } = story

  const isClickable = !!title

  const handleClick = () => {
    if (!title) return
    let url = `/detail/stories/${id}`
    url = addLocaleToUrl(url, lang)
    router.push(url)
  }

  return (
    <GridItem position="relative" css={{ ...grid }}>
      <Flex
        position="absolute"
        style={{ ...position }}
        width="80%"
        height="80%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="5px"
        zIndex={HOMEPAGE_Z_INDEXES.STORY}
        cursor={isClickable ? 'pointer' : 'default'}
        onClick={handleClick}
        _hover={isClickable ? { transform: 'scale(1.05)' } : undefined}
        transition="all .4s ease-in-out"
      >
        <ResponsiveImage
          src={image}
          alt={title}
          maxHeight="calc(100% - 2vw - 5px)" // where 2vw is a title's line height, 5px is gap
          size={'12vw'}
        />
        <Box w="100%" flex="1">
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
