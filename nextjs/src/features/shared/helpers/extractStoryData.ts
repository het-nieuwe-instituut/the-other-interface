import { imageBasePath } from '@/features/modules/modulesConstants'

import { StoryByIdQuery } from 'src/generated/graphql'

type StoryById = NonNullable<StoryByIdQuery['storyByLocale']['data']>

const findImageUrl = (components: NonNullable<StoryById['attributes']>['components']): string => {
  const imageComponent = components?.find(
    component => component.__typename === 'ComponentModulesImage'
  )

  if (imageComponent && 'image' in imageComponent) {
    const url = imageComponent?.image.data?.attributes?.url ?? ''

    return imageBasePath(url) ?? ''
  }

  return ''
}

export const extractStoryData = (story: StoryById) => {
  if (!story) {
    return null
  }

  const storyId = story?.id
  const storyLocale = story?.attributes?.locale
  return {
    ...story,
    // TODO property 'description' and 'locale' are not present in all types, so we need to add them to mutch the type Zoom3Record
    title: story?.attributes?.title ?? '',
    thumbnail: [findImageUrl(story?.attributes?.components ?? [])] ?? [],
    locale: storyLocale || 'nl',
    id: storyId || `${Math.floor(Math.random() * (99999 + 1))}`,
    description: story?.attributes?.description ?? '',
  }
}
