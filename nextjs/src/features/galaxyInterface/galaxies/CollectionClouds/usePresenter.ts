import { useD3Pagination } from '@/features/galaxy/hooks/useD3Pagination'
import { useD3DataCopy } from '@/features/shared/hooks/copy'
import { useRouter } from 'next/router'
import { useD3ZoomEvents } from '../../hooks/useD3ZoomEvents'
import { useD3Simulation } from './hooks/useD3Simulation'
import { PaginatedCollectionProps } from './PaginatedCollectionContainer'

interface Props extends PaginatedCollectionProps {
    selector: string
}
export function usePresenter(props: Props) {
    const { dimensions, paginatedCollectionData, selector, total } = props
    const router = useRouter()
    const dataCopy = useD3DataCopy(paginatedCollectionData)
    const { svgRef, simulation } = useD3Simulation(dimensions)
    const zoomEvents = useD3ZoomEvents({ dimensions, svgRef })
    const pagination = useD3Pagination({
        simulation,
        selector,
        svgRef,
        pageSize: 28,
        pathname: `/landingpage/${router.query.slug}/${router.query.filter}/${router.query.collection}`,
        total: total ?? 0,
    })
    console.log(dataCopy)

    return {
        svgRef,
        ...props,
        paginatedCollectionData: dataCopy,
        ...pagination,
        ...zoomEvents,
    }
}
