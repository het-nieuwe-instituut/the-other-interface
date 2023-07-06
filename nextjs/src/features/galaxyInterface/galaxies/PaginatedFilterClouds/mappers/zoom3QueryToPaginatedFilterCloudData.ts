import { Zoom3Query } from 'src/generated/graphql'

import { PaginatedCloudItem } from '../types'

export function zoom3QueryToPaginatedFilterCloudData(
  zoomLevel3?: Zoom3Query | null
): PaginatedCloudItem[] {
  return (
    zoomLevel3?.zoomLevel3.map(item => ({
      uri: item.uri ?? '',
      name: item.name ?? '',
      count: item.count ?? 0,
    })) ?? []
  )
}
