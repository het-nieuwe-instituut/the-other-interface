import { useBreakpointValue } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { Enum_Componentmodulescarousel_Type } from "src/generated/graphql"

export const typeToItemsPerPageDesctop: Record<Enum_Componentmodulescarousel_Type, number> = {
    [Enum_Componentmodulescarousel_Type.NotbleMakers]: 4,
    [Enum_Componentmodulescarousel_Type.CollectionHighlights]: 2,
    [Enum_Componentmodulescarousel_Type.CollectionHighlightsWithMakers]: 4,
    [Enum_Componentmodulescarousel_Type.FeaturedThemes]: 3
}

export const typeToItemsPerPageMobile: Record<Enum_Componentmodulescarousel_Type, number> = {
    [Enum_Componentmodulescarousel_Type.NotbleMakers]: 2,
    [Enum_Componentmodulescarousel_Type.CollectionHighlights]: 1,
    [Enum_Componentmodulescarousel_Type.CollectionHighlightsWithMakers]: 2,
    [Enum_Componentmodulescarousel_Type.FeaturedThemes]: 2
}

const useCalculateItemsPerSlide = (type: Enum_Componentmodulescarousel_Type) => {
    const [ITEMS_PER_PAGE, setItemsPerPage] = useState<number>(1)

    const config = useBreakpointValue(
        { sm: typeToItemsPerPageMobile, md: typeToItemsPerPageMobile, lg: typeToItemsPerPageDesctop, xl: typeToItemsPerPageDesctop }
      ) ?? typeToItemsPerPageDesctop

    useEffect(() => {
        const itemsPerPage = config[type ?? Enum_Componentmodulescarousel_Type.CollectionHighlights]
        setItemsPerPage(itemsPerPage)
    }, [type, config])

    return {
        ITEMS_PER_PAGE,
    }
}

export default useCalculateItemsPerSlide
