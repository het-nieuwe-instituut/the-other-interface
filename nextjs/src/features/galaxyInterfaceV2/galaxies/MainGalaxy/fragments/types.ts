import { CloudCategory } from '@/features/shared/types/categories'

export type Position = {
  top?: string | 0
  right?: string | 0
  bottom?: string | 0
  left?: string | 0
}

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
