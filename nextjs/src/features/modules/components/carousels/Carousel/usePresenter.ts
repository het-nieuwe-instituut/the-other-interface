import useCalculateItemsPerSlide from "@/features/modules/hooks/calculateSlidesSizes"
import { splitArrayByChunks } from "@/features/shared/utils/arrays"
import { useBreakpointValue } from "@chakra-ui/react"
import Router  from "next/router"
import { useState } from "react"
import { EnumComponentmodulescarouselType, ComponentCoreCarouselItem, Maybe } from "src/generated/graphql"

export const usePresenter = (type: Maybe<EnumComponentmodulescarouselType> | undefined, items: Maybe<Maybe<ComponentCoreCarouselItem>[]> | undefined, buttonUrl: Maybe<string> | undefined) => {
    const [currentSlide, updateCurrentSlide] = useState(0)
    const { ITEMS_PER_PAGE } = useCalculateItemsPerSlide(type ?? EnumComponentmodulescarouselType.Highlights)
    const pagesCount = items && items.length > 0 ? Math.ceil(items.length / ITEMS_PER_PAGE) : 0
    const chunks = splitArrayByChunks<Maybe<ComponentCoreCarouselItem>>(items, ITEMS_PER_PAGE)

    const handlePaginationNext = () => {
        if (currentSlide + 1 !== Math.ceil(pagesCount)) {
            updateCurrentSlide(currentSlide + 1)
        }
    }

    const handlePaginationPrev = () => {
        if (currentSlide !== 0) {
            updateCurrentSlide( currentSlide - 1)
        }
    }

    const handlePressButton = () => {
        Router.push(buttonUrl ?? '')
    }

    const showPagination = pagesCount > 1;

    const showPaginationDesctop = useBreakpointValue(
        { sm: false, md: false, lg: true, xl: true }
    ) && showPagination

    const showPaginationMobile = useBreakpointValue(
        { sm: true, md: true, lg: false, xl: false }
    ) && showPagination

    return {
        ITEMS_PER_PAGE,
        currentSlide,
        handlePaginationPrev,
        handlePaginationNext,
        chunks,
        showPaginationDesctop,
        showPaginationMobile,
        pagesCount,
        handlePressButton
    }
}