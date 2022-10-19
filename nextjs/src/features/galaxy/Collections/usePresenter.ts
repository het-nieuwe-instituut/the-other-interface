import { useRouter } from 'next/router'
import { useRef } from 'react'
import { Zoom3Query, ZoomLevel4ParentType } from 'src/generated/graphql'

import { useD3Pagination } from '../hooks/useD3Pagination'

export function usePresenter(data: ZoomLevel4ParentType, selector: string) {
    const router = useRouter()
    const svgRef = useRef<SVGSVGElement | null>(null)

    const pagination = useD3Pagination({
        selector,
        svgRef,
        pageSize: 28,
        pathname: `/landingpage/${router.query.slug}/${router.query.filter}/${router.query.collection}`,
        total: data?.total ?? 0,
    })

    return {
        svgRef,
        ...pagination,
    }
}

export function getId(d: Zoom3Query['zoomLevel3'][0]) {
    return d.uri ?? d.name ?? ''
}
