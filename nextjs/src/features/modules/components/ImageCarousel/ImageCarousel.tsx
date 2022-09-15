import React from 'react'
import { Box, Img, Text, useBreakpointValue, useTheme } from '@chakra-ui/react'
import { ComponentModulesImageCarousel } from 'src/generated/graphql'
import { Carousel } from 'react-responsive-carousel'
import { imageBasePath } from '../../modulesConstants'
import { ArrowNextContainer, ArrowPrevContainer } from './ImageCorouselStyled'
import ArrowLeftIcon from '@/icons/arrows/arrow-left-long.svg'
import ArrowRightIcon from '@/icons/arrows/arrow-right-long.svg'

interface Props {
    component: ComponentModulesImageCarousel
    locale?: string
}

export const ImageCarousel = (props: Props) => {
    const { images } = props.component
    const theme = useTheme()
    const items = images?.data

    const centerSlidePercentage = useBreakpointValue(
        { sm: 90, md: 90, lg: 70, xl: 70 }
      )

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
                <ArrowRightIcon onClick={onClickNext}/>
            </ArrowNextContainer>
        )
    }

    return (
        <Box>
            <Carousel showArrows={false} dynamicHeight={false} showThumbs={false} centerMode centerSlidePercentage={centerSlidePercentage} showStatus={false} showIndicators={false} renderArrowPrev={renderArrowPrev} renderArrowNext={renderArrowNext}>
                {items?.map((image, index) => {
                    const imagePath = imageBasePath + image?.attributes?.url
                    const caption = image?.attributes?.caption
                    return (
                        <Box key={`${image.id}-${index}`} css={{'backgroundColor': theme.colors.white, textAlign: 'left'}} pt='36px' pl='24px' pb='50px'>
                            <Img   
                                src={imagePath}
                                w={['397px', '397px','397px', '952px']}
                                h={['220px', '220px', '220px', '621px']}
                                objectFit='cover'
                             />
                            {caption && (
                                <Box width={'100'} mb='16px' mt={'10px'}>
                                    <Text textStyle="micro">{caption}</Text>
                                </Box>
                            )}
                        </Box>
                    )
                })}
            </Carousel>
        </Box>
    )
}
