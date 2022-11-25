import { useMemo, useRef } from 'react'

import { Dimensions } from '../../../galaxy/types/galaxy'
import { useD3ZoomEvents } from '../../newsharedhooks/useD3ZoomEvents'
import { useRouteTransitions } from '../../newsharedhooks/useRouteTransitions'
import { ZoomStates } from '../../types/galaxy'
import { GALAXY_BASE, MainGalaxyProps } from './Galaxy'
import { useD3Simulation } from './hooks/useD3Simulation'
import { fitDataToDimensions } from './mappers/mappedFittingDimensionsData'
import { CloudItem, StoriesItem } from './types'

interface Props extends MainGalaxyProps {
    dimensions: Dimensions
    cloudData: CloudItem[]
    storiesData: StoriesItem[]
    id: string
    selector: string
}

export function usePresenter(props: Props) {
    const { cloudData, dimensions, selector } = props
    const galaxyBase = GALAXY_BASE
    // const archiefBestandDelen = useArchiefBestandDeel(zoomLevel1Data)
    const svgRef = useRef<SVGSVGElement | null>(null)
    const dataDimensions = useMemo(() => fitDataToDimensions(galaxyBase, cloudData), [cloudData, galaxyBase])
    useD3Simulation({ svgRef, data: cloudData, selector, dataDimensions, galaxyBase })
    const zoomEvents = useD3ZoomEvents(svgRef, dimensions)

    return {
        svgRef,
        dataDimensions,
        ...zoomEvents,
        ...props,
        // archiefBestandDelen,
        conditions: {
            isZoom0: zoomEvents.zoomLevel ? [ZoomStates.Zoom0].includes(zoomEvents.zoomLevel) : false,
            isZoom1: zoomEvents.zoomLevel
                ? [ZoomStates.Zoom0, ZoomStates.Zoom1, ZoomStates.Zoom0ToZoom1].includes(zoomEvents.zoomLevel)
                : false,
            isZoom1Stories: zoomEvents.zoomLevel
                ? [ZoomStates.Zoom0, ZoomStates.Zoom0ToZoom1].includes(zoomEvents.zoomLevel)
                : false,
        },
    }
}
