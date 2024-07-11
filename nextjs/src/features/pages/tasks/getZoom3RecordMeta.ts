import { Category } from '@/features/shared/utils/categories'
import { Locale, Sdk } from 'src/generated/graphql'
import { PublicationState } from '@/features/shared/types/enums'
import { zoom3RecordMetaConfig } from './zoom3RecordMetaConfig'

type Payload =
  | {
      id: string
      locale: Locale
    }
  | { locale: Locale; publicationState: PublicationState; id: string }

export async function getZoom3RecordMeta(type: Category, payload: Payload, api: Sdk) {
  try {
    const configByType = zoom3RecordMetaConfig(type, api)

    const data = await configByType?.zoomLevelQuery?.(payload)
    const item = configByType?.accesor?.(data)

    console.log('the requested data', data, item)

    if (item && item.__typename === 'PeopleRecordZoomLevel3Type') {
      return {
        ...item,
        enrichedSources: [
          {
            id: '1',
            externalSourceType: 'External Source Type',
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
            externalSourceType: 'External Source Type',
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
            externalSourceType: 'External Source Type',
            externalSourceUrl: 'External Source Url',
            __typename: 'ExternalSource',
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
        asteriskSuggestions: [
          {
            asterisk_date_content: 'Date',
            asterisk_date_location: 'Location',
            asterisk_date_subject: 'Subject',
            asterisk_name_content: 'Name',
            asterisk_name_location: 'Location',
            asterisk_name_subject: 'Subject',
            asterisk_subject_content: 'Subject',
            asterisk_subject_location: 'Location',
            asterisk_subject_subject: 'Subject',
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
        asteriskSuggestions: [
          {
            asterisk_date_geoKeywords: '10-10-2021',
            asterisk_date_relatedKeyword: '10-10-2021',
            asterisk_name_geoKeywords: 'Name',
            asterisk_name_relatedKeyword: 'Name',
            asterisk_subject_geoKeywords: 'Subject',
            asterisk_subject_relatedKeyword: 'Subject',
          },
        ],
      }
    }
    return item
  } catch (e) {
    console.log(e, 'Error accured in zoom level 3 task')
  }
}
