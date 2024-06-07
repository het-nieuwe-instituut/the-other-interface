import {
  ThumbnailCarousel,
  ThumbnailCarouselItem,
} from '@/features/ui/components/thumbnail-carousel/ThumbnailCarousel'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>Thumbnail carousel:</p>

      <div>
        <ThumbnailCarousel>
          <ThumbnailCarouselItem
            index={0}
            src={
              'https://hni-toi-production.s3.eu-central-1.amazonaws.com/AAL_Bph88_a_cb4c2865b1.jpg'
            }
            alt="test1"
          />
          <ThumbnailCarouselItem
            index={1}
            src={
              'https://hni-toi-production.s3.eu-central-1.amazonaws.com/410662563_7047518705367321_2362157213068630432_n_a3ef5e2ed7.jpg'
            }
            alt="test2"
          />
          <ThumbnailCarouselItem
            index={2}
            src={
              'https://hni-toi-production.s3.eu-central-1.amazonaws.com/Whats_App_Image_2024_02_09_at_17_40_38_3a440a4cf8.jpeg'
            }
            alt="test3"
          />
          <ThumbnailCarouselItem
            index={3}
            src={'http://localhost:1337/uploads/191_3000x600_f23dd58537.jpg'}
            alt="test3"
          />
          <ThumbnailCarouselItem
            index={4}
            src={'http://localhost:1337/uploads/867_600x3000_df33e45e0e.jpg'}
            alt="test3"
          />
        </ThumbnailCarousel>
      </div>
    </div>
  )
}

export default Page
