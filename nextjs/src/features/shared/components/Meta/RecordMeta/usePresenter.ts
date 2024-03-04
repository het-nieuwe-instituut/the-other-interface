import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useParams } from 'next/navigation'
import { useRecordMeta } from '@/features/shared/hooks/queries/useRecordMeta'
import { Category } from '@/features/shared/utils/categories'
import { mapDataToSections } from './recordMetaDataMapper'

export const usePresenter = () => {
  const { t: recordMetaT } = useLooseTypeSafeTranslation('recordMeta')

  const params = useParams()
  const id = params?.id as string
  const category = params?.category as Category

  const { data, isLoading } = useRecordMeta(category, id)
  const recordMetaSectionData = mapDataToSections(data, category, recordMetaT)

  return {
    recordMetaT,
    isLoading,
    recordMetaSectionData,
  }
}
