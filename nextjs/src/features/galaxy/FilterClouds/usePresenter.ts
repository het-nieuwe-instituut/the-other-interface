import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useZoomToD3Element } from '../hooks/useZoomToD3Element'
import { PaginatedFilterType } from '../PaginatedFilterClouds/usePresenter'
import { useD3Simulation } from './hooks/useD3Simulation'
import { useFitDataToDimensions } from './hooks/useFitDataToDimensions'
import { Dimensions, FilterType } from './types'

export function usePresenter(dimensions: Dimensions, data: FilterType[], selector: string) {
    const router = useRouter()
    const dataDimensions = useFitDataToDimensions(dimensions, data)
    const { svgRef } = useD3Simulation(dimensions, data, selector, dataDimensions)
    const navigateTo = useCallback(
        async (d: d3.SimulationNodeDatum & PaginatedFilterType) => {
            router.push(`${router.query.slug}/${d.filter}`)
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
