import { times, uniqueId } from 'lodash'
import { useRouter } from 'next/router'
import { useMemo, useRef } from 'react'
import { EntityNames, StoriesWithoutRelationsQuery, ZoomLevel1Query } from 'src/generated/graphql'
import { galaxyTypesToPositions } from '../../../galaxy/galaxyConstants'
import { useD3ZoomEvents } from '../../../galaxy/hooks/useD3ZoomEvents'
import { Dimensions, ZoomLevel } from '../../../galaxy/types/galaxy'
import { ObjectPerTypeWithName } from './d3/simulation'
import { GALAXY_BASE } from './Galaxy'
import { useFitDataToDimensions } from './hooks/useFitDataToDimensions'

function useObjectPerType(zoomLevel1Data?: ZoomLevel1Query) {
    const objectsPerTypeWithIds: ObjectPerTypeWithName[] = useMemo(() => {
        const items = zoomLevel1Data?.zoomLevel1.filter(item => item.name !== 'Archiefbestanddelen') ?? []

        return items.map(item => {
            const config = galaxyTypesToPositions[item.id]
            const newItem: ObjectPerTypeWithName = {
                ...item,
                id: item.id,
                yFromCenter: config.yFromCenter,
                xFromCenter: config.xFromCenter,
                fixedNumberOfInstances: config.fixedNumberOfInstances ?? item.count,
                numberOfInstances: item.count,
                class: item.id?.toLowerCase(),
            }

            return newItem
        })
    }, [zoomLevel1Data])

    return objectsPerTypeWithIds
}

function useArchiefBestandDeel(zoomLevel1Data?: ZoomLevel1Query) {
    return useMemo(() => zoomLevel1Data?.zoomLevel1.find(item => item.name === 'Archiefbestanddelen'), [zoomLevel1Data])
}

export function usePresenter(
    zoomLevel1Data: ZoomLevel1Query,
    storiesData: StoriesWithoutRelationsQuery,
    dimensions: Dimensions,
    selector: string
) {
    const {
        query: { slug },
        push,
    } = useRouter()
    const isStories = slug === 'stories'
    // TODO: remove hardcoded pageSize & paginate
    const objectsPerTypeWithIds = useObjectPerType(zoomLevel1Data)
    const archiefBestandDelen = useArchiefBestandDeel(zoomLevel1Data)

    const stories = useMemo(() => {
        const data = storiesData?.storiesWithoutRelations?.data || []

        if (isStories && !storiesData?.storiesWithoutRelations) return
        if (!isStories && !objectsPerTypeWithIds) return

        const storiesCount = objectsPerTypeWithIds.find(item => item.id === EntityNames.Stories)?.count
        // on zoom level 0 and 1 we only need to show UI for galaxy, we don't need to fetch data.
        const endData = isStories ? data : Array(storiesCount).fill(0)
        const parents = times(data.length / 10, i => `test${i}`)

        return endData
            .map(item => ({
                ...item,
                parent: parents[Math.floor((Math.random() * data.length) / 10) + 1] ?? parents[0],
                id: uniqueId(),
                title: item?.attributes?.title ?? '',
                shortDescription: item?.attributes?.shortDescription,
                slug: item?.attributes?.slug ?? '',
            }))
            .slice(0, 1000)
    }, [storiesData, objectsPerTypeWithIds, isStories])

    const handleMoveToZoomLevel1 = () => {
        push({ pathname: '/', query: { zoomLevel: ZoomLevel.Zoom1 } }, undefined, { shallow: true })
        zoomEvents?.setZoomLevel(ZoomLevel.Zoom1)
    }

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
        archiefBestandDelen,
        handleMoveToZoomLevel1,
    }
}
