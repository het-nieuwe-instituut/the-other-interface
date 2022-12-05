import { State } from '@/features/shared/configs/store'
import { useD3DataCopy } from '@/features/shared/hooks/copy'
import { useSelector } from 'react-redux'
import { useD3Pagination } from '../../hooks/useD3Pagination'
import { useD3ZoomEvents } from '../../hooks/useD3ZoomEvents'
import { ZoomStates } from '../../types/galaxy'
import { useD3Simulation } from './hooks/useD3Simulation'
import { PaginatedCollectionProps } from './PaginatedCollection'

interface Props extends PaginatedCollectionProps {
    selector: string
}
export function usePresenter(props: Props) {
    const { dimensions, paginatedCollectionData, total } = props
    const dataCopy = useD3DataCopy(paginatedCollectionData)
    const { svgRef } = useD3Simulation(dimensions)
    const zoomEvents = useD3ZoomEvents({ dimensions, svgRef })
    const params = useSelector((state: State) => state.galaxyInterface.params)
    const pagination = useD3Pagination({
        pageSize: 28,
        page: props.page,
        total: total ?? 0,
        states: {
            zoomBackState: ZoomStates.Zoom4ToInitial,
            zoomInState: ZoomStates.Zoom4Initial,
        },
        params,
    })

    return {
        svgRef,
        ...props,
        paginatedCollectionData: dataCopy,
        ...pagination,
        ...zoomEvents,
    }
}
