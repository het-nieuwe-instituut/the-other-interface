import { State } from '@/features/shared/configs/store'
import { useD3DataCopy } from '@/features/shared/hooks/copy'
import { useDispatch, useSelector } from 'react-redux'

import { useD3Pagination } from '../../hooks/useD3Pagination'
import { useD3ZoomEvents } from '../../hooks/useD3ZoomEvents'
import { ZoomStates } from '../../types/galaxy'
import { zoomByD3Data } from '../../utils/navigation'
import { getCorrectType } from '../../utils/type'
import { PaginatedCollectionProps } from './PaginatedCollection'
import { useD3Simulation } from './hooks/useD3Simulation'

interface Props extends PaginatedCollectionProps {
  selector: string
}
export function usePresenter(props: Props) {
  const dispatch = useDispatch()
  const { dimensions, paginatedCollectionData, total, type, filter, collection } = props
  const dataCopy = useD3DataCopy(paginatedCollectionData)
  const { svgRef } = useD3Simulation(dimensions)
  const zoomEvents = useD3ZoomEvents({ dimensions, svgRef })
  const params = useSelector((state: State) => state.galaxyInterface.params)
  const pagination = useD3Pagination({
    pageSize: 28,
    page: props.page,
    total: total ?? 0,
    states: {
      zoomBackState: ZoomStates.Zoom4ToInitial,
      zoomInState: ZoomStates.Zoom4Initial,
    },
    params,
  })

  return {
    events: {
      zoomToZoom5: (event: MouseEvent, item: typeof dataCopy[0]) => {
        const splittedUrl = item.record.split('/')
        const id = splittedUrl[splittedUrl.length - 1]
        const typeFromRecord = splittedUrl[splittedUrl.length - 2]
        const recordType = getCorrectType(typeFromRecord)

        return zoomByD3Data({
          dimensions,
          dispatch,
          d3x: event.clientX,
          d3y: event.clientY,
          toZoomState: ZoomStates.Zoom4ToZoom5,
          params: {
            slug: type,
            filter: filter,
            collection: collection,
            record: `${id}-${recordType}`,
          },
        })
      },
    },
    svgRef,
    ...props,
    paginatedCollectionData: dataCopy,
    ...pagination,
    ...zoomEvents,
  }
}
