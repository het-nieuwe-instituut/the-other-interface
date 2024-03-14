import { recordMetaArchiveT, recordMetaPublicationT, recordMetaObjectT } from 'locales/locales'
import {
  ArchivesRecordZoomLevel3Type,
  ObjectRecordZoomLevel3Type,
  PublicationRecordZoomLevel3Type,
} from 'src/generated/graphql'
import { categoryFieldsMapping } from './recordMetaFieldOrderConfig'
import { CLOUD_CATEGORIES } from '@/features/shared/utils/categories'

export function mapArchivesDataToSections(
  data: ArchivesRecordZoomLevel3Type | null | undefined,
  t: recordMetaArchiveT
): Array<{ title: string | undefined; value: string[] | null; isLink: boolean }> {
  if (!data) return []
  const fields = categoryFieldsMapping[CLOUD_CATEGORIES.archives]

  return fields
    .map(key => {
      const rawValue = data[key]
      const title = t(key)?.trim()
      const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
      const isLink = key === 'permanentLink'
      return { title, value: values, isLink }
    })
    .filter(section => section.value !== null)
}

export function mapPublicationDataToSections(
  data: PublicationRecordZoomLevel3Type | null | undefined,
  t: recordMetaPublicationT
): Array<{ title: string | undefined; value: string[] | null; isLink: boolean }> {
  if (!data) return []
  const fields = categoryFieldsMapping[CLOUD_CATEGORIES.publications]

  return fields
    .map(key => {
      const rawValue = data[key]
      const title = t(key)?.trim()
      const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
      const isLink = key === 'permanentLink'
      return { title, value: values, isLink }
    })
    .filter(section => section.value !== null)
}

export function mapObjectDataToSections(
  data: ObjectRecordZoomLevel3Type | null | undefined,
  t: recordMetaObjectT
): Array<{ title: string | undefined; value: string[] | null; isLink: boolean }> {
  if (!data) return []
  const fields = categoryFieldsMapping[CLOUD_CATEGORIES.objects]

  return fields
    .map(key => {
      const rawValue = data[key]
      const title = t(key)?.trim()
      const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
      const isLink = key === 'permanentLink'
      return { title, value: values, isLink }
    })
    .filter(section => section.value !== null)
}
