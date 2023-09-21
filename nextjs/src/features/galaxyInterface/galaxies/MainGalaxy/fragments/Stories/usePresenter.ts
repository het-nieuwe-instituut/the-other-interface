import { useMemo } from 'react'

import {
  ComponentModulesImage,
  HomepageComponentsDynamicZone,
  StoryEntity,
} from 'src/generated/graphql'
import { imageBasePath } from '@/features/modules/modulesConstants'
import { PositioningTemplate } from '@/features/shared/types/position'
import { PositionedStory } from '../types'

const positioningTemplate: PositioningTemplate[] = [
  {
    position: {
      top: 0,
      left: 0,
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '1 / 2',
    },
  },
  {
    position: {
      right: 0,
      bottom: 0,
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '2 / 3',
    },
  },
  {
    position: {
      left: 0,
      bottom: 0,
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '3 / 4',
    },
  },
  {
    position: {
      top: 0,
      left: 0,
    },
    grid: {
      gridRow: '1 / 2',
      gridColumn: '4 / 5',
    },
  },
  {
    position: {
      top: 0,
      right: 0,
    },
    grid: {
      gridRow: '2 / 3',
      gridColumn: '4 / 5',
    },
  },
]

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
    const positionedStories: PositionedStory[] = []

    positioningTemplate.forEach((template, index) => {
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
