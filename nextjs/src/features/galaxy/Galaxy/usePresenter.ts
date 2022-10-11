import { useRef } from 'react'
import { Dimensions } from '../types/galaxy'
import { GALAXY_BASE } from './Galaxy'
import { ObjectPerTypeWithName, useD3Simulation } from '../hooks/useD3Simulation'
import { useD3ZoomEvents } from '../hooks/useD3ZoomEvents'
import { useFitDataToDimensions } from '../hooks/useFitDataToDimensions'

export function usePresenter(dimensions: Dimensions, data: ObjectPerTypeWithName[], selector: string) {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const galaxyBase = GALAXY_BASE
    const dataDimensions = useFitDataToDimensions(galaxyBase, data)
    useD3Simulation(svgRef, dimensions, data, selector, dataDimensions, galaxyBase)
    const zoomEvents = useD3ZoomEvents(svgRef, dimensions)

    return {
        svgRef,
        dataDimensions,
        ...zoomEvents,
    }
}
