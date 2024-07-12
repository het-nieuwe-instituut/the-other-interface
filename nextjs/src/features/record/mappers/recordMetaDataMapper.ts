import { CLOUD_CATEGORIES } from '@/features/shared/utils/categories'
import {
  recordMetaArchiveT,
  recordMetaObjectT,
  recordMetaPersonT,
  recordMetaPublicationT,
} from 'locales/locales'
import {
  ArchivesRecordZoomLevel3Type,
  ObjectRecordZoomLevel3Type,
  PeopleRecordZoomLevel3Type,
  PublicationRecordZoomLevel3Type,
} from 'src/generated/graphql'
import { categoryFieldsMapping } from '../configs/recordMetaFieldOrderConfig'

export function mapArchivesDataToSections(
  data: ArchivesRecordZoomLevel3Type | null | undefined,
  t: recordMetaArchiveT
): Array<{
  title: string | undefined
  value: string[] | null
  isLink: boolean
  key: string
  asteriskSuggestions?: { date: string; name: string; subject: string }[]
}> {
  if (!data) return []
  const fields = categoryFieldsMapping[CLOUD_CATEGORIES.archives]

  return fields
    .map(key => {
      const rawValue = data[key]
      const title = t(key)?.trim()
      const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
      const isLink = key === 'permanentLink'

      // TODO: commented out till we support content, location and subject
      // if (key === 'content') {
      //   const asteriskSuggestions = data.asteriskSuggestions
      //     ?.map(suggestion => {
      //       return {
      //         date: suggestion.asterisk_date_content ?? '',
      //         name: suggestion.asterisk_name_content ?? '',
      //         subject: suggestion.asterisk_subject_content ?? '',
      //       }
      //     })
      //     .filter(v => {
      //         return v.date || v.name || v.subject
      //     })

      //   return { title, value: values, isLink, key, asteriskSuggestions }
      // }

      if (key === 'location') {
        const asteriskSuggestions = data.asteriskSuggestions
          ?.map(suggestion => {
            return {
              date: suggestion.asterisk_date_location ?? '',
              name: suggestion.asterisk_name_location ?? '',
              subject: suggestion.asterisk_subject_location ?? '',
            }
          })
          .filter(v => {
            return v.date || v.name || v.subject
          })

        return { title, value: values, isLink, key, asteriskSuggestions }
      }

      if (key === 'subject') {
        const asteriskSuggestions = data.asteriskSuggestions
          ?.map(suggestion => {
            return {
              date: suggestion.asterisk_date_subject ?? '',
              name: suggestion.asterisk_name_subject ?? '',
              subject: suggestion.asterisk_subject_subject ?? '',
            }
          })
          .filter(v => {
            return v.date || v.name || v.subject
          })

        return { title, value: values, isLink, key, asteriskSuggestions }
      }

      return { title, value: values, isLink, key }
    })
    .filter(section => section.value !== null)
}

export function mapPublicationDataToSections(
  data: PublicationRecordZoomLevel3Type | null | undefined,
  t: recordMetaPublicationT
): Array<{
  title: string | undefined
  value: string[] | null
  isLink: boolean
  key: string
  asteriskSuggestions?: { date: string; name: string; subject: string }[]
}> {
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
): Array<{
  title: string | undefined
  value: string[] | null
  isLink: boolean
  key: string
  asteriskSuggestions?: { date: string; name: string; subject: string }[]
}> {
  if (!data) return []
  const fields = categoryFieldsMapping[CLOUD_CATEGORIES.objects]
  return fields
    .map(key => {
      const rawValue = data[key]
      const title = t(key)?.trim()
      const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
      const isLink = key === 'permanentLink'

      if (key === 'relatedKeywords') {
        const asteriskSuggestions = data.asteriskSuggestions
          ?.map(suggestion => {
            return {
              date: suggestion.asterisk_date_relatedKeyword ?? '',
              name: suggestion.asterisk_name_relatedKeyword ?? '',
              subject: suggestion.asterisk_subject_relatedKeyword ?? '',
            }
          })
          .filter(v => {
            return v.date || v.name || v.subject
          })

        return { title, value: values, isLink, key, asteriskSuggestions }
      }

      if (key === 'geoKeywords') {
        const asteriskSuggestions = data.asteriskSuggestions
          ?.map(suggestion => {
            return {
              date: suggestion.asterisk_date_geoKeywords ?? '',
              name: suggestion.asterisk_name_geoKeywords ?? '',
              subject: suggestion.asterisk_subject_geoKeywords ?? '',
            }
          })
          .filter(v => {
            return v.date || v.name || v.subject
          })

        return { title, value: values, isLink, key, asteriskSuggestions }
      }
      return { title, value: values, isLink, key }
    })
    .filter(section => section.value !== null)
}

export function mapPersonDataToSections(
  data: PeopleRecordZoomLevel3Type | null | undefined,
  t: recordMetaPersonT
): Array<{
  title: string | undefined
  value: string[] | null
  isLink: boolean
  key: string
  asteriskSuggestions?: { date: string; name: string; subject: string }[]
}> {
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
