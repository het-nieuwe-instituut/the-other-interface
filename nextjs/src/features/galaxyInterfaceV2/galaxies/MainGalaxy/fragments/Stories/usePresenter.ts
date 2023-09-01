import { useMemo } from 'react'
import { Position } from '@/features/shared/types/position'

import {
  ComponentModulesImage,
  HomepageComponentsDynamicZone,
  StoryEntity,
} from 'src/generated/graphql'
import { imageBasePath } from '@/features/modules/modulesConstants'

// For readability advantage, we are using the object representation.
type PositioningTemplate = {
  [index: number]: Position | null
}

const positioningTemplate: PositioningTemplate = {
  0: {
    top: 0,
    left: 0,
  },
  1: {
    right: 0,
    bottom: 0,
  },
  2: null,
  3: { top: 0, left: 0 },
  4: null,
  5: null,
  6: { left: 0, bottom: 0 },
  7: { top: 0, right: 0 },
}

const findImageUrl = (components: HomepageComponentsDynamicZone[]): string => {
  const imageComponent = components?.find(
    component => component.__typename === 'ComponentModulesImage'
  ) as ComponentModulesImage

  const url = imageComponent?.image.data?.attributes?.url ?? ''

  return imageBasePath(url) ?? ''
}

export const usePresenter = (stories: StoryEntity[]) => {
  const positionedStories = useMemo(() => {
    let lastStoryIndex = 0

    const mapStory = (story: StoryEntity) => ({
      title: story?.attributes?.title ?? '',
      image: findImageUrl(story?.attributes?.components ?? []),
    })

    return Object.values(positioningTemplate).map(position => {
      if (!position) {
        return null
      } else {
        const mappedStory = mapStory(stories?.[lastStoryIndex])
        lastStoryIndex++
        return { ...mappedStory, position }
      }
    })
  }, [stories])

  return {
    positionedStories,
  }
}
