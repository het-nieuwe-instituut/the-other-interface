import { randomNumberBetweenPoints } from '@/features/shared/utils/numbers'
import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import { EntityNames, useZoomLevel2Query } from 'src/generated/graphql'
import { LandingPageQueryParams } from 'src/pages/landingpage/[slug]'
import { useFitDataToDimensions } from '../hooks/useFitToDataToDimensions'
import { useZoomToD3Element } from '../hooks/useZoomToD3Element'
import { useD3Simulation } from './hooks/useD3Simulation'

import { Dimensions, FilterType } from './types'

const TypeToEntityName: Record<string, EntityNames> = {
    publications: EntityNames.Publications,
    people: EntityNames.People,
    objects: EntityNames.Objects,
    archives: EntityNames.Archives
}

export function usePresenter(dimensions: Dimensions, selector: string) {
    const router = useRouter()
    const queryParams = router.query as unknown as LandingPageQueryParams
    const type = queryParams.slug
    
    const { data: filters, loading: isFiltersLoading, error: filtersError } = useZoomLevel2Query({
        variables: {
           entityName: TypeToEntityName[type]
        },
    });

    const objectsPerTypeWithIds = useMemo(() => filters?.zoomLevel2?.map(item => ({ ...item, name: item?.filter, numberOfInstances: randomNumberBetweenPoints(60, 250) })), [filters?.zoomLevel2]) ?? []

    // TODO solve rerender problems
    // console.log(objectsPerTypeWithIds)
    
    const dataDimensions = useFitDataToDimensions(
        dimensions,
        objectsPerTypeWithIds,
        d => d.name,
        d => d.numberOfInstances
    )
    const { svgRef } = useD3Simulation(dimensions, objectsPerTypeWithIds, selector, dataDimensions)
    const navigateTo = useCallback(
        async (d: d3.SimulationNodeDatum & FilterType) => {
            router.push(`${router.query.slug}/${d.name}`)
        },
        [router]
    )
    const zoomEvents = useZoomToD3Element<FilterType>(svgRef, dimensions, `.foreign-${selector}`, navigateTo)

    return {
        svgRef,
        dataDimensions,
        ...zoomEvents,
        objectsPerTypeWithIds,
        isFiltersLoading,
        filtersError
    }
}
