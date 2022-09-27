import React from 'react'
import { Box, Flex, Img, Text, useBreakpointValue } from '@chakra-ui/react'
import { ComponentModulesImageCarousel } from 'src/generated/graphql'
import { Carousel } from 'react-responsive-carousel'
import { imageBasePath } from '../../../modulesConstants'
import { ArrowNextContainer, ArrowPrevContainer } from './ImageCorouselStyled'
import ArrowLeftIcon from '@/icons/arrows/arrow-left-long.svg'
import ArrowRightIcon from '@/icons/arrows/arrow-right-long.svg'

interface Props {
    component: ComponentModulesImageCarousel
    locale?: string
}

export const ImageCarousel = (props: Props) => {
    const { images } = props.component
    const items = images?.data

    const centerSlidePercentage = useBreakpointValue({ sm: 90, md: 90, lg: 70, xl: 70 })

    const renderArrowPrev = (onClickPrev: () => void) => {
        return (
            <ArrowPrevContainer>
                <ArrowLeftIcon onClick={onClickPrev} />
            </ArrowPrevContainer>
        )
    }

    const renderArrowNext = (onClickNext: () => void) => {
        return (
            <ArrowNextContainer>
                <ArrowRightIcon onClick={onClickNext} />
            </ArrowNextContainer>
        )
    }

    return (
        <Box>
            <Carousel
                showArrows={false}
                dynamicHeight={false}
                showThumbs={false}
                centerMode
                centerSlidePercentage={centerSlidePercentage}
                showStatus={false}
                showIndicators={false}
                renderArrowPrev={renderArrowPrev}
                renderArrowNext={renderArrowNext}
            >
                {items?.map((image, index) => {
                    const imagePath = imageBasePath + image?.attributes?.url
                    const caption = image?.attributes?.caption
                    return (
                        <Flex
                            key={`${image.id}-${index}`}
                            backgroundColor={'white'}
                            flexDirection='column'
                            pt="36px"
                            pl="24px"
                            pb="50px"
                        >
                            <Img
                                src={imagePath}
                                h={['285px', '644px', '400px', '480px']}
                                objectFit="scale-down"
                            />
                            {caption && (
                                <Box width={'100'} mb="16px" mt={'10px'}>
                                    <Text textStyle="micro">{caption}</Text>
                                </Box>
                            )}
                        </Flex>
                    )
                })}
            </Carousel>
        </Box>
    )
}
