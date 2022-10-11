import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useFitDataToDimensions } from '../hooks/useFitToDataToDimensions'
import { useZoomToD3Element } from '../hooks/useZoomToD3Element'
import { useD3Simulation } from './hooks/useD3Simulation'

import { PaginatedFilterType } from './types'

interface Dimensions {
    height?: number | null
    width?: number | null
}

export function usePresenter(dimensions: Dimensions, data: PaginatedFilterType[], selector: string) {
    const router = useRouter()
    const dataDimensions = useFitDataToDimensions(dimensions, data)

    const { svgRef } = useD3Simulation(dimensions, data, selector, dataDimensions)
    const navigateTo = useCallback(
        (d: d3.SimulationNodeDatum & PaginatedFilterType) => {
            router.push(`${router.query.slug}/${d.name}`)
        },
        [router]
    )
    const zoomEvents = useZoomToD3Element<PaginatedFilterType>(svgRef, dimensions, `.foreign-${selector}`, navigateTo)

    return {
        svgRef,
        dataDimensions,
        ...zoomEvents,
    }
}
