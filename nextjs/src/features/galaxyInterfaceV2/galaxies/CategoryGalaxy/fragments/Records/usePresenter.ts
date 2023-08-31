import { useMemo } from 'react'

import { Record } from '../types'
import { Position } from '@/features/shared/types/position'

// For readability advantage, we are using the object representation.
type PositioningTemplate = {
  [index: number]: Position
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
  2: {
    top: 0,
    left: 0,
  },
  3: { top: 0, left: 0 },
  4: {
    top: 0,
    left: 0,
  },
  5: {
    top: 0,
    left: 0,
  },
  6: { left: 0, bottom: 0 },
  7: { top: 0, right: 0 },
  8: {
    top: 0,
    left: 0,
  },
  9: {
    top: 0,
    left: 0,
  },
  10: {
    top: 0,
    left: 0,
  },
  11: {
    top: 0,
    left: 0,
  },
}

export const usePresenter = (records: Record[]) => {
  const positionedRecords = useMemo(() => {
    let lastStoryIndex = 0
    const positionedRecords = []

    for (const position of Object.values(positioningTemplate)) {
      positionedRecords.push({ ...records[lastStoryIndex], position })
      lastStoryIndex++
    }

    return positionedRecords
  }, [records])

  return {
    positionedRecords,
  }
}
