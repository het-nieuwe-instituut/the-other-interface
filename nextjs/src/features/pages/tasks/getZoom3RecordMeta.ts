import { Category } from '@/features/shared/utils/categories'
import { ExternalSource, Locale, Sdk } from 'src/generated/graphql'
import { PublicationState } from '@/features/shared/types/enums'
import { zoom3RecordMetaConfig } from './zoom3RecordMetaConfig'

type Payload =
  | {
      id: string
      locale: Locale
    }
  | { locale: Locale; publicationState: PublicationState; id: string }

export async function getZoom3RecordMeta(type: Category, payload: Payload, api: Sdk) {
  const configByType = zoom3RecordMetaConfig(type, api)

  const data = await configByType?.zoomLevelQuery?.(payload)
  const item = configByType?.accesor?.(data)

  if (item && item.__typename === 'PeopleRecordZoomLevel3Type') {
    return {
      ...item,
      enrichedSources: [
        {
          id: '1',
          externalSourceType: ExternalSource.Getty,
          externalSourceUrl: 'External Source Url',
          type: 'Type',
          profession: 'Profession',
          nameVariation: 'Name Variation',
          birthDate: 'Birth Date',
          birthPlace: 'Birth Place',
          deathDate: 'Death Date',
          deathPlace: 'Death Place',
          nationality: 'National',
          gender: 'Gender',
          period: 'Period',
          association: 'Association',
          permanentLink: 'Permanent Link',
          externalSource: 'External Source',
        },
        {
          id: '1',
          externalSourceType: ExternalSource.Getty,
          externalSourceUrl: 'External Source Url',
          type: 'Type',
          profession: 'Profession',
          nameVariation: 'Name Variation',
          birthDate: 'Birth Date',
          birthPlace: 'Birth Place',
          deathDate: 'Death Date',
          deathPlace: 'Death Place',
          nationality: 'National',
          gender: 'Gender',
          period: 'Period',
          association: 'Association',
          permanentLink: 'Permanent Link',
          externalSource: 'External Source',
        },
      ],
    }
  }

  if (item && item.__typename === 'PublicationRecordZoomLevel3Type') {
    return {
      ...item,
      enrichedSources: [
        {
          id: '1',
          externalSourceType: ExternalSource.Getty,
          externalSourceUrl: 'External Source Url',
          objectNumber: 'Object Number',
          subType: 'Sub Type',
          authors: 'Authors',
          authorRole: 'Author Role',
          publisher: 'Publisher',
          yearOfPublication: 'Year Of Publication',
          placeOfPublication: 'Place Of Publication',
          isbn: 'Isbn',
          annotation: 'Annotation',
          codeOfArchive: 'Code Of Archive',
          edition: 'Edition',
          illustration: 'Illustration',
          pages: 'Pages',
          language: 'Language',
          series: 'Series',
          number: 'Number',
          category: 'Category',
          relatedKeyword: 'Related Keyword',
          geoKeyword: 'Geo Keyword',
          availability: 'Availability',
          permanentLink: 'Permanent Link',
          externalSource: 'External Source',
        },
      ],
    }
  }
  if (item && item.__typename === 'ArchivesRecordZoomLevel3Type') {
    return {
      ...item,
      enrichedSources: [
        {
          id: '1',
          externalSourceType: ExternalSource.Getty,
          externalSourceUrl: 'External Source Url',
          referenceCode: 'Reference Code',
          titleType: 'Title Type',
          descriptionLevel: 'Description Level',
          size: 'Size',
          period: 'Period',
          access: 'Access',
          photographCreator: 'Photograph Creator',
          rights: 'Rights',
          permanentLink: 'Permanent Link',
          externalSource: 'External Source',
          description: 'Description',
          custodialHistory: 'Custodial History',
          systemOfArrangement: 'System Of Arrangement',
          sources: 'Sources',
          existence: 'Existence',
          existenceLocation: 'Existence Location',
        },
      ],
    }
  }

  if (item && item.__typename === 'ObjectRecordZoomLevel3Type') {
    return {
      ...item,
      enrichedSources: [
        {
          id: '1',
          externalSourceType: ExternalSource.Getty,
          externalSourceUrl: 'External Source Url',
          title: 'Title',
          objectNumber: 'Object Number',
          objectType: 'Object Type',
          objectName: 'Object Name',
          archiveCode: 'Archive Code',
          date: 'Date',
          relatedKeywords: 'Related Keywords',
          maker: 'Maker',
          materials: 'Materials',
          techniques: 'Techniques',
          hasParts: 'Has Parts',
          dimension: 'Dimension',
          scale: 'Scale',
          creditLine: 'Credit Line',
          rights: 'Rights',
          geoKeywords: 'Geo Keywords',
          permanentLink: 'Permanent Link',
          externalSource: 'External Source',
        },
      ],
    }
  }

  return item
}
