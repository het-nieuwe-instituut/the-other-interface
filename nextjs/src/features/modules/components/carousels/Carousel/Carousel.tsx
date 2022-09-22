import React, { createRef } from 'react'
import { Box, Button, useTheme, Text } from '@chakra-ui/react'
import { ComponentModulesCarousel, EnumComponentmodulescarouselType } from 'src/generated/graphql'
import { Carousel } from 'react-responsive-carousel'
import CarouselPagination from '../components/CarouselPagination/CarouselPagination'
import CarouselHeader from '../components/CarouselHeader/CarouselHeader'
import { CarouselSlide } from '../components/CarouselSlide/CarouselSlide'
import { usePresenter } from './usePresenter'

interface Props {
    component: ComponentModulesCarousel
    locale?: string
}   


export const CarouselModule = (props: Props) => {
    const carouselRef = createRef<HTMLDivElement>();
    const { title, items, type, buttonText, buttonUrl, description } = props.component
    const theme = useTheme()
    const {showPaginationDesctop, handlePaginationNext, handlePaginationPrev, pagesCount, chunks, currentSlide, showPaginationMobile, handlePressButton } = usePresenter(type, items, buttonUrl)

    return (
        <Box as='div' css={{backgroundColor: theme.colors.white, maxWidth: '1223px'}} p='24px' position={'relative'} ref={carouselRef}>
            <CarouselHeader title={title ?? ''}>
                {
                    showPaginationDesctop ? (
                        <CarouselPagination handlePaginationNext={handlePaginationNext} handlePaginationPrev={handlePaginationPrev} pagesCount={pagesCount} currentSlide={currentSlide + 1} />
                    ) : null
                }
            </CarouselHeader>

            {
                description && (
                    <Box mb={'33px'} width={'63%'}>
                        <Text textStyle='body'>
                            {description}
                        </Text>
                    </Box>
                )
            }

            <Carousel showArrows={false} showThumbs={false} showStatus={false} showIndicators={false} selectedItem={currentSlide}>
                {chunks?.map((chunk, index) => {
                    return <CarouselSlide key={index} items={chunk} type={type ?? EnumComponentmodulescarouselType.Makers} carouselRef={carouselRef} />
                })}
            </Carousel>

            {
                showPaginationMobile && (
                    <Box mb={'45px'}>
                        <CarouselPagination handlePaginationNext={handlePaginationNext} handlePaginationPrev={handlePaginationPrev} pagesCount={pagesCount} currentSlide={currentSlide + 1} />
                    </Box>
                )
            }

            <Box css={{display: 'flex'}} onClick={handlePressButton}>
                <Button>
                    {buttonText}
                </Button>
            </Box>  
        </Box>
    )
}
