import { EditorialPageWrapper } from '@/features/editorial/components/EditorialPageWrapper'
import {
  ThumbnailCarousel,
  ThumbnailCarouselItem,
} from '@/features/ui/components/thumbnail-carousel/ThumbnailCarousel'
import type { NextPage } from 'next'

const stubData = [
  {
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/AAL_Bph88_a_cb4c2865b1.jpg',
    alt: 'test1',
    width: 1818,
    height: 1302,
  },
  {
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/410662563_7047518705367321_2362157213068630432_n_a3ef5e2ed7.jpg',
    alt: 'test2',
    width: 1842,
    height: 1302,
  },
  {
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/Whats_App_Image_2024_02_09_at_17_40_38_3a440a4cf8.jpeg',
    alt: 'test3',
    width: 1736,
    height: 1302,
  },
  {
    src: 'http://localhost:1337/uploads/191_3000x600_f23dd58537.jpg',
    alt: 'test3',
    width: 2323,
    height: 464,
  },
  {
    src: 'http://localhost:1337/uploads/867_600x3000_df33e45e0e.jpg',
    alt: 'test3',
    width: 260,
    height: 1302,
  },
  {
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/AAL_Bph88_a_cb4c2865b1.jpg',
    alt: 'test1',
    width: 1818,
    height: 1302,
  },
  {
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/410662563_7047518705367321_2362157213068630432_n_a3ef5e2ed7.jpg',
    alt: 'test2',
    width: 1842,
    height: 1302,
  },
  {
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/Whats_App_Image_2024_02_09_at_17_40_38_3a440a4cf8.jpeg',
    alt: 'test3',
    width: 1736,
    height: 1302,
  },
  {
    src: 'http://localhost:1337/uploads/191_3000x600_f23dd58537.jpg',
    alt: 'test3',
    width: 2323,
    height: 464,
  },
  {
    src: 'http://localhost:1337/uploads/867_600x3000_df33e45e0e.jpg',
    alt: 'test3',
    width: 260,
    height: 1302,
  },
  {
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/AAL_Bph88_a_cb4c2865b1.jpg',
    alt: 'test1',
    width: 1818,
    height: 1302,
  },
  {
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/410662563_7047518705367321_2362157213068630432_n_a3ef5e2ed7.jpg',
    alt: 'test2',
    width: 1842,
    height: 1302,
  },
  {
    src: 'https://hni-toi-production.s3.eu-central-1.amazonaws.com/Whats_App_Image_2024_02_09_at_17_40_38_3a440a4cf8.jpeg',
    alt: 'test3',
    width: 1736,
    height: 1302,
  },
  {
    src: 'http://localhost:1337/uploads/191_3000x600_f23dd58537.jpg',
    alt: 'test3',
    width: 2323,
    height: 464,
  },
  {
    src: 'http://localhost:1337/uploads/867_600x3000_df33e45e0e.jpg',
    alt: 'test3',
    width: 260,
    height: 1302,
  },
]
const Page: NextPage = () => {
  return (
    <EditorialPageWrapper>
      <div className="grid grid-cols-6 lg:grid-cols-12">
        <div className="col-span-6 flex flex-col gap-3  lg:col-span-7">
          <p>Thumbnail carousel:</p>

          <div className=" border border-black">
            <ThumbnailCarousel>
              {stubData.map((item, index) => (
                <ThumbnailCarouselItem
                  key={index}
                  index={index}
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
              ))}
            </ThumbnailCarousel>
          </div>
        </div>
        <div className="col-span-6 bg-gray-100 lg:col-start-9 lg:col-end-13">side</div>
      </div>
    </EditorialPageWrapper>
  )
}

export default Page
