import { CLOUD_CATEGORIES, Category } from '@/features/shared/utils/categories'
import { RecordMetaTranslatableKeys } from 'locales/locales'
import {
  ArchivesRecordZoomLevel3Type,
  ObjectRecordZoomLevel3Type,
  PeopleRecordZoomLevel3Type,
  PublicationRecordZoomLevel3Type,
} from 'src/generated/graphql'

const objectFieldOrder: Array<keyof ObjectRecordZoomLevel3Type> = [
  'objectNumber',
  'titleType',
  'objectName',
  'archiveCode',
  'date',
  'materials',
  'techniques',
  'hasParts',
  'dimension',
  'scale',
  'creditLine',
  'rights',
  'permanentLink',
]

const archiveFieldOrder: Array<RecordMetaTranslatableKeys<ArchivesRecordZoomLevel3Type>> = [
  'custodialHistory',
  'systemOfArrangement',
  'sources',
  'existence',
  'existenceLocation',
  'referenceCode',
  'titleType',
  'descriptionLevel',
  'size',
  'period',
  'access',
  'photographCreator',
  'rights',
  'permanentLink',
  'externalSource',
]

const peopleFieldOrder: Array<keyof PeopleRecordZoomLevel3Type> = [
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

const publicationFieldOrder: Array<keyof PublicationRecordZoomLevel3Type> = [
  'objectNumber',
  'subType',
  'authors',
  'authorRole',
  'publisher',
  'yearOfPublication',
  'placeOfPublication',
  'isbn',
  'annotation',
  'codeOfArchive',
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
  'sourceTitle',
  'volume',
  'issue',
  'year',
  'subject',
]

type CategoryFieldsMapping = {
  [CLOUD_CATEGORIES.objects]: Array<keyof ObjectRecordZoomLevel3Type>
  [CLOUD_CATEGORIES.archives]: Array<keyof ArchivesRecordZoomLevel3Type>
  [CLOUD_CATEGORIES.people]: Array<keyof PeopleRecordZoomLevel3Type>
  [CLOUD_CATEGORIES.publications]: Array<keyof PublicationRecordZoomLevel3Type>
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
