import { CLOUD_CATEGORIES, Category } from '@/features/shared/utils/categories'

const objectFieldOrder = [
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

const archiveFieldOrder = [
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

const peopleFieldOrder = [
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

const publicationFieldOrder = [
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
