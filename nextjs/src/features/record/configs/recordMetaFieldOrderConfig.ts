import { CLOUD_CATEGORIES, Category } from '@/features/shared/utils/categories'
import {
  ArchivesRecordZoomLevel3Type,
  ObjectRecordZoomLevel3Type,
  PeopleRecordZoomLevel3Type,
  PublicationRecordZoomLevel3Type,
} from 'src/generated/graphql'

export type OmitEnrichedData<T> = Omit<
  T,
  'enrichedSources' | 'externalSourceType' | 'externalSourceUrl' | 'id'
>

type OmitAsteriskSuggestions<T> = Omit<T, 'asteriskSuggestions'>

type BaseObjectRecordZoomLevel3Type = OmitAsteriskSuggestions<
  OmitEnrichedData<ObjectRecordZoomLevel3Type>
>
type BaseArchivesRecordZoomLevel3Type = OmitAsteriskSuggestions<
  OmitEnrichedData<ArchivesRecordZoomLevel3Type>
>
type BasePeopleRecordZoomLevel3Type = OmitAsteriskSuggestions<
  OmitEnrichedData<PeopleRecordZoomLevel3Type>
>
type BasePublicationRecordZoomLevel3Type = OmitAsteriskSuggestions<
  OmitEnrichedData<PublicationRecordZoomLevel3Type>
>

const objectFieldOrder: Array<keyof BaseObjectRecordZoomLevel3Type> = [
  'objectNumber',
  'objectName',
  'objectType',
  'archiveCode',
  'maker',
  'date',
  'relatedKeywords',
  'geoKeywords',
  'materials',
  'techniques',
  'hasParts',
  'dimension',
  'scale',
  'creditLine',
  'rights',
  'permanentLink',
  'externalSource',
]

const archiveFieldOrder: Array<Partial<keyof BaseArchivesRecordZoomLevel3Type>> = [
  'referenceCode',
  'titleType',
  'creators',
  'descriptionLevel',
  'size',
  'period',
  'access',
  'subject',
  'location',
  'photographCreator',
  'rights',
  'permanentLink',
  'externalURI',
]

const peopleFieldOrder: Array<keyof BasePeopleRecordZoomLevel3Type> = [
  'type',
  'profession',
  'nameVariations',
  'birthDate',
  'birthPlace',
  'deathDate',
  'deathPlace',
  'nationality',
  'gender',
  'period',
  'association',
  'permanentLink',
  'externalSource',
]

const publicationFieldOrder: Array<keyof BasePublicationRecordZoomLevel3Type> = [
  'objectNumber',
  'subType',
  'authors',
  'authorRole',
  'publisher',
  'yearOfPublication',
  'placeOfPublication',
  'isbn',
  'codeOfArchive',
  'edition',
  'illustration',
  'pages',
  'language',
  'series',
  'number',
  'category',
  'relatedKeyword',
  'geoKeyword',
  'availability',
  'permanentLink',
  'externalSource',
  'continuedFrom',
  'continuedAs',
  'volume',
  'issue',
  'year',
  'geographicalKeywords',
  'pysicalCarrier',
]

type CategoryFieldsMapping = {
  [CLOUD_CATEGORIES.objects]: Array<keyof BaseObjectRecordZoomLevel3Type>
  [CLOUD_CATEGORIES.archives]: Array<keyof BaseArchivesRecordZoomLevel3Type>
  [CLOUD_CATEGORIES.people]: Array<keyof BasePeopleRecordZoomLevel3Type>
  [CLOUD_CATEGORIES.publications]: Array<keyof BasePublicationRecordZoomLevel3Type>
}

export const categoryFieldsMapping: CategoryFieldsMapping = {
  [CLOUD_CATEGORIES.objects]: objectFieldOrder,
  [CLOUD_CATEGORIES.archives]: archiveFieldOrder,
  [CLOUD_CATEGORIES.people]: peopleFieldOrder,
  [CLOUD_CATEGORIES.publications]: publicationFieldOrder,
}

export function recordMetaFieldOrderConfig(category: Category) {
  if (category === CLOUD_CATEGORIES.objects) {
    return objectFieldOrder
  }

  if (category === CLOUD_CATEGORIES.archives) {
    return archiveFieldOrder
  }

  if (category === CLOUD_CATEGORIES.people) {
    return peopleFieldOrder
  }

  if (category === CLOUD_CATEGORIES.publications) {
    return publicationFieldOrder
  }

  return []
}
