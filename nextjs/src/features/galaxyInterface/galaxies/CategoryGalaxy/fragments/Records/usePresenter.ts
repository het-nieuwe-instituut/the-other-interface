import { useMemo } from 'react'

import { useZoom2SearchResult } from '@/features/shared/hooks/queries/useZoom2SearchResult'
import { CloudCategory } from '@/features/shared/utils/categories'
import { useSearchParams } from 'next/navigation'
import { positioningTemplate } from './positioningTemplates'

export const usePresenter = () => {
  const searchParams = useSearchParams()
  const category = searchParams?.get('category') as CloudCategory

  const { data } = useZoom2SearchResult(category)

  const positionedRecords = useMemo(() => {
    const records = data?.zoomLevel2.nodes ?? []
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
  }, [data?.zoomLevel2.nodes, category])

  return {
    positionedRecords,
  }
}
