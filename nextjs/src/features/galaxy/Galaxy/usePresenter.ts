import HomepageContext from '@/features/pages/containers/HomepageContainer/HomepageContext'
import LandingpageContext from '@/features/pages/containers/LandingpageContainer/LandingpageContext'
import { times, uniqueId } from 'lodash'
import { useRouter } from 'next/router'
import { useContext, useMemo, useRef } from 'react'
import { EntityNames, ZoomLevel1Query } from 'src/generated/graphql'
import { galaxyTypesToPositions } from '../galaxyConstants'
import { useD3ZoomEvents } from '../hooks/useD3ZoomEvents'
import { Dimensions, ZoomLevel } from '../types/galaxy'
import { GALAXY_BASE } from './Galaxy'
import { ObjectPerTypeWithName, useD3Simulation } from './hooks/useD3Simulation'
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

export function usePresenter(dimensions: Dimensions, selector: string) {
    const {  push } = useRouter()
    const { zoomLevel1 } = useContext(HomepageContext)
    const { stories: storiesData } = useContext(LandingpageContext)
    // TODO: remove hardcoded pageSize & paginate
    const objectsPerTypeWithIds = useObjectPerType(zoomLevel1)
    const archiefBestandDelen = useArchiefBestandDeel(zoomLevel1)

    const stories = useMemo(() => {
        const storiesCount = objectsPerTypeWithIds.find(item => item.id === EntityNames.Stories)?.count
        // on zoom level 0 and 1 we only need to show UI for galaxy, we don't need to fetch data. 
        const endData =  storiesData ? storiesData : Array(storiesCount).fill(0)
        const parents = times(endData.length / 10, i => `test${i}`)

        return endData
            .map(item => ({
                ...item,
                parent: parents[Math.floor((Math.random() * endData.length) / 10) + 1] ?? parents[0],
                id: uniqueId(),
                title: item?.attributes?.title ?? '',
                shortDescription: item?.attributes?.shortDescription,
                slug: item?.attributes?.slug ?? '',
            }))
            .slice(0, 1000)
    },  [objectsPerTypeWithIds, storiesData])

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
        isLoading: false,
        archiefBestandDelen,
        handleMoveToZoomLevel1,
    }
}
