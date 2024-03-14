import {
  useLooseTypeSafeTranslation,
  useTypeSafeTranslation,
} from '@/features/shared/hooks/translations'
import { useParams } from 'next/navigation'
import { useRecordMeta } from '@/features/shared/hooks/queries/useRecordMeta'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { mapArchivesDataToSections, mapPublicationDataToSections } from './recordMetaDataMapper'
import {
  ArchivesRecordZoomLevel3Type,
  PublicationRecordZoomLevel3Type,
} from 'src/generated/graphql'

export const usePresenter = () => {
  const { t: recordMetaT } = useLooseTypeSafeTranslation('recordMeta')
  const { t: recordMetaPublicationT } = useTypeSafeTranslation('recordMetaPublication')
  const { t: recordMetaArchiveT } = useTypeSafeTranslation('recordMetaArchive')

  const params = useParams()
  const id = params?.id as string
  const category = params?.category as Category

  const { data, isLoading } = useRecordMeta(category, id)
  let recordMetaSectionData

  if (category === CATEGORIES.archives) {
    recordMetaSectionData = mapArchivesDataToSections(
      data as ArchivesRecordZoomLevel3Type,
      recordMetaArchiveT
    )
  }

  if (category === CATEGORIES.publications) {
    recordMetaSectionData = mapPublicationDataToSections(
      data as PublicationRecordZoomLevel3Type,
      recordMetaPublicationT
    )
  }

  return {
    recordMetaT,
    isLoading,
    recordMetaSectionData,
  }
}
