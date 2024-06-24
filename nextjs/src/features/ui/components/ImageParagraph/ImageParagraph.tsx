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
    <div className={cn(className)}>
      <TailwindMarkdown className={cn('max-w-[808px] bg-inherit', className)}>
        {component.sideText}
      </TailwindMarkdown>
      <ImageWithCaption
        src={component?.image?.data?.attributes?.url}
        alt={component?.image_alt_text}
        height={component?.image?.data?.attributes?.height}
        width={component?.image?.data?.attributes?.width}
      />
    </div>
  )
}
