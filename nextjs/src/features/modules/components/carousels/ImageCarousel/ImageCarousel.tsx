import { imageBasePath } from '@/features/modules/modulesConstants'
import ArrowLeftIcon from '@/icons/arrows/arrow-left-long.svg'
import ArrowRightIcon from '@/icons/arrows/arrow-right-long.svg'
import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/legacy/image'
import React from 'react'

import { ComponentModulesImageCarousel, UploadFileEntity } from 'src/generated/graphql'

import { ArrowNextContainer, ArrowPrevContainer } from './ImageCorouselStyled'
import usePresenter from './usePresenter'
import { modulesSpacingMapper } from '@/features/modules/modulesSpacing'

interface Props {
  component: ComponentModulesImageCarousel
  locale?: string
}

const IMAGE_HEIGHT = 600

export const ImageCarousel = (props: Props) => {
  const { images } = props.component
  const items = images?.data
  const {
    carouselRef,
    handlePaginationPrev,
    handlePaginationNext,
    sliderRef,
    calculateImagePropotions,
    size,
  } = usePresenter(items)

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
          {items?.map((item: UploadFileEntity, index) => {
            const originalHeight = item?.attributes?.height ?? 1
            const originalWidth = item?.attributes?.width ?? 1
            const imagePath = imageBasePath(item?.attributes?.url) || 'broken'
            const caption = item?.attributes?.caption
            const proportions = calculateImagePropotions(
              originalWidth,
              originalHeight,
              IMAGE_HEIGHT,
              size
            )
            return (
              <Flex
                key={`${item.id}-${index}`}
                flexDirection="column"
                pt={modulesSpacingMapper?.ImageCarousel.spacingTop}
                pb={modulesSpacingMapper?.ImageCarousel.spacingBottom}
                width={proportions.width}
                className="keen-slider__slide"
              >
                <Image
                  src={imagePath}
                  height={proportions.height}
                  width={proportions.width || IMAGE_HEIGHT}
                  layout="fixed"
                  alt="carousel image"
                  loading="eager"
                />
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
