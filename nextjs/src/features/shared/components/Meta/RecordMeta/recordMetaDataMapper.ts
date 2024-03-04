import { recordMetaT, recordMetaType } from 'locales/locales'
import {
  ArchivesRecordZoomLevel3Type,
  ObjectRecordZoomLevel3Type,
  PeopleRecordZoomLevel3Type,
} from 'src/generated/graphql'
import { recordMetaFieldOrderConfig } from './recordMetaFieldOrderConfig'
import { Category } from '@/features/shared/utils/categories'

type MetaSectionDataType =
  | ArchivesRecordZoomLevel3Type
  | ObjectRecordZoomLevel3Type
  | PeopleRecordZoomLevel3Type

export function mapDataToSections(
  data: MetaSectionDataType | null | undefined,
  category: Category,
  t: recordMetaT
): Array<{ title: string; value: string[] | null; isLink: boolean }> {
  if (!data) return []
  const fields = recordMetaFieldOrderConfig(category)

  return fields.reduce<Array<{ title: string; value: string[] | null; isLink: boolean }>>(
    (sections, key) => {
      const rawValue = data[key as keyof MetaSectionDataType]
      const title = t(key as recordMetaType)?.trim()
      if (typeof rawValue === 'string' && title) {
        const values = rawValue.split(';').filter(v => v.trim().length > 0)

        if (values.length > 0) {
          const isLink = key === 'permanentLink'
          sections.push({ title, value: values, isLink })
        }
      }

      return sections
    },
    []
  )
}
