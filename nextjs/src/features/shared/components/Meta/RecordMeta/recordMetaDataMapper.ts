import { recordMetaT, recordMetaType } from 'locales/locales'
import { ArchivesRecordZoomLevel3Type, ObjectRecordZoomLevel3Type } from 'src/generated/graphql'
import { recordMetaFieldOrderConfig } from './recordMetaFieldOrderConfig'
import { Category } from '@/features/shared/utils/categories'

type MetaSectionDataType = ArchivesRecordZoomLevel3Type | ObjectRecordZoomLevel3Type

export function mapDataToSections(
  data: MetaSectionDataType | null | undefined,
  category: Category,
  t: recordMetaT
): Array<{ title: string; value: string | null; isLink: boolean | undefined }> {
  if (!data) return []
  const fields = recordMetaFieldOrderConfig(category)

  return fields.reduce((sections, key) => {
    if (key in data) {
      const title = t(key as recordMetaType)
      const value = data[key as keyof MetaSectionDataType]

      if (value !== undefined && value !== null && title !== undefined) {
        const isLink = key === 'permanentLink'
        sections.push({ title, value: value.toString(), isLink })
      }
    }

    return sections
  }, [] as Array<{ title: string; value: string | null, isLink: boolean | undefined }>)
}
