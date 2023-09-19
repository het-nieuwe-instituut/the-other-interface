import { Position } from '@/features/shared/types/position'
import { Category } from '@/features/shared/utils/categories'

export type GridParams = {
  gridRow: `${number} / ${number}`
  gridColumn: `${number} / ${number}`
}

export type PositioningTemplate = {
  position: Position
  grid: GridParams
}

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
