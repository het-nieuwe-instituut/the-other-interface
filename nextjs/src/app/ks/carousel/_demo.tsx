'use client'
import { calculateImagePropotions } from '@/features/modules/helpers/modulesHelpers'
import {
  ImageCarousel,
  ImageCarouselItem,
} from '@/features/ui/components/image-carousel/ImageCarousel'

const stubData = [
  {
    id: 1,
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/JEL_Lfa28_22_b9d654ab5c.webp',
    alt: 'Elephants',
    caption: 'some cool caption about captions',
    width: 1080,
    height: 428,
  },
  {
    id: 2,
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/TEN_To743_ccb01e85b6.jpeg',
    alt: 'Elephants',
    caption:
      'some cool caption about captions and a very long caption with a lot of words and stuff i think this is getting to long and i should stop now but i will not stop because i want to see how long this can get',
    width: 1858,
    height: 2400,
  },
  {
    id: 3,
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/MAAX_3155_4a39942bdb.jpeg',
    alt: 'Elephants',
    caption: 'some cool caption about captions',
    width: 2400,
    height: 757,
  },
  {
    id: 4,
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/Ree_14_f649476088.jpeg',
    alt: 'Elephants',
    caption:
      'some cool caption about captions and a very long caption with a lot of words and stuff i think this is getting to long and i should stop now but i will not stop because i want to see how long this can get',
    width: 1600,
    height: 2400,
  },
]
export const Demo = () => {
  return (
    <div>
      <p>Image carousel:</p>

      <ImageCarousel
        getSlidesConfiguration={(maxSlideWidth: number) => {
          if (maxSlideWidth === 0) {
            return []
          }
          const imageHeight = 600

          const slides =
            stubData?.map(current => {
              const margin = current.caption ? -20 : 0
              const calculateWidth = calculateImagePropotions(
                current?.width || 1,
                current?.height || 1,
                imageHeight,
                maxSlideWidth
              ).width
              return { size: (calculateWidth + margin) / maxSlideWidth, spacing: 0 }
            }) ?? []

          return slides
        }}
      >
        {stubData.map(item => (
          <ImageCarouselItem
            key={item.id}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            caption={item.caption}
          />
        ))}
      </ImageCarousel>
      <div>HEY I should not move </div>
    </div>
  )
}
