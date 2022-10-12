import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useFitDataToDimensions } from '../hooks/useFitToDataToDimensions'
import { useZoomToD3Element } from '../hooks/useZoomToD3Element'
import { useD3Simulation } from './hooks/useD3Simulation'

import { Dimensions, FilterType } from './types'

export function usePresenter(dimensions: Dimensions, data: FilterType[], selector: string) {
    const router = useRouter()
    const dataDimensions = useFitDataToDimensions(
        dimensions,
        data,
        d => d.name,
        d => d.numberOfInstances
    )
    const { svgRef } = useD3Simulation(dimensions, data, selector, dataDimensions)
    const navigateTo = useCallback(
        async (d: d3.SimulationNodeDatum & FilterType) => {
            router.push(`${router.query.slug}/${d.name}`)
        },
        [router]
    )
    const zoomEvents = useZoomToD3Element<FilterType>(svgRef, dimensions, `.foreign-${selector}`, navigateTo)

    return {
        svgRef,
        dataDimensions,
        ...zoomEvents,
    }
}
