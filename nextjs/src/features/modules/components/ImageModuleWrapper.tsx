import { ImageWithCaption } from '@/features/ui/components/image-with-caption/ImageWithCaption'
import { ImageWithCaptionLink } from '@/features/ui/components/image-with-caption/ImageWithCaptionLink'
import { ComponentModulesImage } from 'src/generated/graphql'
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
  const recordHref = component.triplyRecord
    ? getPathByTriplyRecord(component.triplyRecord)
    : undefined
  const storyHref = component.story
    ? getPathByStory(component.story.data?.id ?? undefined)
    : undefined
  if (!src || !alt || !height || !width) {
    return null
  }

  if (recordHref || storyHref) {
    return (
      <ImageWithCaptionLink
        href={recordHref ?? storyHref ?? ''}
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

function getPathByTriplyRecord(triplyRecord: ComponentModulesImage['triplyRecord']) {
  const type = triplyRecord?.data?.attributes?.type?.toLocaleLowerCase()
  const recordId = triplyRecord?.data?.attributes?.recordId
  if (!type || !recordId) {
    return undefined
  }
  return `/detail/${type}/${recordId}`
}

function getPathByStory(id?: string) {
  if (!id) {
    return undefined
  }
  return `/detail/stories/${id}`
}
