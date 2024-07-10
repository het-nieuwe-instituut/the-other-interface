import { CloudCategory } from '@/features/shared/utils/categories'
import { GridParams, Position } from '@/features/shared/types/position'

export type CloudPositionValue = {
  base: `${string}vw` | `${string}vh` | `${string}%` | 0 | `calc(${string})`
  xl: string
}

export type CloudPosition = {
  top?: CloudPositionValue
  right?: CloudPositionValue
  bottom?: CloudPositionValue
  left?: CloudPositionValue
}

export type CloudSize = {
  base: `${string}vw`
  xl: string
}

export type CategoryCloud = {
  title: CloudCategory
  sizeClassNames: string
  titleClassNames: string
  cloudClassNames: string
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
