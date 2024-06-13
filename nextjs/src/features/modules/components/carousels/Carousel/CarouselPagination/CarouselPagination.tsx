import { Flex, Text } from '@chakra-ui/react'

import { PaginatedArrowNext, PaginatedArrowPrev } from './CarouselPaginationStyled'

type Props = {
  handlePaginationPrev: () => void
  handlePaginationNext: () => void
  pagesCount: number
  currentSlide: number
}

const CarouselPagination = (props: Props) => {
  const { handlePaginationPrev, handlePaginationNext, pagesCount, currentSlide } = props
  return (
    <Flex
      alignItems="center"
      justifyContent={{
        sm: 'space-between',
        md: 'space-between',
        base: 'space-between',
        lg: 'initial',
        xl: 'initial',
      }}
    >
      <PaginatedArrowPrev onClick={handlePaginationPrev} />
      <Flex width={'80px'} justifyContent="center">
        <Text textStyle={'small'}>
          {currentSlide} / {pagesCount}
        </Text>
      </Flex>
      <PaginatedArrowNext onClick={handlePaginationNext} />
    </Flex>
  )
}

export default CarouselPagination
