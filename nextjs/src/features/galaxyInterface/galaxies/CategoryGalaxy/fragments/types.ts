import { EntityNames } from 'src/generated/graphql'

export type MappedRecord = {
  id: string
  thumbnail?: string | null
  title?: string | null
  type: EntityNames
}
