import { CLOUD_CATEGORIES, Category } from '@/features/shared/utils/categories'
import {
  ArchivesRecordZoomLevel3Type,
  ObjectRecordZoomLevel3Type,
  PeopleRecordZoomLevel3Type,
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

const archiveFieldOrder: Array<keyof ArchivesRecordZoomLevel3Type> = [
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

  return []
}
