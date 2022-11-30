import { useD3Pagination } from '@/features/galaxy/hooks/useD3Pagination'
import { useZoomToD3Element } from '@/features/galaxy/hooks/useZoomToD3Element'
import { useD3DataCopy } from '@/features/shared/hooks/copy'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { ZoomLevel4Type } from 'src/generated/graphql'
import { useD3Simulation } from './hooks/useD3Simulation'
import { PaginatedCollectionProps } from './PaginatedCollectionContainer'

interface Props extends PaginatedCollectionProps {
    selector: string
}
export function usePresenter(props: Props) {
    const { dimensions, paginatedCollectionData, selector, total } = props
    const router = useRouter()
    const dataCopy = useD3DataCopy(paginatedCollectionData)

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
            const splittedUrl = d.record.split('/')

            const id = splittedUrl[splittedUrl.length - 1]
            const typeFromRecord = splittedUrl[splittedUrl.length - 2]
            const type = getCorrectType(typeFromRecord)
            return router.push(
                `/landingpage/${router.query.slug}/${router.query.filter}/${router.query.collection}/${id}-${type}`
            )
        },
        [router]
    )
    const zoomEvents = useZoomToD3Element<ZoomLevel4Type>(
        svgRef,
        dimensions,
        `.foreign-${selector}`,
        navigateTo,
        dataCopy
    )

    return {
        svgRef,
        ...props,
        paginatedCollectionData: dataCopy,
        ...pagination,
        ...zoomEvents,
    }
}

function getCorrectType(type: string) {
    const publications = ['books', 'audiovisual', 'article', 'serial']
    const archives = ['fonds', 'other']

    const isInPublicationList = !!publications.find(v => v === type)
    const isInArchivesList = !!archives.find(v => v === type)

    if (isInPublicationList) {
        return 'publications'
    }

    if (isInArchivesList) {
        return 'archives'
    }

    return type
}
