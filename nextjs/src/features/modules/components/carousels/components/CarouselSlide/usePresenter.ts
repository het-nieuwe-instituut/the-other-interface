import useCalculateItemsPerSlide from "@/features/modules/hooks/calculateSlidesSizes";
import { useBreakpointValue, useDimensions } from "@chakra-ui/react";
import { EnumComponentmodulescarouselType } from "src/generated/graphql";

export const usePresenter = (type: EnumComponentmodulescarouselType, ref: React.RefObject<HTMLDivElement>) => {
    const dimensions = useDimensions(ref, true)
    const { ITEMS_PER_PAGE } = useCalculateItemsPerSlide(type)
    const MARGIN = 20
    const WIDTH = dimensions?.contentBox.width ?? 1223
    const itemWidth = (WIDTH - (MARGIN * (ITEMS_PER_PAGE - 1))) / ITEMS_PER_PAGE
    const isOnlyOneItem = type === EnumComponentmodulescarouselType.Highlights
    const justifySlide = useBreakpointValue({
        sm: isOnlyOneItem && 'center',
        md: isOnlyOneItem && 'center',
        lg: isOnlyOneItem && ' center',
        xl: isOnlyOneItem && 'space-between'
    }) || 'space-between'

    return {
        itemWidth, 
        justifySlide
    }
}