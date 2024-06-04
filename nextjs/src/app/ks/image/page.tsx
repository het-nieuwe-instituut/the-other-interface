import { ImageWithCaption } from '@/features/ui/components/image-with-caption/ImageWithCaption'
import { ImageWithCaptionLink } from '@/features/ui/components/image-with-caption/ImageWithCaptionLink'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>Image with caption:</p>

      <div className="max-w-lg">
        <ImageWithCaption
          src="https://hni-toi-production.s3.eu-central-1.amazonaws.com/thumbnail_AAL_Bph88_a_cb4c2865b1.jpg"
          alt="Elephants"
          caption="some cool caption about captions"
        ></ImageWithCaption>
        <ImageWithCaptionLink
          src="https://hni-toi-production.s3.eu-central-1.amazonaws.com/thumbnail_AAL_Bph88_a_cb4c2865b1.jpg"
          alt="Elephants"
          caption="some cool caption about captions"
          href="https://hni-toi-production.s3.eu-central-1.amazonaws.com/thumbnail_AAL_Bph88_a_cb4c2865b1.jpg"
        ></ImageWithCaptionLink>
      </div>
    </div>
  )
}

export default Page
