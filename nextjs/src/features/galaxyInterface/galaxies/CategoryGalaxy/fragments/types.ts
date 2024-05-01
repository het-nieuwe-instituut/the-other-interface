import { EnumTriplyrecordType } from 'src/generated/graphql'

export type MappedRecordType = EnumTriplyrecordType | 'stories'

export type MappedRecord = {
  id: string
  thumbnail?: string | null
  title?: string | null
  type: MappedRecordType
}
