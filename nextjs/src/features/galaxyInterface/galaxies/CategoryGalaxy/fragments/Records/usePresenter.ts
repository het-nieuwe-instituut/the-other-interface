import { useMemo } from 'react'

import { CloudCategory } from '@/features/shared/utils/categories'
import { useSearchParams } from 'next/navigation'
import { positioningTemplates } from './positioningTemplates'
import { usePositioningTemplates } from '@/features/shared/hooks/usePositioningTemplates'
import { ZoomLevel2Type } from 'src/generated/graphql'
import { useSelector } from 'react-redux'
import { State } from '@/features/shared/configs/store'

export const usePresenter = (records: ZoomLevel2Type[]) => {
  const searchParams = useSearchParams()
  const category = searchParams?.get('category') as CloudCategory
  const searchPageNumber = useSelector((state: State) => state.shared.searchPageNumber)

  const { currentTemplate } = usePositioningTemplates(positioningTemplates, searchPageNumber)

  const positionedRecords = useMemo(() => {
    let lastStoryIndex = 0
    const positionedRecords = []

    for (const position of Object.values(currentTemplate)) {
      positionedRecords.push({
        ...records[lastStoryIndex],
        position,
        category: category as CloudCategory,
      })
      lastStoryIndex++
    }

    return positionedRecords
  }, [records, category, currentTemplate])

  return {
    positionedRecords,
  }
}
