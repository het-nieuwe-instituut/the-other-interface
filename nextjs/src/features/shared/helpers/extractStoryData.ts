import { imageBasePath } from '@/features/modules/modulesConstants'
import {
  ComponentModulesImage,
  HomepageComponentsDynamicZone,
  StoryEntity,
} from 'src/generated/graphql'

const findImageUrl = (components: HomepageComponentsDynamicZone[]): string => {
  const imageComponent = components?.find(
    component => component.__typename === 'ComponentModulesImage'
  ) as ComponentModulesImage

  const url = imageComponent?.image.data?.attributes?.url ?? ''

  return imageBasePath(url) ?? ''
}

export const extractStoryData = (story: StoryEntity | null) => {
  if (!story) {
    return null
  }

  const storyId = story?.id
  const storyLocale = story?.attributes?.locale
  return {
    // TODO property 'description' and 'locale' are not present in all types, so we need to add them to mutch the type Zoom3Record
    title: story?.attributes?.title ?? '',
    thumbnail: [findImageUrl(story?.attributes?.components ?? [])] ?? [],
    locale: storyLocale || 'nl',
    id: storyId || `${Math.floor(Math.random() * (99999 + 1))}`,
    description: story?.attributes?.description ?? '',
  }
}
