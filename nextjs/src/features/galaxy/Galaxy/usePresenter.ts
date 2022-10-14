import { times, uniqueId } from 'lodash'
import { useMemo, useRef } from 'react'
import { EntityNames, useStoriesQuery, useZoomLevel1Query } from 'src/generated/graphql'
import { galaxyTypesToPositions } from '../galaxyConstants'
import { useD3ZoomEvents } from '../hooks/useD3ZoomEvents'
import { useFitDataToDimensions } from './hooks/useFitDataToDimensions'
import { Dimensions } from '../types/galaxy'
import { GALAXY_BASE } from './Galaxy'
import { ObjectPerTypeWithName, useD3Simulation } from './hooks/useD3Simulation'

export function usePresenter(dimensions: Dimensions, selector: string) {
    const { data: zoomLevel1Data } = useZoomLevel1Query({ fetchPolicy: 'no-cache', nextFetchPolicy: 'no-cache' })
    const { data: storiesData, loading: isLoading } = useStoriesQuery()
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
        const newItems: ObjectPerTypeWithName[] = []
        items.forEach(item => {
            console.log(item)
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

            // if (item.name === 'Archieven') {
            //     newItem.itemsName = archiveItem?.name
            //     newItem.numberOfInstances = galaxyTypesToPositions[item.id].fixedNumberOfInstances ?? archiveItem?.count
            //     newItem.itemsCount = archiveItem.count
            // }

            newItems.push(newItem)
        })

        return newItems
    }, [zoomLevel1Data])

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
    }
}
