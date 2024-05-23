import {
  useLooseTypeSafeTranslation,
  useTypeSafeTranslation,
} from '@/features/shared/hooks/translations'
import { useParams } from 'next/navigation'
import { useRecordMeta } from '@/features/shared/hooks/queries/useRecordMeta'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import {
  mapArchivesDataToSections,
  mapObjectDataToSections,
  mapPersonDataToSections,
  mapPublicationDataToSections,
} from '../../mappers/recordMetaDataMapper'
import {
  ArchivesRecordZoomLevel3Type,
  ObjectRecordZoomLevel3Type,
  PublicationRecordZoomLevel3Type,
  PeopleRecordZoomLevel3Type,
} from 'src/generated/graphql'

export const usePresenter = () => {
  const { t: recordMetaT } = useLooseTypeSafeTranslation('recordMeta')
  const { t: recordMetaPublicationT } = useTypeSafeTranslation('recordMetaPublication')
  const { t: recordMetaArchiveT } = useTypeSafeTranslation('recordMetaArchive')
  const { t: recordMetaObjectT } = useTypeSafeTranslation('recordMetaObject')
  const { t: recordMetaPersonT } = useTypeSafeTranslation('recordMetaPerson')

  const params = useParams()
  const id = params?.id as string
  const category = params?.category as Category

  const { data, isLoading } = useRecordMeta(category, id)
  let recordMetaSectionData

  if (category === CATEGORIES.archives && data) {
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

  if (category === CATEGORIES.objects) {
    recordMetaSectionData = mapObjectDataToSections(
      data as ObjectRecordZoomLevel3Type,
      recordMetaObjectT
    )
  }

  if (category === CATEGORIES.people) {
    recordMetaSectionData = mapPersonDataToSections(
      data as PeopleRecordZoomLevel3Type,
      recordMetaPersonT
    )
  }

  return {
    recordMetaT,
    isLoading,
    recordMetaSectionData,
  }
}
