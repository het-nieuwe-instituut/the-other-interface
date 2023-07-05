export interface StoriesItem {
  parent: unknown
  id: string
  title: string
  shortDescription: string
  slug: string
}

export interface CloudItem {
  name: string
  itemsName?: string
  itemsCount?: number
  id: string
  count: number
  class: string
  numberOfInstances: number
  fixedNumberOfInstances: number
  xFromCenter: number
  yFromCenter: number
}
