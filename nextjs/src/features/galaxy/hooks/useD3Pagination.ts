import * as d3 from 'd3'
import { Simulation } from 'd3'
import { useRouter } from 'next/router'
import { MutableRefObject, useCallback } from 'react'

import { D3CollectionItem } from '../PaginatedFilterClouds/hooks/useD3Simulation'

interface Props {
    simulation: MutableRefObject<Simulation<D3CollectionItem, undefined> | null>
    selector: string
    svgRef: MutableRefObject<SVGSVGElement | null>
    pathname: string
    pageSize: number
    total: number
}

export function useD3Pagination({ simulation, selector, svgRef, pathname, pageSize, total }: Props) {
    const router = useRouter()

    async function paginateNext() {
        const page = router.query.page ? parseInt(router.query.page as string) : null
        if (!page) {
            router.push({
                pathname: pathname,
                query: { page: 1 },
            })
            return
        }

        const newPage = page + 1

        const totalSizeExceeded = newPage > (total ?? 0)
        if (totalSizeExceeded) {
            return
        }

        await animateOut()
        router.push({
            pathname: pathname,
            query: { page: newPage },
        })
    }

    async function paginateBack() {
        const page = router.query.page ? parseInt(router.query.page as string) : null

        if (!page) {
            router.push({
                pathname: pathname,
                query: { page: 1 },
            })
            return
        }

        const newPage = page - 1

        const minimalSizeExceeded = newPage < 1
        if (minimalSizeExceeded) {
            return
        }

        await animateOut()
        router.push({
            pathname: pathname,
            query: { page: newPage },
        })
    }

    const animateOut = useCallback(async () => {
        simulation.current?.stop()
        const d3Svg = d3.select(svgRef.current)
        const foreignNodes = d3Svg.selectAll(`.foreign-${selector}`)

        await foreignNodes.transition().duration(110).attr('width', 0).attr('height', 0).attr('opacity', 0).end()
    }, [selector, simulation, svgRef])

    return {
        paginateNext,
        paginateBack,
        totalPages: Math.ceil((total + 1) / pageSize),
        total: total + 1,
        currentPage: router.query.page ?? 0 + 1,
    }
}
