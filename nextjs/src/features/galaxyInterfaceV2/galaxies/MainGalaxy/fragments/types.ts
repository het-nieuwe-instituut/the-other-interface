import { CloudCategory } from '@/features/shared/types/categories'
import { Position } from '@/features/shared/types/position'

export type CloudSize = `${string}vw`

export type CategoryCloud = {
  title: CloudCategory
  size: CloudSize
  titlePosition: Position
  cloudPosition: Position
}

//  WIll be replaced with business logic integrated
export type Story = {
  title: string
  image: string
}
