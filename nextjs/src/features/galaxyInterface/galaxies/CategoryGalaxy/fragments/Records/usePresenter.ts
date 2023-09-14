import { useMemo } from 'react'

import { Record } from '../types'
import { Position } from '@/features/shared/types/position'
import { CloudCategory } from '@/features/shared/utils/categories'
import { useSearchParams } from 'next/navigation'

// For readability advantage, we are using the object representation.
type PositioningTemplate = {
  [index: number]: Position
}

const positioningTemplate: PositioningTemplate = {
  0: {
    top: 0,
    left: '15%',
  },
  1: {
    left: 0,
    bottom: 0,
  },
  2: {
    top: '10%',
    left: '15%',
  },
  3: { top: 0, left: 0 },
  4: {
    top: '10%',
    left: 0,
  },
  5: {
    bottom: 0,
    left: '15%',
  },
  6: { left: 0, top: 0 },
  7: { top: '10%', right: 0 },
  8: {
    top: 0,
    right: 0,
  },
  9: {
    right: 0,
    bottom: 0,
  },
  10: { top: '10%', right: 0 },
  11: {
    top: 0,
    left: '15%',
  },
}

export const usePresenter = (records: Record[]) => {
  const searchParams = useSearchParams()
  const category = searchParams?.get('category')

  const positionedRecords = useMemo(() => {
    let lastStoryIndex = 0
    const positionedRecords = []

    for (const position of Object.values(positioningTemplate)) {
      positionedRecords.push({
        ...records[lastStoryIndex],
        position,
        category: category as CloudCategory,
      })
      lastStoryIndex++
    }

    return positionedRecords
  }, [records, category])

  return {
    positionedRecords,
  }
}
