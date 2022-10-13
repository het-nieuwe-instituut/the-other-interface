import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { Zoom3Query } from 'src/generated/graphql'
import { useFitDataToDimensions } from '../hooks/useFitToDataToDimensions'

import { useRandomBackgroundData } from '../hooks/useRandomColorData'
import { useZoomToD3Element } from '../hooks/useZoomToD3Element'
import { useD3Pagination } from '../hooks/useD3Pagination'
import { useD3Simulation } from './hooks/useD3Simulation'

import { PaginatedFilterType } from './types'

interface Dimensions {
    height?: number | null
    width?: number | null
}

export function usePresenter(dimensions: Dimensions, data: Zoom3Query['zoomLevel3'], selector: string) {
    const router = useRouter()
    const dataDimensions = useFitDataToDimensions(
        dimensions,
        data,
        d => d.uri ?? '',
        d => d.count ?? 0
    )
    const backgrounds = useRandomBackgroundData(data, d => d.uri ?? '')

    const { svgRef, simulation } = useD3Simulation(dimensions, data, selector, dataDimensions)
    const navigateTo = useCallback(
        (d: d3.SimulationNodeDatum & PaginatedFilterType) => {
            router.push(`${router.query.slug}/${d.name}`)
        },
        [router]
    )
    const zoomEvents = useZoomToD3Element<PaginatedFilterType>(svgRef, dimensions, `.foreign-${selector}`, navigateTo)
    const pagination = useD3Pagination({
        simulation,
        selector,
        svgRef,
        pageSize: 16,
        pathname: `/landingpage/${router.query.slug}/${router.query.filter}`,
    })

    return {
        svgRef,
        dataDimensions,
        ...zoomEvents,
        ...pagination,
        backgrounds,
    }
}
