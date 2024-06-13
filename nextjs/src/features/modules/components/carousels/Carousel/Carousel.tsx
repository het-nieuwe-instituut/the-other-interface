import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { createRef } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { ComponentModulesCarousel } from 'src/generated/graphql'
import { usePresenter } from './usePresenter'
import { modulesSpacingMapper } from '@/features/modules/modulesSpacing'
import CarouselPagination from './CarouselPagination/CarouselPagination'

interface Props {
  component: ComponentModulesCarousel
  locale?: string
}

// TODO: implement carousel item & make sure component is working as designed/intended
export const CarouselModule: React.FC<Props> = props => {
  const carouselRef = createRef<HTMLDivElement>()
  const { title, items, variant, explore_collection_button, description } = props.component
  const {
    showPaginationDesktop,
    handlePaginationNext,
    handlePaginationPrev,
    pagesCount,
    chunks,
    currentSlide,
    showPaginationMobile,
    handlePressButton,
  } = usePresenter(variant, items, explore_collection_button)

  return (
    <Box
      as="div"
      backgroundColor={'inherit'}
      pt={modulesSpacingMapper?.Carousel.spacingTop}
      pb={modulesSpacingMapper?.Carousel.spacingBottom}
      position={'relative'}
      ref={carouselRef}
    >
      <Flex alignItems="center" justifyContent="space-between" mb={'4'}>
        <Text textStyle={'h1'}>{title}</Text>
        {showPaginationDesktop && renderPagination()}
      </Flex>

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
        {chunks?.map((_chunk, index) => {
          return <div key={index}>TODO: implement carousel item</div>
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

      {explore_collection_button?.text && (
        <Flex>
          <Button onClick={handlePressButton}>{explore_collection_button.text}</Button>
        </Flex>
      )}
    </Box>
  )

  function renderPagination() {
    return (
      <CarouselPagination
        handlePaginationNext={handlePaginationNext}
        handlePaginationPrev={handlePaginationPrev}
        pagesCount={pagesCount}
        currentSlide={currentSlide + 1}
      />
    )
  }
}
