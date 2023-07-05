import { Zoom3Query } from 'src/generated/graphql'

type Zoom3Item = Zoom3Query['zoomLevel3'][0]
export type PaginatedFilterType = Zoom3Item

export interface Dimensions {
  height?: number | null
  width?: number | null
}
