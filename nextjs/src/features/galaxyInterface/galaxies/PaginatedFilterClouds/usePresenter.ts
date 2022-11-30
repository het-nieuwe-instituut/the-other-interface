import { useCallback } from 'react'
import { D3PaginatedCloudItem, useD3Simulation } from './hooks/useD3Simulation'
import { useTheme } from '@chakra-ui/react'
import { useD3Pagination } from '@/features/galaxy/hooks/useD3Pagination'
import { useFitDataToDimensions } from '@/features/galaxy/hooks/useFitToDataToDimensions'
import { useRandomBackgroundData } from '@/features/galaxy/hooks/useRandomColorData'
import { useD3DataCopy } from '@/features/shared/hooks/copy'
import { useD3ZoomEvents } from '../../newsharedhooks/useD3ZoomEvents'
import { PaginatedFilterCloudsProps } from './PaginatedFilterClouds'

interface Props extends PaginatedFilterCloudsProps {
    selector: string
}

export function usePresenter(props: Props) {
    const { total, selector, dimensions, paginatedCloudItems, type, filter } = props
    const theme = useTheme()
    const dataCopy = useD3DataCopy(paginatedCloudItems)
    const dataDimensions = useFitDataToDimensions(dimensions, dataCopy, getId, d => d.count ?? 0)

    const getColor = useCallback(() => {
        return theme.colors.levels.z2.colors[`${type}Filters`][filter as string]
    }, [filter, type, theme.colors.levels.z2.colors])
    const backgrounds = useRandomBackgroundData(dataCopy, getId, getColor())
    const { svgRef, simulation } = useD3Simulation(dimensions, dataCopy, selector, dataDimensions)
    const zoomEvents = useD3ZoomEvents(svgRef, dimensions)
    const pagination = useD3Pagination({
        simulation,
        selector,
        svgRef,
        pageSize: 16,
        pathname: `/landingpage/${type}/${filter}`,
        total: total,
    })

    return {
        svgRef,
        dataDimensions,
        ...zoomEvents,
        ...pagination,
        ...props,
        paginatedCloudItems: dataCopy,
        backgrounds,
    }
}

export function getId(d: D3PaginatedCloudItem) {
    return d.uri ?? d.name ?? ''
}
