import { useBreakpointValue } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { EnumComponentmodulescarouselType } from "src/generated/graphql"

export const typeToItemsPerPageDesctop: Record<EnumComponentmodulescarouselType, number> = {
    [EnumComponentmodulescarouselType.Makers]: 4,
    [EnumComponentmodulescarouselType.Highlights]: 2,
    [EnumComponentmodulescarouselType.Combined]: 4,
    [EnumComponentmodulescarouselType.Themes]: 3
}

export const typeToItemsPerPageMobile: Record<EnumComponentmodulescarouselType, number> = {
    [EnumComponentmodulescarouselType.Makers]: 2,
    [EnumComponentmodulescarouselType.Highlights]: 1,
    [EnumComponentmodulescarouselType.Combined]: 2,
    [EnumComponentmodulescarouselType.Themes]: 2
}

const useCalculateItemsPerSlide = (type: EnumComponentmodulescarouselType) => {
    const [ITEMS_PER_PAGE, setItemsPerPage] = useState<number>(1)

    const config = useBreakpointValue(
        { sm: typeToItemsPerPageMobile, md: typeToItemsPerPageMobile, lg: typeToItemsPerPageDesctop, xl: typeToItemsPerPageDesctop }
      ) ?? typeToItemsPerPageDesctop

    useEffect(() => {
        const itemsPerPage = config[type ?? EnumComponentmodulescarouselType.Highlights]
        setItemsPerPage(itemsPerPage)
    }, [type, config])

    return {
        ITEMS_PER_PAGE,
    }
}

export default useCalculateItemsPerSlide
