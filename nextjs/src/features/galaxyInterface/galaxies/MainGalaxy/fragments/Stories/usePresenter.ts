import { useMemo } from 'react'

import {
  ComponentModulesImage,
  HomepageComponentsDynamicZone,
  StoryEntity,
} from 'src/generated/graphql'
import { imageBasePath } from '@/features/modules/modulesConstants'
import { PositionedStory } from '../types'
import {
  storiesPositionTemplate1,
  storiesPositionTemplate2,
  storiesPositionTemplate3,
  storiesPositionTemplate4,
  storiesPositionTemplate5,
  storiesPositionTemplate6,
} from './positioningTemplates'

const findImageUrl = (components: HomepageComponentsDynamicZone[]): string => {
  const imageComponent = components?.find(
    component => component.__typename === 'ComponentModulesImage'
  ) as ComponentModulesImage

  const url = imageComponent?.image.data?.attributes?.url ?? ''

  return imageBasePath(url) ?? ''
}

const mapStory = (story: StoryEntity) => {
  const storyId = story?.id
  const storyLocale = story?.attributes?.locale
  return {
    title: story?.attributes?.title ?? '',
    image: findImageUrl(story?.attributes?.components ?? []),
    locale: storyLocale || 'nl',
    id: storyId || `${Math.floor(Math.random() * (99999 + 1))}`,
  }
}

export const usePresenter = (stories: StoryEntity[]) => {
  const positionedStories = useMemo(() => {
    if (!stories) return []

    const positionedStories: PositionedStory[] = []

    storiesPositionTemplate6.forEach((template, index) => {
      const record = stories[index]

      if (record) {
        const mappedStory = mapStory(stories?.[index])

        positionedStories.push({
          ...mappedStory,
          position: template.position,
          grid: template.grid,
        })
      }
    })

    return positionedStories
  }, [stories])

  return {
    positionedStories,
  }
}
