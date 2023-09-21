import { useMemo } from 'react'

import { StoryEntity } from 'src/generated/graphql'
import { Position } from '@/features/shared/types/position'
import { extractStoryData } from '@/features/shared/helpers/extractStoryData'

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

export const usePresenter = (stories: StoryEntity[]) => {
  const positionedStories = useMemo(() => {
    let lastStoryIndex = 0

    return Object.values(positioningTemplate).map(position => {
      if (!position) {
        return null
      } else {
        const mappedStory = extractStoryData(stories?.[lastStoryIndex])
        if (!mappedStory) return null
        lastStoryIndex++
        return { ...mappedStory, position }
      }
    })
  }, [stories])

  return {
    positionedStories,
  }
}
