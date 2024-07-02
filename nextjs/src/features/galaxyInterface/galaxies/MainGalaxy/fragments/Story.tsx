import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { Box, Flex, GridItem, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useZoomHoverRecordResultQuery } from '@/features/shared/hooks/queries/useZoomHoverRecordResultQuery'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { CATEGORIES } from '@/features/shared/utils/categories'
import { ReadMoreTooltip } from '@/features/ui/components/tooltip/ReadMoreTooltip'
import { cn } from '@/features/ui/utils/cn'
import { useCallback } from 'react'
import { HOMEPAGE_Z_INDEXES } from './constants'
import { PositionedStory } from './types'

type Props = {
  className?: string
  story: PositionedStory
  isMainGrid?: boolean
  onLoad?: (storyId: string) => void
}

export const Story: React.FC<Props> = ({ story, isMainGrid, onLoad, className }) => {
  const router = useRouter()
  const { t: hoverT } = useTypeSafeTranslation('category')
  const lang = useLocale()

  const { id, title, image, position, grid } = story

  const {
    data,
    isError: isLoadingHoverError,
    isLoading: isLoadingHover,
  } = useZoomHoverRecordResultQuery({ id, category: CATEGORIES.stories })

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
    <GridItem position="relative" css={{ ...grid }} className={cn(className)}>
      <ReadMoreTooltip
        isLoading={isLoadingHover}
        error={isLoadingHoverError ? hoverT('couldNotFetchHover') : ''}
        place={'bottom'}
        isEmpty={!data?.description && !data?.title}
        title={data?.title ?? undefined}
        description={data?.description ?? undefined}
        className="size-full"
        color="blue"
      >
        <button
          tabIndex={0}
          className={cn(
            'ease-in-out duration-[.4] transition-all absolute flex size-4/5 cursor-pointer flex-col items-center justify-center gap-[2px] hover:scale-105',
            'use-calculate-line-element',
            'group-hover-blur-item'
          )}
          onClick={handleClick}
          style={{ ...position }}
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
            transition="all .4s ease-in-out"
            // eslint-disable-next-line tailwindcss/no-custom-classname
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
        </button>
      </ReadMoreTooltip>
    </GridItem>
  )
}
