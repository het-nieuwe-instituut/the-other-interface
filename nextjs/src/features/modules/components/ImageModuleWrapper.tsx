import { getTriplyOrStoryHref } from '@/features/editorial/components/getTriplyOrStoryHref'
import { ImageWithCaption } from '@/features/ui/components/image-with-caption/ImageWithCaption'
import { ImageWithCaptionLink } from '@/features/ui/components/image-with-caption/ImageWithCaptionLink'
import { DynamicComponents } from '../ModulesRenderer/ModulesRenderer'

export const ImageModuleWrapper = ({
  component,
}: {
  component: Extract<
    NonNullable<DynamicComponents>[number],
    { __typename: 'ComponentModulesImage' }
  >
}) => {
  const src = component.image?.data?.attributes?.url
  const alt = component.alt_text ?? component.caption ?? ' '
  const height = component.image?.data?.attributes?.height
  const width = component.image?.data?.attributes?.width
  const href = getTriplyOrStoryHref({
    story: component.story ?? undefined,
    triply_record: component.triplyRecord ?? undefined,
  })
  if (!src || !alt || !height || !width) {
    return null
  }

  if (href) {
    return (
      <ImageWithCaptionLink
        href={href}
        src={src}
        alt={alt}
        height={height}
        width={width}
        caption={component.caption ?? undefined}
      />
    )
  }
  return (
    <ImageWithCaption
      src={src}
      alt={alt}
      height={height}
      width={width}
      caption={component.caption ?? undefined}
    />
  )
}
