import { useMemo, useRef } from 'react'

import { useZoom2SearchResult } from '@/features/shared/hooks/queries/useZoom2SearchResult'
import { CloudCategory } from '@/features/shared/utils/categories'
import { useSearchParams } from 'next/navigation'
import {
  positioningTemplates as originalPositioningTemplates,
  shuffleArray,
  PositioningTemplate,
} from './positioningTemplates'

export const usePresenter = () => {
  const searchParams = useSearchParams()
  const category = searchParams?.get('category') as CloudCategory
  const shuffledPositioningTemplatesRef = useRef<PositioningTemplate[]>([])

  const { data } = useZoom2SearchResult(category)

  if (!shuffledPositioningTemplatesRef.current) {
    shuffledPositioningTemplatesRef.current = shuffleArray([...originalPositioningTemplates])
  }

  const positionedRecords = useMemo(() => {
    const records = data?.zoomLevel2.nodes ?? []
    let lastStoryIndex = 0
    const positionedRecords = []
    console.log(' shuffledPositioningTemplatesRef.current', shuffledPositioningTemplatesRef.current)
    const positioningTemplate = shuffledPositioningTemplatesRef.current[0] ?? {}

    for (const position of Object.values(positioningTemplate)) {
      // Using the first shuffled template
      positionedRecords.push({
        ...records[lastStoryIndex],
        position,
        category: category as CloudCategory,
      })
      lastStoryIndex++
    }

    return positionedRecords
  }, [data?.zoomLevel2.nodes, category, shuffledPositioningTemplatesRef.current]) // No need to include the useRef in the dependency array.

  return {
    positionedRecords,
  }
}
