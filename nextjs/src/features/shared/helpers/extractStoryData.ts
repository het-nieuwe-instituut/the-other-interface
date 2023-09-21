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
    title: story?.attributes?.title ?? '',
    image: findImageUrl(story?.attributes?.components ?? []),
    locale: storyLocale || 'nl',
    id: storyId || `${Math.floor(Math.random() * (99999 + 1))}`,
  }
}
