import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { createRef } from 'react'
import { Carousel } from 'react-responsive-carousel'

import { ComponentModulesCarousel, EnumComponentmodulescarouselType } from 'src/generated/graphql'

import CarouselHeader from '../components/CarouselHeader/CarouselHeader'
import CarouselPagination from '../components/CarouselPagination/CarouselPagination'
import { CarouselSlide } from '../components/CarouselSlide/CarouselSlide'
import { usePresenter } from './usePresenter'

interface Props {
  component: ComponentModulesCarousel
  locale?: string
}

export const CarouselModule: React.FC<Props> = props => {
  const carouselRef = createRef<HTMLDivElement>()
  const { title, items, type, buttonText, buttonUrl, description } = props.component
  const {
    showPaginationDesctop,
    handlePaginationNext,
    handlePaginationPrev,
    pagesCount,
    chunks,
    currentSlide,
    showPaginationMobile,
    handlePressButton,
  } = usePresenter(type, items, buttonUrl)

  return (
    <Box
      as="div"
      backgroundColor={'inherit'}
      px={6}
      paddingBottom={props.component.carouselModuleLayout?.spacingBottom ?? undefined}
      paddingTop={props.component.carouselModuleLayout?.spacingTop ?? undefined}
      position={'relative'}
      ref={carouselRef}
    >
      <CarouselHeader title={title ?? ''}>
        {showPaginationDesctop ? (
          <CarouselPagination
            handlePaginationNext={handlePaginationNext}
            handlePaginationPrev={handlePaginationPrev}
            pagesCount={pagesCount}
            currentSlide={currentSlide + 1}
          />
        ) : null}
      </CarouselHeader>

      {description && (
        <Box mb={'8'} width={'63%'}>
          <Text textStyle="body">{description}</Text>
        </Box>
      )}

      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        selectedItem={currentSlide}
      >
        {chunks?.map((chunk, index) => {
          return (
            <CarouselSlide
              key={index}
              items={chunk}
              type={type ?? EnumComponentmodulescarouselType.Makers}
              carouselRef={carouselRef}
            />
          )
        })}
      </Carousel>

      {showPaginationMobile && (
        <Box mb={'12'}>
          <CarouselPagination
            handlePaginationNext={handlePaginationNext}
            handlePaginationPrev={handlePaginationPrev}
            pagesCount={pagesCount}
            currentSlide={currentSlide + 1}
          />
        </Box>
      )}

      {buttonText && (
        <Flex>
          <Button onClick={handlePressButton}>{buttonText}</Button>
        </Flex>
      )}
    </Box>
  )
}
