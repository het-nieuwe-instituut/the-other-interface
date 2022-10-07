import { useD3Simulation } from './hooks/useD3Simulation'
import { useD3ZoomEvents } from './hooks/useD3ZoomEvents'
import { useFitDataToDimensions } from './hooks/useFitDataToDimensions'
import { Dimensions, FilterType } from './types'

export function usePresenter(dimensions: Dimensions, data: FilterType[], selector: string) {
    const dataDimensions = useFitDataToDimensions(dimensions, data)
    const { svgRef } = useD3Simulation(dimensions, data, selector, dataDimensions)
    const zoomEvents = useD3ZoomEvents(svgRef, dimensions, selector)

    return {
        svgRef,
        dataDimensions,
        ...zoomEvents,
    }
}
