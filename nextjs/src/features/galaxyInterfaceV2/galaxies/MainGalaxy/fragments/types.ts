export type Position = {
  top?: string | 0
  right?: string | 0
  bottom?: string | 0
  left?: string | 0
}

export type CloudSize = `${string}vw`

export type CollectionType = 'archives' | 'publications' | 'objects' | 'people'

export type CategoryCloud = {
  title: CollectionType
  size: CloudSize
  titlePosition: Position
  cloudPosition: Position
}

//  WIll be replaced with business logic integrated
export type Story = {
  title: string
  image: string
}
