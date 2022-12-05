import { useCallback } from 'react'
import { D3PaginatedCloudItem, useD3Simulation } from './hooks/useD3Simulation'
import { useTheme } from '@chakra-ui/react'
import { useFitDataToDimensions } from '@/features/galaxy/hooks/useFitToDataToDimensions'
import { useRandomBackgroundData } from '@/features/galaxy/hooks/useRandomColorData'
import { useD3DataCopy } from '@/features/shared/hooks/copy'
import { useD3ZoomEvents } from '../../hooks/useD3ZoomEvents'
import { PaginatedFilterCloudsProps } from './PaginatedFilterClouds'
import { includesZoomStatesZoom3Galaxy } from '../../GalaxyInterface/GalaxyInterface'
import { ZoomStates } from '../../types/galaxy'
import { useD3Pagination } from '../../hooks/useD3Pagination'
import { State } from '@/features/shared/configs/store'
import { useSelector } from 'react-redux'

interface Props extends PaginatedFilterCloudsProps {
    selector: string
}

export function usePresenter(props: Props) {
    const { total, selector, dimensions, paginatedCloudItems, type, filter } = props
    const theme = useTheme()
    const params = useSelector((state: State) => state.galaxyInterface.params)
    const dataCopy = useD3DataCopy(paginatedCloudItems)
    const dataDimensions = useFitDataToDimensions(dimensions, dataCopy, getId, d => d.count ?? 0)
    const getColor = useCallback(() => {
        return theme.colors.levels.z2.colors[`${type}Filters`][filter as string]
    }, [filter, type, theme.colors.levels.z2.colors])
    const backgrounds = useRandomBackgroundData(dataCopy, getId, getColor())
    const { svgRef } = useD3Simulation(dimensions, dataCopy, selector, dataDimensions)
    const zoomEvents = useD3ZoomEvents({ svgRef, dimensions })
    const pagination = useD3Pagination({
        pageSize: 28,
        page: props.page,
        total: total ?? 0,
        states: {
            zoomBackState: ZoomStates.Zoom3ToInitial,
            zoomInState: ZoomStates.Zoom3Initial,
        },
        params,
    })

    return {
        svgRef,
        dataDimensions,
        ...zoomEvents,
        ...pagination,
        ...props,
        paginatedCloudItems: dataCopy,
        backgrounds,
        conditionals: {
            shouldDisplayText: includesZoomStatesZoom3Galaxy.includes(zoomEvents.zoomLevel as ZoomStates),
        },
    }
}

export function getId(d: D3PaginatedCloudItem) {
    return d.uri ?? d.name ?? ''
}
