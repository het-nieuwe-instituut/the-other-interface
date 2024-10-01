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

  if (!enrichedSource.externalSourceType || !enrichedSource.externalSourceUrl) {
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

  const mappedValues = fields.map(key => {
    const rawValue = data[key]
    const title = t(key)?.trim()
    const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
    const isLink = key === 'permanentLink'

    const filteredEnrichedSources = filterEnrichedSources(
      data.enrichedSources ?? [],
      key,
      mapArchivesEnrichedSources
    )

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

      return {
        title,
        value: values,
        isLink,
        key,
        asteriskSuggestions,
        enrichedSources: filteredEnrichedSources,
      }
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

      return {
        title,
        value: values,
        isLink,
        key,
        asteriskSuggestions,
        enrichedSources: filteredEnrichedSources,
      }
    }

    return { title, value: values, isLink, key, enrichedSources: filteredEnrichedSources }
  })

  const filteredValues = filterMappedValues(mappedValues)

  return filteredValues
}

export function mapPublicationDataToSections(
  data: PublicationRecordZoomLevel3Type | null | undefined,
  t: recordMetaPublicationT
) {
  if (!data) return []
  const fields = categoryFieldsMapping[CLOUD_CATEGORIES.publications]

  const mappedValues = fields.map(key => {
    const rawValue = data[key]
    const title = t(key)?.trim()
    const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
    const isLink = key === 'permanentLink'

    const filteredEnrichedSources = filterEnrichedSources(
      data.enrichedSources ?? [],
      key,
      mapPublicationEnrichedSources
    )

    return { title, value: values, isLink, key, enrichedSources: filteredEnrichedSources }
  })

  const filteredValues = filterMappedValues(mappedValues)
  return filteredValues
}

export function mapObjectDataToSections(
  data: ObjectRecordZoomLevel3Type | null | undefined,
  t: recordMetaObjectT
) {
  if (!data) return []
  const fields = categoryFieldsMapping[CLOUD_CATEGORIES.objects]
  const mappedValues = fields.map(key => {
    const rawValue = data[key]
    const title = t(key)?.trim()
    const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
    const isLink = key === 'permanentLink'

    const filteredEnrichedSources = filterEnrichedSources(
      data.enrichedSources ?? [],
      key,
      mapObjectEnrichedSources
    )

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
        externalSources: filteredEnrichedSources,
      }
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

      return {
        title,
        value: values,
        isLink,
        key,
        asteriskSuggestions,
        enrichedSources: filteredEnrichedSources,
      }
    }
    return { title, value: values, isLink, key }
  })
  const filteredValues = filterMappedValues(mappedValues)

  return filteredValues
}

export function mapPersonDataToSections(
  data: PeopleRecordZoomLevel3Type | null | undefined,
  t: recordMetaPersonT
) {
  if (!data) return []
  const fields = categoryFieldsMapping[CLOUD_CATEGORIES.people]

  const mappedValues = fields.map(key => {
    const rawValue = data[key]
    const title = t(key)?.trim()
    const values = rawValue ? rawValue.split(';').filter(v => v.trim().length > 0) : null
    const isLink = key === 'permanentLink'
    const filteredEnrichedSources = filterEnrichedSources(
      data.enrichedSources ?? [],
      key,
      mapPeopleEnrichedSources
    )

    return { title, value: values, isLink, key, enrichedSources: filteredEnrichedSources }
  })
  const filteredValues = filterMappedValues(mappedValues)
  return filteredValues
}

type MappedEnrichedSource = {
  externalSourceType: ExternalSource | undefined
  externalSourceUrl: Maybe<string> | undefined
  value: string | null
}
function filterEnrichedSources<
  T extends (
    | EnrichedBasePeopleRecordZoomLevel3Type
    | EnrichedBaseObjectRecordZoomLevel3Type
    | EnrichedBasePublicationRecordZoomLevel3Type
    | EnrichedBaseArchivesRecordZoomLevel3Type
  )[]
>(
  data: T,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  key: any,
  mapper: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    key: any,
    enrichedSource: T[number]
  ) => MappedEnrichedSource | undefined
): MappedEnrichedSource[] {
  return data.reduce<
    {
      externalSourceType: ExternalSource | undefined
      externalSourceUrl: Maybe<string> | undefined
      value: string | null
    }[]
  >((acc, enrichedSource) => {
    const mappedSource = mapper(key, enrichedSource)

    if (mappedSource) {
      return [...acc, mappedSource]
    }
    return acc
  }, [])
}

function filterMappedValues<
  T extends Array<{
    asteriskSuggestions?: Array<Record<string, string>>
    enrichedSources?: Array<Record<string, unknown>>
    value: string[] | null
    key: string
  }>
>(data: T): { [K in keyof T]: T[K] } {
  return data.filter(section => {
    const hasAsterisk =
      'asteriskSuggestions' in section && (section.asteriskSuggestions?.length ?? 0) > 0
    const hasEnrichedSources =
      'enrichedSources' in section && (section.enrichedSources?.length ?? 0) > 0
    if (section.key === 'externalSource') return false
    return section.value !== null || hasAsterisk || hasEnrichedSources
  }) as { [K in keyof T]: T[K] }
}
