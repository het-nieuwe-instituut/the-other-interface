import { calculateImagePropotions } from '@/features/modules/helpers/modulesHelpers'

export const imageCarouselDefaultSlidesMapper = <T>(
  data: Array<T>,
  {
    maxSlideWidth,
    getHeight,
    getWidth,
    getCaption,
  }: {
    maxSlideWidth: number
    getHeight: (item: T) => number
    getWidth: (item: T) => number
    getCaption?: (item: T) => string | undefined
  }
) => {
  if (maxSlideWidth === 0) {
    return []
  }
  const imageHeight = 600

  const slides =
    data.map(current => {
      const height = getHeight(current)
      const width = getWidth(current)
      const caption = getCaption?.(current)

      if (!current) return { size: 0, spacing: 0 }
      const margin = caption ? -100 : 0
      const calculateWidth = calculateImagePropotions(
        width || 1,
        height || 1,
        imageHeight,
        maxSlideWidth
      ).width
      return { size: (calculateWidth + margin) / maxSlideWidth, spacing: 0 }
    }) ?? []
  console.log(slides)
  return slides
}
