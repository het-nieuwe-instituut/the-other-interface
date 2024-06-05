'use client'
import { calculateImagePropotions } from '@/features/modules/helpers/modulesHelpers'
import {
  ImageCarousel,
  ImageCarouselItem,
} from '@/features/ui/components/image-carousel/ImageCarousel'
import { imageCarouselDefaultSlidesMapper } from '@/features/ui/components/image-carousel/mappers'

const stubData = [
  {
    id: 1,
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/JEL_Lfa28_22_b9d654ab5c.webp',
    alt: 'Elephants',
    caption:
      'some cool caption about captions and a very long caption with a lot of words and stuff i think this is getting to long and i should stop now but i will not stop because i want to see how long this can get  long caption with a lot of words and stuff i think this is getting to long and i should stop now but i will not stop because i want to see how long this can get  long caption with a lot of words and stuff i think this is getting to long and i should stop now but i will not stop because i want to see how long this can get',
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
    href: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/TEN_To743_ccb01e85b6.jpeg',
  },
  {
    id: 3,
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/MAAX_3155_4a39942bdb.jpeg',
    alt: 'Elephants',
    caption:
      'some cool caption about captions and a very long caption with a lot of words and stuff i think this is getting to long and i should stop now but i will not stop because i want to see how long this can get',
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
        getSlidesConfiguration={max =>
          imageCarouselDefaultSlidesMapper(stubData, {
            maxSlideWidth: max,
            getHeight: story => story.height ?? 0,
            getWidth: story => story.width ?? 0,
            getCaption: story => story.caption ?? undefined,
          })
        }
      >
        {stubData.map(item => {
          return (
            <ImageCarouselItem
              href={item.href}
              key={item.id}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              caption={item.caption}
            />
          )
        })}
      </ImageCarousel>
      <div>HEY I should not move </div>
    </div>
  )
}
