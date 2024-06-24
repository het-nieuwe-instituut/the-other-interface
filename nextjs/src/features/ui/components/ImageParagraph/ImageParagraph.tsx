import { cn } from '@/features/ui/utils/cn'
import { TailwindMarkdown } from '../Paragraph/TailwindMarkdown'

import { ImageWithCaption } from '../image-with-caption/ImageWithCaption'
import { DynamicComponents } from '@/features/modules/ModulesRenderer/ModulesRenderer'

export interface ParagraphProps {
  component: Extract<
    NonNullable<DynamicComponents>[number],
    { __typename: 'ComponentModulesSideImageWithText' }
  >
  className?: string
}

export const ImageParagraph = ({ component, className }: ParagraphProps) => {
  if (
    !component?.image?.data?.attributes?.url ||
    !component?.image?.data?.attributes?.height ||
    !component?.image?.data?.attributes?.width
  )
    return null

  return (
    <div className={cn('flex flex-wrap', className)}>
      <div className="w-full md:w-2/3">
        <TailwindMarkdown className={cn('max-w-[808px] bg-inherit', className)}>
          {component.sideText}
        </TailwindMarkdown>
      </div>
      <div className="w-full md:w-1/3">
        <ImageWithCaption
          src={component?.image?.data?.attributes?.url}
          alt={component?.image_alt_text}
          height={component?.image?.data?.attributes?.height}
          width={component?.image?.data?.attributes?.width}
          caption={
            component?.image?.data?.attributes?.caption
              ? component?.image?.data?.attributes?.caption
              : ''
          }
        />
      </div>
    </div>
  )
}
