import { CloudCategory } from '@/features/shared/utils/categories'
import { Position, GridParams } from '@/features/shared/types/position'

export type CloudSize = `${string}vw`

export type CategoryCloud = {
  title: CloudCategory
  size: CloudSize
  titlePosition: Position
  cloudPosition: Position
}

export type MappedStory = {
  title: string
  image: string
  locale: string
  id: string
  hasImage: boolean
}

export type PositionedStory = MappedStory & {
  position: Position
  grid: GridParams
}
