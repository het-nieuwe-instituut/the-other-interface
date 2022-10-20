import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { ZoomLevel4Type } from 'src/generated/graphql'

import { useD3Pagination } from '../hooks/useD3Pagination'
import { useZoomToD3Element } from '../hooks/useZoomToD3Element'
import { Dimensions } from '../types/galaxy'
import { useD3Simulation } from './hooks/useD3Simulation'

export function usePresenter(data: ZoomLevel4Type[], total: number, selector: string, dimensions: Dimensions) {
    const router = useRouter()
    const dataCopy: ZoomLevel4Type[] = useMemo(() => JSON.parse(JSON.stringify(data)), [data])

    const { svgRef, simulation } = useD3Simulation(dimensions, dataCopy, selector)
    const pagination = useD3Pagination({
        simulation,
        selector,
        svgRef,
        pageSize: 28,
        pathname: `/landingpage/${router.query.slug}/${router.query.filter}/${router.query.collection}`,
        total: total ?? 0,
    })
    const navigateTo = useCallback(
        async (d: d3.SimulationNodeDatum & ZoomLevel4Type) => {
            router.push(
                `/landingpage/${router.query.slug}/${router.query.filter}/${
                    router.query.collection
                }/${d.record.substring(d.record.lastIndexOf('/') + 1)}`
            )
        },
        [router]
    )
    const zoomEvents = useZoomToD3Element<ZoomLevel4Type>(svgRef, dimensions, `.foreign-${selector}`, navigateTo)

    return {
        svgRef,
        ...pagination,
        ...zoomEvents,
    }
}
