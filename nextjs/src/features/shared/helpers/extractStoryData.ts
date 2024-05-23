import { RecordType } from '@/features/galaxyInterface/galaxies/CategoryGalaxy/fragments/types'
import { imageBasePath } from '@/features/modules/modulesConstants'

import { SearchByStoriesQuery, StoryByIdQuery } from 'src/generated/graphql'
import { DeepPartial } from '../types/helpers'

type StoryById = NonNullable<StoryByIdQuery['storyByLocale']['data']>
type SearchStory = NonNullable<SearchByStoriesQuery['stories']['data']>[0]

const findImageUrl = (
  components: DeepPartial<NonNullable<StoryById['attributes']>['components']>
): string => {
  const imageComponent = components?.find(
    component => component?.__typename === 'ComponentModulesImage'
  )

  if (imageComponent && 'image' in imageComponent) {
    const url = imageComponent?.image?.data?.attributes?.url ?? ''

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

export const storyToRecordMapper = (story: SearchStory): RecordType => {
  return {
    title: story?.attributes?.title ?? '',
    thumbnail: findImageUrl(story?.attributes?.components ?? []) ?? '',
    id: story.id,
  }
}
