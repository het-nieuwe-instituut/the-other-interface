import { times, uniqueId } from 'lodash'
import { useRouter } from 'next/router'
import { useMemo, useRef } from 'react'
import { EntityNames, useStoriesQuery, useZoomLevel1Query, ZoomLevel1Query } from 'src/generated/graphql'
import { galaxyTypesToPositions } from '../galaxyConstants'
import { useD3ZoomEvents } from '../hooks/useD3ZoomEvents'
import { Dimensions, ZoomLevel } from '../types/galaxy'
import { GALAXY_BASE } from './Galaxy'
import { ObjectPerTypeWithName, useD3Simulation } from './hooks/useD3Simulation'
import { useFitDataToDimensions } from './hooks/useFitDataToDimensions'

function useObjectPerType(zoomLevel1Data?: ZoomLevel1Query) {
    const objectsPerTypeWithIds = useMemo(() => {
        const items =
            zoomLevel1Data?.zoomLevel1.filter(item => {
                if (item.name === 'Archiefbestanddelen') {
                    return false
                }
                if (item.id === EntityNames.Stories) {
                    return false
                }

                return true
            }) ?? []

        const newItems: ObjectPerTypeWithName[] = items.map(item => {
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

        return newItems
    }, [zoomLevel1Data])

    return objectsPerTypeWithIds
}

function useArchiefBestandDeel(zoomLevel1Data?: ZoomLevel1Query) {
    const objectsPerTypeWithIds = useMemo(() => {
        const items =
            zoomLevel1Data?.zoomLevel1.filter(item => {
                if (item.name === 'Archiefbestanddelen') {
                    return false
                }
                if (item.id === EntityNames.Stories) {
                    return false
                }

                return true
            }) ?? []

        return items[0]
    }, [zoomLevel1Data])

    return objectsPerTypeWithIds
}

export function usePresenter(dimensions: Dimensions, selector: string) {
    const { data: zoomLevel1Data } = useZoomLevel1Query({ fetchPolicy: 'no-cache', nextFetchPolicy: 'no-cache' })
    const { data: storiesData, loading: isLoading } = useStoriesQuery()
    const objectsPerTypeWithIds = useObjectPerType(zoomLevel1Data)
    const router = useRouter()
    const archiefBestandDelen = useArchiefBestandDeel(zoomLevel1Data)

    const stories = useMemo(() => {
        const data = storiesData?.stories?.data || []
        const parents = times(data.length / 10, i => `test${i}`)

        return data
            .map(item => ({
                ...item,
                parent: parents[Math.floor((Math.random() * data.length) / 10) + 1] ?? parents[0],
                id: uniqueId(),
                title: item?.attributes?.title ?? '',
                slug: item?.attributes?.slug ?? '',
            }))
            .slice(0, 1000)
    }, [storiesData])

    const handleMoveToZoomLevel1 = () => {
        router.push({ pathname: '/', query: { zoomLevel: ZoomLevel.Zoom1 } }, undefined, { shallow: true })
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
        isLoading,
        archiefBestandDelen,
        handleMoveToZoomLevel1,
    }
}
