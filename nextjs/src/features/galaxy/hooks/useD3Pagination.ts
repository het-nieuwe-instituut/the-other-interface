import { useApolloClient } from '@apollo/client'
import * as d3 from 'd3'
import { Simulation } from 'd3'
import { useRouter } from 'next/router'
import { MutableRefObject, useCallback } from 'react'
import { Zoom3Document } from 'src/generated/graphql'

import { D3CollectionItem } from '../PaginatedFilterClouds/hooks/useD3Simulation'

interface Props {
    simulation: MutableRefObject<Simulation<D3CollectionItem, undefined> | null>
    selector: string
    svgRef: MutableRefObject<SVGSVGElement | null>
    pathname: string
    pageSize: number
}

export function useD3Pagination({ simulation, selector, svgRef, pathname, pageSize }: Props) {
    const router = useRouter()
    const client = useApolloClient()

    async function paginateNext() {
        await animateOut()

        const page = router.query.page ? parseInt(router.query.page as string) : 0
        const newPage = page + 1
        const total = getTotal()
        const totalSizeExceeded = newPage > (total ?? 0)
        if (totalSizeExceeded) {
            return
        }

        router.push({
            pathname: pathname,
            query: { page: newPage },
        })
    }

    async function paginateBack() {
        await animateOut()

        const page = router.query.page ? parseInt(router.query.page as string) : 0
        const newPage = page - 1

        const minimalSizeExceeded = newPage < 0
        if (minimalSizeExceeded) {
            return
        }

        router.push({
            pathname: pathname,
            query: { page: newPage },
        })
    }

    function getTotal() {
        const res = client.readQuery({
            query: Zoom3Document,
            variables: {
                filterId: (router.query.filter as string) ?? '',
                page: parseInt((router.query.page as string) ?? '0'),
                pageSize: pageSize,
            },
        })

        return res.zoomLevel3[0].total
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
        totalPages: Math.ceil((getTotal() + 1) / pageSize),
        total: getTotal() + 1,
        currentPage: router.query.page ?? 0 + 1,
    }
}
