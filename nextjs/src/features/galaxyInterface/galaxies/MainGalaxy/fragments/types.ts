import { CloudCategory } from '@/features/shared/utils/categories'
import { Position } from '@/features/shared/types/position'

export type CloudSize = `${string}vw`

export type CategoryCloud = {
  title: CloudCategory
  size: CloudSize
  titlePosition: Position
  cloudPosition: Position
}
