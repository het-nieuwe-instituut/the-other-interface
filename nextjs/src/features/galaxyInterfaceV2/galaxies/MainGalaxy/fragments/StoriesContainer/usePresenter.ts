import { useMemo } from 'react'
import { Position, Story } from '../types'

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

export const usePresenter = (stories: Story[]) => {
  const positionedStories = useMemo(() => {
    let lastStoryIndex = 0
    const positionedStories = []

    for (const position of Object.values(positioningTemplate)) {
      if (!position) {
        positionedStories.push(null)
      } else {
        positionedStories.push({ ...stories[lastStoryIndex], position })
        lastStoryIndex++
      }
    }

    return positionedStories
  }, [stories])

  return {
    positionedStories,
  }
}
