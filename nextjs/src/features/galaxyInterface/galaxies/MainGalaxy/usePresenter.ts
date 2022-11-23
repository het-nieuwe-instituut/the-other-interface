import { useRouter } from 'next/router'
import { useMemo, useRef } from 'react'
import { StoriesWithoutRelationsQuery, ZoomLevel1Query } from 'src/generated/graphql'

import { Dimensions, ZoomLevel } from '../../../galaxy/types/galaxy'
import { useD3ZoomEvents } from '../../newsharedhooks/useD3ZoomEvents'
import { GALAXY_BASE } from './Galaxy'
import { useD3Simulation } from './hooks/useD3Simulation'
import { fitDataToDimensions } from './mappers/mappedFittingDimensionsData'
import { mappedObjectPerType } from './mappers/mappedObjectsPerType'
import { mappedFittingDimensionsData } from './mappers/mappedStories'
function useArchiefBestandDeel(zoomLevel1Data?: ZoomLevel1Query) {
    return useMemo(() => zoomLevel1Data?.zoomLevel1.find(item => item.name === 'Archiefbestanddelen'), [zoomLevel1Data])
}

export function usePresenter(
    zoomLevel1Data: ZoomLevel1Query,
    storiesData: StoriesWithoutRelationsQuery,
    dimensions: Dimensions,
    selector: string
) {
    const galaxyBase = GALAXY_BASE
    const {
        query: { slug },
    } = useRouter()
    const isStories = slug === 'stories'
    const objectsPerTypeWithIds = useMemo(() => mappedObjectPerType(zoomLevel1Data), [zoomLevel1Data])
    const archiefBestandDelen = useArchiefBestandDeel(zoomLevel1Data)
    const stories = useMemo(() => {
        return isStories ? mappedFittingDimensionsData(storiesData, objectsPerTypeWithIds) : []
    }, [storiesData, objectsPerTypeWithIds, isStories])
    const svgRef = useRef<SVGSVGElement | null>(null)
    const dataDimensions = useMemo(
        () => fitDataToDimensions(galaxyBase, objectsPerTypeWithIds),
        [galaxyBase, objectsPerTypeWithIds]
    )
    useD3Simulation({ svgRef, data: objectsPerTypeWithIds, selector, dataDimensions, galaxyBase })

    const handleMoveToZoomLevel1 = () => {
        // push({ pathname: '/', query: { zoomLevel: ZoomLevel.Zoom1 } }, undefined, { shallow: true })
        // zoomEvents?.setZoomLevel(ZoomLevel.Zoom1)
    }

    const zoomEvents = useD3ZoomEvents(svgRef, dimensions)

    return {
        svgRef,
        dataDimensions,
        ...zoomEvents,
        objectsPerTypeWithIds,
        stories,
        archiefBestandDelen,
        handleMoveToZoomLevel1,
    }
}
