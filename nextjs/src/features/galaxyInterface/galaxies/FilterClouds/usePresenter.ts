import { useFitDataToDimensions } from '@/features/galaxy/hooks/useFitToDataToDimensions'
import { useD3DataCopy } from '@/features/shared/hooks/copy'
import { useDispatch } from 'react-redux'

import { useD3ZoomEvents } from '../../hooks/useD3ZoomEvents'
import { ZoomStates } from '../../types/galaxy'
import { zoomByD3Data } from '../../utils/navigation'
import { FilterCloudsProps } from './FilterClouds'
import { useD3Simulation } from './hooks/useD3Simulation'

interface Props extends FilterCloudsProps {
  selector: string
}
export function usePresenter(props: Props) {
  const { filterCloudData, dimensions, selector, type } = props
  const dispatch = useDispatch()
  const clonedFilterData = useD3DataCopy(filterCloudData)
  const dataDimensions = useFitDataToDimensions(
    dimensions,
    clonedFilterData,
    d => d.name,
    d => d.numberOfInstances
  )
  const { svgRef } = useD3Simulation(dimensions, clonedFilterData, selector, dataDimensions)
  const zoomEvents = useD3ZoomEvents({ svgRef, dimensions })

  return {
    ...props,
    events: {
      handleZoomToZoom3: (item: typeof clonedFilterData[0]) =>
        zoomByD3Data({
          dimensions,
          dispatch,
          d3x: item.x,
          d3y: item.y,
          toZoomState: ZoomStates.Zoom2ToZoom3,
          params: {
            slug: type,
            filter: item.id,
          },
        }),
    },
    svgRef,
    dataDimensions,
    ...zoomEvents,
    clonedFilterData,
  }
}
