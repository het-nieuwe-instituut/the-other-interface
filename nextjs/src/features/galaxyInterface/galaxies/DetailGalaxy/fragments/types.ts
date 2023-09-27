import { Position, GridParams } from '@/features/shared/types/position'
import { Category } from '@/features/shared/utils/categories'

export type Record = {
  id: number
  title: string
  thumbnail: string | null
}

export type PositionedRecord = Record & {
  position: Position
  grid: GridParams
  category: Category
}

export type Relation = {
  type: Category
  total: null
  randomRelations: string[]
}
