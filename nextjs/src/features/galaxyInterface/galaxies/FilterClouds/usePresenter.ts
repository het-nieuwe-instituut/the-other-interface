import { useFitDataToDimensions } from '@/features/galaxy/hooks/useFitToDataToDimensions'
import { SimulationNodeDatum } from 'd3'
import { useMemo } from 'react'
import { useD3ZoomEvents } from '../../newsharedhooks/useD3ZoomEvents'
import { Dimensions } from '../../types/galaxy'
import { useD3Simulation } from './hooks/useD3Simulation'
import { FilterCloudItem } from './types'

export function usePresenter(dimensions: Dimensions, selector: string, filterCloudData: FilterCloudItem[]) {
    const clonedFilterData = useMemo<(FilterCloudItem & SimulationNodeDatum)[]>(
        () => JSON.parse(JSON.stringify(filterCloudData)),
        [filterCloudData]
    )
    const dataDimensions = useFitDataToDimensions(
        dimensions,
        clonedFilterData,
        d => d.name,
        d => d.numberOfInstances
    )
    const { svgRef } = useD3Simulation(dimensions, clonedFilterData, selector, dataDimensions)
    const zoomEvents = useD3ZoomEvents(svgRef, dimensions)

    return {
        svgRef,
        dataDimensions,
        ...zoomEvents,
        clonedFilterData,
    }
}
