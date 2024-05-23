import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { Box, Text, GridItem, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

import { HOMEPAGE_Z_INDEXES } from './constants'
import { PositionedStory } from './types'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useCallback } from 'react'
import { Tooltip } from '@/features/modules/components/ToolTip/Tooltip'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useLocale } from '@/features/shared/hooks/useLocale'

type Props = {
  story: PositionedStory
  isMainGrid?: boolean
  onLoad?: (storyId: string) => void
}

export const Story: React.FC<Props> = ({ story, isMainGrid, onLoad }) => {
  const router = useRouter()
  const { t } = useTypeSafeTranslation('homepage')
  const lang = useLocale()

  const { id, title, image, position, grid } = story

  const isClickable = !!title

  const handleClick = () => {
    if (!title) return
    let url = `/detail/stories/${id}`
    url = addLocaleToUrl(url, lang)
    router.push(url)
  }

  const handleImageLoad = useCallback(() => {
    if (onLoad) {
      onLoad(story.id)
    }
  }, [onLoad, story.id])

  return (
    <GridItem position="relative" css={{ ...grid }}>
      <Tooltip
        label={
          <Text fontFamily={'Social'} fontSize={'12px'} fontWeight={'400'}>
            {t('hoverstory')}
          </Text>
        }
      >
        <Flex
          position="absolute"
          style={{ ...position }}
          w={'154px'}
          h={'198px'}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="5px"
          zIndex={HOMEPAGE_Z_INDEXES.STORY}
          cursor={isClickable ? 'pointer' : 'default'}
          onClick={handleClick}
          _hover={isClickable ? { transform: 'scale(1.05)' } : undefined}
          // transition="all .4s ease-in-out"
          className={isMainGrid ? 'story-grid-item' : ''}
        >
          <ResponsiveImage
            src={image}
            alt={title}
            className="max-h-[calc(100%-2vw-5px)]" // where 2vw is a title's line height, 5px is gap
            size={'12vw'}
            style={{
              flex: `1 1 calc(100% - 2vw - 5px)`,
            }}
            onLoad={handleImageLoad}
          />
          <Box w="100%" flex="1" mt={2}>
            <Text
              align="center"
              isTruncated
              textStyle="headingTimesLarge.md"
              color="blueAlpha.100"
              fontSize={{ base: '12px', lg: '20px' }}
              lineHeight={{ base: '12px', lg: '21px' }}
            >
              {title}
            </Text>
          </Box>
        </Flex>
      </Tooltip>
    </GridItem>
  )
}
