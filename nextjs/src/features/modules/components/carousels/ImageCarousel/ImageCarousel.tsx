import { imageBasePath } from '@/features/modules/modulesConstants'
import ArrowLeftIcon from '@/icons/arrows/arrow-left-long.svg'
import ArrowRightIcon from '@/icons/arrows/arrow-right-long.svg'
import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/legacy/image'
import React from 'react'

import { ArrowNextContainer, ArrowPrevContainer } from './ImageCorouselStyled'
import usePresenter from './usePresenter'
import { modulesSpacingMapper } from '@/features/modules/modulesSpacing'
import { StoryImageInfo } from '@/features/shared/mappers/storiesToCarouselDataMapper'

interface Props {
  images: StoryImageInfo[]
  onItemClick?: (id: string | null | undefined) => void
}

const IMAGE_HEIGHT = 600

export const ImageCarousel = (props: Props) => {
  const {
    carouselRef,
    handlePaginationPrev,
    handlePaginationNext,
    sliderRef,
    calculateImagePropotions,
    size,
  } = usePresenter(props.images)

  return (
    <Box as="div" backgroundColor={'inherit'} ref={carouselRef} position="relative">
      <>
        <ArrowPrevContainer>
          <ArrowLeftIcon onClick={handlePaginationPrev} />
        </ArrowPrevContainer>

        <ArrowNextContainer>
          <ArrowRightIcon onClick={handlePaginationNext} />
        </ArrowNextContainer>
        <div ref={sliderRef} className="keen-slider">
          {props?.images?.map((item, index) => {
            const originalHeight = item?.height ?? 1
            const originalWidth = item?.width ?? 1
            const imagePath = imageBasePath(item?.url) || 'broken'
            const caption = item?.description
            const proportions = calculateImagePropotions(
              originalWidth,
              originalHeight,
              IMAGE_HEIGHT,
              size
            )
            return (
              <Flex
                key={`${item.url}-${index}`}
                flexDirection="column"
                pt={modulesSpacingMapper?.ImageCarousel.spacingTop}
                pb={modulesSpacingMapper?.ImageCarousel.spacingBottom}
                width={proportions.width}
                onClick={item?.id ? () => props.onItemClick?.(item.id) : undefined}
                className="keen-slider__slide"
                cursor={props?.onItemClick && item?.id ? 'pointer' : 'default'}
              >
                <Image
                  src={imagePath}
                  height={proportions.height}
                  width={proportions.width || IMAGE_HEIGHT}
                  layout="fixed"
                  alt="carousel image"
                  loading="eager"
                />
                {item?.title && (
                  <Text textStyle={'socialLarge.lg'} fontWeight={700} fontSize={'32px'} mt={'3'}>
                    {item.title}
                  </Text>
                )}
                {caption && (
                  <Box width={'100'} mb="1" mt={'2.5'}>
                    <Text textStyle="micro" textAlign={'left'} pr={'2'}>
                      {caption}
                    </Text>
                  </Box>
                )}
              </Flex>
            )
          })}
        </div>
      </>
    </Box>
  )
}
