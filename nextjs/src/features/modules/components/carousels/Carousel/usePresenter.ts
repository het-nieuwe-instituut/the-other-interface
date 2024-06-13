import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { useBreakpointValue } from '@chakra-ui/react'
import { chunk } from 'lodash'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
  EnumComponentmodulescarouselVariant,
  ComponentModulesCarousel,
  ComponentCoreCarouselImage,
  Maybe,
} from 'src/generated/graphql'

export const usePresenter = (
  variant: EnumComponentmodulescarouselVariant,
  items: ComponentModulesCarousel['items'],
  button: ComponentModulesCarousel['explore_collection_button']
) => {
  const [currentSlide, updateCurrentSlide] = useState(0)
  const router = useRouter()
  const lang = useLocale()

  const itemsPerPage = getItemCountPerPage()

  const pagesCount = items && items.length > 0 ? Math.ceil(items.length / itemsPerPage) : 0
  const chunks = chunk<Maybe<ComponentCoreCarouselImage>>(items, itemsPerPage)

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
    if (!button?.url) return
    const url = addLocaleToUrl(button.url, lang)
    router.push(url ?? '')
  }

  const showPagination = pagesCount > 1

  const showPaginationDesktop =
    useBreakpointValue({ sm: false, md: false, lg: true, xl: true }) && showPagination

  const showPaginationMobile =
    useBreakpointValue({ sm: true, md: true, lg: false, xl: false, base: true }) && showPagination

  return {
    itemsPerPage,
    currentSlide,
    handlePaginationPrev,
    handlePaginationNext,
    chunks,
    showPaginationDesktop,
    showPaginationMobile,
    pagesCount,
    handlePressButton,
  }

  function getItemCountPerPage() {
    switch (variant) {
      case EnumComponentmodulescarouselVariant.Four:
        return 4
      case EnumComponentmodulescarouselVariant.Three:
        return 3
      case EnumComponentmodulescarouselVariant.Two:
        return 2
      default:
        throw new Error(`Unknown variant: ${variant}`)
    }
  }
}
