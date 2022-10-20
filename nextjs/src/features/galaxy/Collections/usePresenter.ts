import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { ZoomLevel4Type } from 'src/generated/graphql'

import { useD3Pagination } from '../hooks/useD3Pagination'
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

    return {
        svgRef,
        ...pagination,
    }
}
