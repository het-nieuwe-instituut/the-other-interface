import { cn } from '@/features/ui/utils/cn'
import { TailwindMarkdown } from '../Paragraph/TailwindMarkdown'
import { ImageWithCaption } from '../image-with-caption/ImageWithCaption'

export interface ParagraphProps {
  sideText: string
  imageSrc: string
  imageAltText: string
  imageHeight: number
  imageWidth: number
  imageCaption: string
  className?: string
}

export const ImageParagraph = ({
  sideText,
  imageSrc,
  imageAltText,
  imageHeight,
  imageWidth,
  imageCaption,
  className,
}: ParagraphProps) => {
  return (
    <div className={cn('flex flex-wrap', className)}>
      <div className="w-full md:w-2/3">
        <TailwindMarkdown className={cn('max-w-[808px] bg-inherit', className)}>
          {sideText}
        </TailwindMarkdown>
      </div>
      <div className="w-full md:w-1/3">
        <ImageWithCaption
          src={imageSrc}
          alt={imageAltText}
          height={imageHeight}
          width={imageWidth}
          caption={imageCaption}
        />
      </div>
    </div>
  )
}
