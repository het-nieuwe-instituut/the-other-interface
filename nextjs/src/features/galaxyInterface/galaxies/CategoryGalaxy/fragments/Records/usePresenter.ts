import { useMemo } from 'react'

import { CloudCategory } from '@/features/shared/utils/categories'
import { useSearchParams } from 'next/navigation'
import { positioningTemplates } from './positioningTemplates'
import { usePositioningTemplates } from '@/features/shared/hooks/usePositioningTemplates'
import { ZoomLevel2Type } from 'src/generated/graphql'
import { usePageNumber } from '@/features/shared/hooks/usePageNumber'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'

export const usePresenter = (records: ZoomLevel2Type[]) => {
  const searchParams = useSearchParams()
  const { t } = useTypeSafeTranslation('category')
  const category = searchParams?.get('category') as CloudCategory
  const { pageNumber } = usePageNumber()

  const { currentTemplate } = usePositioningTemplates(positioningTemplates, pageNumber)

  const positionedRecords = useMemo(() => {
    let lastStoryIndex = 0
    const positionedRecords = []

    for (const position of Object.values(currentTemplate)) {
      const record = records[lastStoryIndex]

      if (!record) break

      positionedRecords.push({
        ...record,
        key: `${pageNumber}-${lastStoryIndex}`,
        position,
        category: category as CloudCategory,
      })
      lastStoryIndex++
    }

    return positionedRecords
  }, [records, category, currentTemplate, pageNumber])

  return {
    positionedRecords,
    t,
  }
}
