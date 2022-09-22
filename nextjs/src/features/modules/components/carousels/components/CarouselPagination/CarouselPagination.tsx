import { Box, Text } from "@chakra-ui/react"
import { PaginatedArrowNext, PaginatedArrowPrev } from "./CarouselPaginationStyled"

type Props = {
    handlePaginationPrev: () => void;
    handlePaginationNext: () => void;
    pagesCount: number
    currentSlide: number
}

const CarouselPagination = (props : Props) => {
    const { handlePaginationPrev, handlePaginationNext, pagesCount, currentSlide} = props
    return (
        <Box css={{display: 'flex', alignItems: 'center'}} justifyContent={{sm: 'space-between', md: 'space-between', base: 'space-between', lg: 'initial', xl: 'initial'}}>
            <PaginatedArrowPrev onClick={handlePaginationPrev}/>
            <Box width={'80px'} css={{display: 'flex', justifyContent: 'center'}}>
                <Text textStyle={'small'}>{currentSlide} / {pagesCount}</Text>
            </Box>
            <PaginatedArrowNext onClick={handlePaginationNext}/>
        </Box>
    )
}

export default CarouselPagination