import { CLOUD_CATEGORIES } from '@/features/shared/utils/categories'
import {
  recordMetaArchiveT,
  recordMetaObjectT,
  recordMetaPersonT,
  recordMetaPublicationT,
} from 'locales/locales'
import {
  ArchivesRecordZoomLevel3Type,
  EnrichedBaseArchivesRecordZoomLevel3Type,
  EnrichedBaseObjectRecordZoomLevel3Type,
  EnrichedBasePeopleRecordZoomLevel3Type,
  EnrichedBasePublicationRecordZoomLevel3Type,
  ExternalSource,
  Maybe,
  ObjectRecordZoomLevel3Type,
  PeopleRecordZoomLevel3Type,
  PublicationRecordZoomLevel3Type,
} from 'src/generated/graphql'
import { categoryFieldsMapping } from '../configs/recordMetaFieldOrderConfig'

type ArchiveKey = (typeof categoryFieldsMapping)['archives'][number]
function mapArchivesEnrichedSources(
  key: ArchiveKey,
  enrichedSource: EnrichedBaseArchivesRecordZoomLevel3Type
) {
  const keysToTry: ArchiveKey[] = [
    'access',
    'custodialHistory',
    'description',
    'existence',
    'existenceLocation',
    'period',
    'photographCreator',
    'referenceCode',
    'rights',
    'size',
    'sources',
    'systemOfArrangement',
    'descriptionLevel',
    'externalURI',
    'permanentLink',
    'titleType',
  ]
  return getValidEnrichedSource(enrichedSource, key, keysToTry)
}
type PublicationKey = (typeof categoryFieldsMapping)['publications'][number]
function mapPublicationEnrichedSources(
  key: PublicationKey,
  enrichedSource: EnrichedBasePublicationRecordZoomLevel3Type
) {
  const keysToTry: PublicationKey[] = [
    'authorRole',
    'authors',
    'availability',
    'category',
    'codeOfArchive',
    'edition',
    'illustration',
    'isbn',
    'language',
    'number',
    'pages',
    'placeOfPublication',
    'publisher',
    'relatedKeyword',
    'series',
    'subType',
    'yearOfPublication',
    'geoKeyword',
    'permanentLink',
  ]
  return getValidEnrichedSource(enrichedSource, key, keysToTry)
}
type ObjectKey = (typeof categoryFieldsMapping)['objects'][number]
function mapObjectEnrichedSources(
  key: ObjectKey,
  enrichedSource: EnrichedBaseObjectRecordZoomLevel3Type
) {
  const keysToTry: ObjectKey[] = [
    'archiveCode',
    'creditLine',
    'date',
    'dimension',
    'geoKeywords',
    'hasParts',
    'maker',
    'materials',
    'objectName',
    'objectNumber',
    'objectType',
    'relatedKeywords',
    'rights',
    'scale',
    'techniques',
    'title',
    'permanentLink',
  ]
  return getValidEnrichedSource(enrichedSource, key, keysToTry)
}
type PeopleKey = (typeof categoryFieldsMapping)['people'][number]
function mapPeopleEnrichedSources(
  key: PeopleKey,
  enrichedSource: EnrichedBasePeopleRecordZoomLevel3Type
) {
  const keysToTry: PeopleKey[] = [
    'association',
    'birthDate',
    'birthPlace',
    'deathDate',
    'deathPlace',
    'externalSource',
    'gender',
    'nameVariations',
    'nationality',
    'period',
    'permanentLink',
  ]

  return getValidEnrichedSource(enrichedSource, key, keysToTry)
}

interface EnrichedSource {
  externalSourceType: ExternalSource
  externalSourceUrl: string
}
function getValidEnrichedSource<S extends EnrichedSource, K extends keyof S>(
  enrichedSource: S,
  key: K,
  keysToTry: K[]
) {
  const validKey: K | undefined = keysToTry.find(k => key === k && !!enrichedSource[k])
  if (!validKey) {
    return
  }
  const value = enrichedSource[validKey]
  if (!value) {
    return
  }
  if (!enrichedSource.externalSourceUrl || enrichedSource.externalSourceUrl === '') {
    return
  }
  return {
    externalSourceType: enrichedSource.externalSourceType,
    externalSourceUrl: enrichedSource.externalSourceUrl,
    value,
  }
}

