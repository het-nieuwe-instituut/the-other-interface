import {
  recordMetaArchiveT,
  recordMetaPublicationT,
  recordMetaObjectT,
  recordMetaPersonT,
} from 'locales/locales'
import {
  ArchivesRecordZoomLevel3Type,
  ObjectRecordZoomLevel3Type,
  PeopleRecordZoomLevel3Type,
  PublicationRecordZoomLevel3Type,
} from 'src/generated/graphql'
import { categoryFieldsMapping } from '../configs/recordMetaFieldOrderConfig'
import { CLOUD_CATEGORIES } from '@/features/shared/utils/categories'

export function mapArchivesDataToSections(
  data: ArchivesRecordZoomLevel3Type | null | undefined,
  t: recordMetaArchiveT
): Array<{ title: string | undefined; value: string[] | null; isLink: boolean; key: string }> {
  if (!data) return []
  const fields = categoryFieldsMapping[CLOUD_CATEGORIES.archives]

  return fields
    .map(key => {
      const rawValue = data[key]
      const title = t(key)?.trim()
      const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
      const isLink = key === 'permanentLink'
      return { title, value: values, isLink, key }
    })
    .filter(section => section.value !== null)
}

export function mapPublicationDataToSections(
  data: PublicationRecordZoomLevel3Type | null | undefined,
  t: recordMetaPublicationT
): Array<{ title: string | undefined; value: string[] | null; isLink: boolean; key: string }> {
  if (!data) return []
  const fields = categoryFieldsMapping[CLOUD_CATEGORIES.publications]

  return fields
    .map(key => {
      const rawValue = data[key]
      const title = t(key)?.trim()
      const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
      const isLink = key === 'permanentLink'
      return { title, value: values, isLink, key }
    })
    .filter(section => section.value !== null)
}

export function mapObjectDataToSections(
  data: ObjectRecordZoomLevel3Type | null | undefined,
  t: recordMetaObjectT
): Array<{ title: string | undefined; value: string[] | null; isLink: boolean; key: string }> {
  if (!data) return []
  const fields = categoryFieldsMapping[CLOUD_CATEGORIES.objects]

  return fields
    .map(key => {
      const rawValue = data[key]
      const title = t(key)?.trim()
      const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
      const isLink = key === 'permanentLink'
      return { title, value: values, isLink, key }
    })
    .filter(section => section.value !== null)
}

export function mapPersonDataToSections(
  data: PeopleRecordZoomLevel3Type | null | undefined,
  t: recordMetaPersonT
): Array<{ title: string | undefined; value: string[] | null; isLink: boolean; key: string }> {
  if (!data) return []
  const fields = categoryFieldsMapping[CLOUD_CATEGORIES.people]

  return fields
    .map(key => {
      const rawValue = data[key]
      const title = t(key)?.trim()
      const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
      const isLink = key === 'permanentLink'
      return { title, value: values, isLink, key }
    })
    .filter(section => section.value !== null)
}