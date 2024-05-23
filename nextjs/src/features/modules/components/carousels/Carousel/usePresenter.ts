import useCalculateItemsPerSlide from '@/features/modules/hooks/calculateSlidesSizes'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { useBreakpointValue } from '@chakra-ui/react'
import { chunk } from 'lodash'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import {
  EnumComponentmodulescarouselType,
  ComponentCoreCarouselItem,
  Maybe,
} from 'src/generated/graphql'

export const usePresenter = (
  type: Maybe<EnumComponentmodulescarouselType> | undefined,
  items: Maybe<Maybe<ComponentCoreCarouselItem>[]> | undefined,
  buttonUrl: Maybe<string> | undefined
) => {
  const [currentSlide, updateCurrentSlide] = useState(0)
  const router = useRouter()
  const lang = useLocale()

  const { ITEMS_PER_PAGE } = useCalculateItemsPerSlide(
    type ?? EnumComponentmodulescarouselType.Highlights
  )
  const pagesCount = items && items.length > 0 ? Math.ceil(items.length / ITEMS_PER_PAGE) : 0
  const chunks = chunk<Maybe<ComponentCoreCarouselItem>>(items, ITEMS_PER_PAGE)

  const handlePaginationNext = () => {
    if (currentSlide + 1 !== Math.ceil(pagesCount)) {
      updateCurrentSlide(currentSlide + 1)
    }
  }

  const handlePaginationPrev = () => {
    if (currentSlide !== 0) {
      updateCurrentSlide(currentSlide - 1)
    }
  }

  const handlePressButton = () => {
    if (!buttonUrl) return
    const url = addLocaleToUrl(buttonUrl, lang)
    router.push(url ?? '')
  }

  const showPagination = pagesCount > 1

  const showPaginationDesctop =
    useBreakpointValue({ sm: false, md: false, lg: true, xl: true }) && showPagination

  const showPaginationMobile =
    useBreakpointValue({ sm: true, md: true, lg: false, xl: false, base: true }) && showPagination

  return {
    ITEMS_PER_PAGE,
    currentSlide,
    handlePaginationPrev,
    handlePaginationNext,
    chunks,
    showPaginationDesctop,
    showPaginationMobile,
    pagesCount,
    handlePressButton,
  }
}
