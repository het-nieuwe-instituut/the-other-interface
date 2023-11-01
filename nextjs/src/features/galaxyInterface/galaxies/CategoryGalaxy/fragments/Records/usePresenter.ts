import { useMemo } from 'react'

import { CloudCategory } from '@/features/shared/utils/categories'
import { useSearchParams } from 'next/navigation'
import { positioningTemplates } from './positioningTemplates'
import { usePositioningTemplates } from '@/features/shared/hooks/usePositioningTemplates'
import { ZoomLevel2Type } from 'src/generated/graphql'
import { DEFAULT_PAGE_NUMBER } from '@/features/shared/constants/mainConstants'

export const usePresenter = (records: ZoomLevel2Type[]) => {
  const searchParams = useSearchParams()
  const category = searchParams?.get('category') as CloudCategory
  const page = searchParams
    ? Math.max(DEFAULT_PAGE_NUMBER, Number(searchParams.get('page') as string))
    : DEFAULT_PAGE_NUMBER

  const { currentTemplate } = usePositioningTemplates(positioningTemplates, page)

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

  console.log('positionedRecords', page, positionedRecords)

  return {
    positionedRecords,
  }
}
