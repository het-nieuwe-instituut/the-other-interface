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

function mapArchivesEnrichedSources(
  key: (typeof categoryFieldsMapping)['archives'][number],
  enrichedSource: EnrichedBaseArchivesRecordZoomLevel3Type
) {
  if (key === 'access' && !!enrichedSource.access) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.access,
    }
  }
  if (key === 'custodialHistory' && !!enrichedSource.custodialHistory) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.custodialHistory,
    }
  }
  if (key === 'description' && !!enrichedSource.description) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.description,
    }
  }
  if (key === 'existence' && !!enrichedSource.existence) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.existence,
    }
  }
  if (key === 'existenceLocation' && !!enrichedSource.existenceLocation) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.existenceLocation,
    }
  }
  if (key === 'period' && !!enrichedSource.period) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.period,
    }
  }
  if (key === 'photographCreator' && !!enrichedSource.photographCreator) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.photographCreator,
    }
  }
  if (key === 'referenceCode' && !!enrichedSource.referenceCode) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.referenceCode,
    }
  }
  if (key === 'rights' && !!enrichedSource.rights) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.rights,
    }
  }
  if (key === 'size' && !!enrichedSource.size) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.size,
    }
  }
  if (key === 'sources' && !!enrichedSource.sources) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.sources,
    }
  }
  if (key === 'systemOfArrangement' && !!enrichedSource.systemOfArrangement) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.systemOfArrangement,
    }
  }
  if (key === 'descriptionLevel' && !!enrichedSource.descriptionLevel) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.descriptionLevel,
    }
  }
  if (key === 'externalURI' && !!enrichedSource.externalURI) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.externalURI,
    }
  }
  if (key === 'permanentLink' && !!enrichedSource.permanentLink) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.permanentLink,
    }
  }
  if (key === 'titleType' && !!enrichedSource.titleType) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.titleType,
    }
  }
  return undefined
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

function mapPublicationEnrichedSources(
  key: (typeof categoryFieldsMapping)['publications'][number],
  enrichedSource: EnrichedBasePublicationRecordZoomLevel3Type
) {
  if (key === 'authorRole' && !!enrichedSource.authorRole) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.authorRole,
    }
  }
  if (key === 'authors' && !!enrichedSource.authors) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.authors,
    }
  }
  if (key === 'availability' && !!enrichedSource.availability) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.availability,
    }
  }
  if (key === 'category' && !!enrichedSource.category) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.category,
    }
  }
  if (key === 'codeOfArchive' && !!enrichedSource.codeOfArchive) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.codeOfArchive,
    }
  }
  if (key === 'edition' && !!enrichedSource.edition) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.edition,
    }
  }
  if (key === 'illustration' && !!enrichedSource.illustration) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.illustration,
    }
  }
  if (key === 'isbn' && !!enrichedSource.isbn) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.isbn,
    }
  }
  if (key === 'language' && !!enrichedSource.language) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.language,
    }
  }
  if (key === 'number' && !!enrichedSource.number) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.number,
    }
  }
  if (key === 'pages' && !!enrichedSource.pages) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.pages,
    }
  }
  if (key === 'placeOfPublication' && !!enrichedSource.placeOfPublication) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.placeOfPublication,
    }
  }
  if (key === 'publisher' && !!enrichedSource.publisher) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.publisher,
    }
  }
  if (key === 'relatedKeyword' && !!enrichedSource.relatedKeyword) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.relatedKeyword,
    }
  }
  if (key === 'series' && !!enrichedSource.series) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.series,
    }
  }
  if (key === 'subType' && !!enrichedSource.subType) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.subType,
    }
  }
  if (key === 'yearOfPublication' && !!enrichedSource.yearOfPublication) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.yearOfPublication,
    }
  }
  if (key === 'geoKeyword' && !!enrichedSource.geoKeyword) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.geoKeyword,
    }
  }
  if (key === 'permanentLink' && !!enrichedSource.permanentLink) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.permanentLink,
    }
  }

  return undefined
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

function mapObjectEnrichedSources(
  key: (typeof categoryFieldsMapping)['objects'][number],
  enrichedSource: EnrichedBaseObjectRecordZoomLevel3Type
) {
  if (key === 'archiveCode' && !!enrichedSource.archiveCode) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.archiveCode,
    }
  }
  if (key === 'creditLine' && !!enrichedSource.creditLine) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.creditLine,
    }
  }
  if (key === 'date' && !!enrichedSource.date) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.date,
    }
  }
  if (key === 'dimension' && !!enrichedSource.dimension) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.dimension,
    }
  }
  if (key === 'geoKeywords' && !!enrichedSource.geoKeywords) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.geoKeywords,
    }
  }
  if (key === 'hasParts' && !!enrichedSource.hasParts) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.hasParts,
    }
  }
  if (key === 'maker' && !!enrichedSource.maker) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.maker,
    }
  }
  if (key === 'materials' && !!enrichedSource.materials) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.materials,
    }
  }
  if (key === 'objectName' && !!enrichedSource.objectName) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.objectName,
    }
  }
  if (key === 'objectNumber' && !!enrichedSource.objectNumber) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.objectNumber,
    }
  }
  if (key === 'objectType' && !!enrichedSource.objectType) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.objectType,
    }
  }
  if (key === 'relatedKeywords' && !!enrichedSource.relatedKeywords) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.relatedKeywords,
    }
  }
  if (key === 'rights' && !!enrichedSource.rights) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.rights,
    }
  }
  if (key === 'scale' && !!enrichedSource.scale) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.scale,
    }
  }
  if (key === 'techniques' && !!enrichedSource.techniques) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.techniques,
    }
  }
  if (key === 'title' && !!enrichedSource.title) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.title,
    }
  }
  if (key === 'permanentLink' && !!enrichedSource.permanentLink) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.permanentLink,
    }
  }
  return undefined
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

function mapPeopleEnrichedSources(
  key: (typeof categoryFieldsMapping)['people'][number],
  enrichedSource: EnrichedBasePeopleRecordZoomLevel3Type
) {
  if (key === 'association' && !!enrichedSource.association) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.association,
    }
  }
  if (key === 'birthDate' && !!enrichedSource.birthDate) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.birthDate,
    }
  }
  if (key === 'birthPlace' && !!enrichedSource.birthPlace) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.birthPlace,
    }
  }
  if (key === 'deathDate' && !!enrichedSource.deathDate) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.deathDate,
    }
  }
  if (key === 'deathPlace' && !!enrichedSource.deathPlace) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.deathPlace,
    }
  }
  if (key === 'externalSource' && !!enrichedSource.externalSource) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.externalSource,
    }
  }
  if (key === 'gender' && !!enrichedSource.gender) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.gender,
    }
  }
  if (key === 'nameVariations' && !!enrichedSource.nameVariations) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.nameVariations,
    }
  }
  if (key === 'nationality' && !!enrichedSource.nationality) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.nationality,
    }
  }
  if (key === 'period' && !!enrichedSource.period) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.period,
    }
  }
  if (key === 'permanentLink' && !!enrichedSource.permanentLink) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.permanentLink,
    }
  }
  if (key === 'profession' && !!enrichedSource.profession) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.profession,
    }
  }
  if (key === 'type' && !!enrichedSource.type) {
    return {
      externalSourceType: enrichedSource.externalSourceType,
      externalSourceUrl: enrichedSource.externalSourceUrl,
      value: enrichedSource.type,
    }
  }

  return undefined
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
