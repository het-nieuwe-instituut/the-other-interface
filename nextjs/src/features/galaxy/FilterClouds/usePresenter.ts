import { randomNumberBetweenPoints } from '@/features/shared/utils/numbers'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { ZoomLevel2Query } from 'src/generated/graphql'
import { useFitDataToDimensions } from '../hooks/useFitToDataToDimensions'
import { useZoomToD3Element } from '../hooks/useZoomToD3Element'
import { useD3Simulation } from './hooks/useD3Simulation'
import { Dimensions, FilterType } from './types'

export function usePresenter(dimensions: Dimensions, selector: string, zoom2: ZoomLevel2Query['zoomLevel2']) {
    const router = useRouter()
    const objectsPerTypeWithIds = useMemo(
        () =>
            zoom2.map(item => ({
                ...item,
                name: item?.filter,
                numberOfInstances: randomNumberBetweenPoints(60, 250),
            })),
        [zoom2]
    )

    const dataDimensions = useFitDataToDimensions(
        dimensions,
        objectsPerTypeWithIds,
        d => d.name,
        d => d.numberOfInstances
    )
    const { svgRef } = useD3Simulation(dimensions, objectsPerTypeWithIds, selector, dataDimensions)
    const navigateTo = useCallback(
        async (d: d3.SimulationNodeDatum & FilterType) => {
            router.push(`${router.query.slug}/${d.id}`)
        },
        [router]
    )
    const zoomEvents = useZoomToD3Element<FilterType>(svgRef, dimensions, `.foreign-${selector}`, navigateTo)

    return {
        svgRef,
        dataDimensions,
        ...zoomEvents,
        objectsPerTypeWithIds,
    }
}