export function mapArchivesDataToSections(
  data: ArchivesRecordZoomLevel3Type | null | undefined,
  t: recordMetaArchiveT
) {
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

      const filterEnrichedSources = data.enrichedSources?.reduce<
        {
          externalSourceType: ExternalSource | undefined
          externalSourceUrl: Maybe<string> | undefined
          value: string | null
        }[]
      >((acc, enrichedSource) => {
        const mappedSource = mapArchivesEnrichedSources(key, enrichedSource)

        if (mappedSource) {
          return [...acc, mappedSource]
        }
        return acc
      }, [])

      return { title, value: values, isLink, key, enrichedSources: filterEnrichedSources }
    })
    .filter(section => section.value !== null)
}

export function mapPublicationDataToSections(
  data: PublicationRecordZoomLevel3Type | null | undefined,
  t: recordMetaPublicationT
) {
  if (!data) return []
  const fields = categoryFieldsMapping[CLOUD_CATEGORIES.publications]

  return fields
    .map(key => {
      const rawValue = data[key]
      const title = t(key)?.trim()
      const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
      const isLink = key === 'permanentLink'

      const filterEnrichedSources = data.enrichedSources?.reduce<
        {
          externalSourceType: ExternalSource | undefined
          externalSourceUrl: Maybe<string> | undefined
          value: string | null
        }[]
      >((acc, enrichedSource) => {
        const mappedSource = mapPublicationEnrichedSources(key, enrichedSource)

        if (mappedSource) {
          return [...acc, mappedSource]
        }
        return acc
      }, [])

      return { title, value: values, isLink, key, enrichedSources: filterEnrichedSources }
    })
    .filter(section => section.value !== null)
}

export function mapObjectDataToSections(
  data: ObjectRecordZoomLevel3Type | null | undefined,
  t: recordMetaObjectT
) {
  if (!data) return []
  const fields = categoryFieldsMapping[CLOUD_CATEGORIES.objects]
  return fields
    .map(key => {
      const rawValue = data[key]
      const title = t(key)?.trim()
      const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
      const isLink = key === 'permanentLink'

      const filterEnrichedSources = data.enrichedSources?.reduce<
        {
          externalSourceType: ExternalSource | undefined
          externalSourceUrl: Maybe<string> | undefined
          value: string | null
        }[]
      >((acc, enrichedSource) => {
        const mappedSource = mapObjectEnrichedSources(key, enrichedSource)

        if (mappedSource) {
          return [...acc, mappedSource]
        }
        return acc
      }, [])

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

        return {
          title,
          value: values,
          isLink,
          key,
          asteriskSuggestions,
          externalSources: data.enrichedSources,
        }
      }

      //   return { title, value: values, isLink, key, asteriskSuggestions }
      // }

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

        return {
          title,
          value: values,
          isLink,
          key,
          asteriskSuggestions,
          enrichedSources: filterEnrichedSources,
        }
      }
      return { title, value: values, isLink, key }
    })
    .filter(section => section.value !== null)
}

export function mapPersonDataToSections(
  data: PeopleRecordZoomLevel3Type | null | undefined,
  t: recordMetaPersonT
) {
  if (!data) return []
  const fields = categoryFieldsMapping[CLOUD_CATEGORIES.people]

  return fields
    .map(key => {
      const rawValue = data[key]
      const title = t(key)?.trim()
      const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
      const isLink = key === 'permanentLink'
      const filterEnrichedSources = data.enrichedSources?.reduce<
        {
          externalSourceType: ExternalSource | undefined
          externalSourceUrl: Maybe<string> | undefined
          value: string | null
        }[]
      >((acc, enrichedSource) => {
        const mappedSource = mapPeopleEnrichedSources(key, enrichedSource)

        if (mappedSource) {
          return [...acc, mappedSource]
        }
        return acc
      }, [])

      return { title, value: values, isLink, key, enrichedSources: filterEnrichedSources }
    })
    .filter(section => section.value !== null)
}
