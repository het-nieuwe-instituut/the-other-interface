import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { ComponentModulesImageCarousel, UploadFileEntity } from 'src/generated/graphql'
import { imageBasePath } from '../../../modulesConstants'
import { ArrowNextContainer, ArrowPrevContainer } from './ImageCorouselStyled'
import ArrowLeftIcon from '@/icons/arrows/arrow-left-long.svg'
import ArrowRightIcon from '@/icons/arrows/arrow-right-long.svg'
import Image from 'next/image'
import usePresenter from './usePresenter'
import colors from '@/features/shared/styles/theme/foundations/colors'

interface Props {
    component: ComponentModulesImageCarousel
    locale?: string
}

const IMAGE_HEIGHT = 600

export const ImageCarousel = (props: Props) => {
    const { images } = props.component
    const items = images?.data
    const { carouselRef, handlePaginationPrev, handlePaginationNext, sliderRef, calculateImagePropotions, size } =
        usePresenter(items)

    return (
        <Box as="div" backgroundColor={colors.white} ref={carouselRef} position="relative" pl={'24px'}>
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
                        const imagePath = imageBasePath + item?.attributes?.url
                        const caption = item?.attributes?.caption
                        const proportions = calculateImagePropotions(originalWidth, originalHeight, IMAGE_HEIGHT, size)
                        return (
                            <Flex
                                key={`${item.id}-${index}`}
                                flexDirection="column"
                                pt="9"
                                width={proportions.width}
                                height={proportions.height || IMAGE_HEIGHT}
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
                                    <Box width={'100'} mb="16px" mt={'10px'}>
                                        <Text textStyle="micro" textAlign={'left'}>
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
