import { randomNumberBetweenPoints } from '@/features/shared/utils/numbers'

import { ZoomLevel2Query } from 'src/generated/graphql'

export function zoom2ToFilterCloudData(zoom2?: ZoomLevel2Query | null) {
  return (
    zoom2?.zoomLevel2.map(item => ({
      filter: item.filter,
      id: item.id,
      name: item?.filter,
      numberOfInstances: randomNumberBetweenPoints(60, 250),
    })) ?? []
  )
}
