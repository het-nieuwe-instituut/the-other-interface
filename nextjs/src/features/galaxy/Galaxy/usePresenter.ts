import { useMemo, useRef } from 'react'
import { Dimensions } from '../types/galaxy'
import { GALAXY_BASE } from './Galaxy'
import { ObjectPerTypeWithName, useD3Simulation } from '../hooks/useD3Simulation'
import { useD3ZoomEvents } from '../hooks/useD3ZoomEvents'
import { useFitDataToDimensions } from '../hooks/useFitDataToDimensions'
import { times, uniqueId } from 'lodash'
import { useZoomLevel1Query, useStoriesQuery } from 'src/generated/graphql'
import { galaxyTypesToPositions } from '../galaxyConstants'

export function usePresenter(dimensions: Dimensions, selector: string) {
    const { data: zoomLevel1Data } = useZoomLevel1Query()
    const { data: storiesData, loading: isLoading } = useStoriesQuery()
    const objectsPerTypeWithIds = useMemo(
        () => zoomLevel1Data?.zoomLevel1?.map(item => ({ ...item, ...galaxyTypesToPositions[item?.id], numberOfInstances: item.count, class: item.id?.toLowerCase() })) as ObjectPerTypeWithName[],
        [zoomLevel1Data]
    )

    const stories = useMemo(() => {
        const data = storiesData?.stories?.data || []
        const parents = times(data.length / 10, i => `test${i}`)

        return data
            .map(item => ({
                ...item,
                parent: parents[Math.floor((Math.random() * data.length) / 10) + 1] ?? parents[0],
                id: uniqueId(),
                title: item?.attributes?.title ?? '',
                slug: item?.attributes?.slug ?? ''
            }))
            .slice(0, 1000)
    }, [storiesData])
    
    const svgRef = useRef<SVGSVGElement | null>(null)
    const galaxyBase = GALAXY_BASE
    const dataDimensions = useFitDataToDimensions(galaxyBase, objectsPerTypeWithIds)
    useD3Simulation(svgRef, dimensions, objectsPerTypeWithIds, selector, dataDimensions, galaxyBase)
    const zoomEvents = useD3ZoomEvents(svgRef, dimensions)

    return {
        svgRef,
        dataDimensions,
        ...zoomEvents,
        objectsPerTypeWithIds,
        stories,
        isLoading
    }
}
