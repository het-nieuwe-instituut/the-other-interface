import { CLOUD_CATEGORIES, Category } from '@/features/shared/utils/categories'
import { ObjectRecordZoomLevel3Type } from 'src/generated/graphql'

const fieldOrder: Array<keyof ObjectRecordZoomLevel3Type> = [
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

export function recordMetaFieldOrderConfig(category: Category) {
  if (category === CLOUD_CATEGORIES.objects) {
    return fieldOrder
  }

  return []
}
