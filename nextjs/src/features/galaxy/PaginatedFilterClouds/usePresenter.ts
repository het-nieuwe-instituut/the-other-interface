import { useRouter } from 'next/router'
import { useCallback, useContext, useMemo } from 'react'
import { Zoom3Query } from 'src/generated/graphql'
import { useFitDataToDimensions } from '../hooks/useFitToDataToDimensions'

import { useD3Pagination } from '../hooks/useD3Pagination'
import { useRandomBackgroundData } from '../hooks/useRandomColorData'
import { useZoomToD3Element } from '../hooks/useZoomToD3Element'
import { useD3Simulation } from './hooks/useD3Simulation'

// import { useApolloClient } from '@apollo/client'
import { useTheme } from '@chakra-ui/react'
// import { SupportedLandingPages, Zoom3QueryDocument } from './PaginatedFilterCloudsContainer'
import { PaginatedFilterType } from './types'
// import LandingpageFilterContext from '@/features/pages/containers/LandingpageFilterContainer/LandingpageFilterContext'

interface Dimensions {
    height?: number | null
    width?: number | null
}

export function usePresenter(dimensions: Dimensions, data: Zoom3Query['zoomLevel3'], selector: string) {
    const router = useRouter()
    const theme = useTheme()
    // const client = useApolloClient()
    const dataCopy = useMemo(() => JSON.parse(JSON.stringify(data)), [data])
    const dataDimensions = useFitDataToDimensions(dimensions, dataCopy, getId, d => d.count ?? 0)
    const getColor = useCallback(() => {
        return theme.colors.levels.z2.colors[`${router.query.slug}Filters`][router.query.filter as string]
    }, [router.query.filter, router.query.slug, theme.colors.levels.z2.colors])

    const backgrounds = useRandomBackgroundData(dataCopy, getId, getColor())
    const { svgRef, simulation } = useD3Simulation(dimensions, dataCopy, selector, dataDimensions)
    const navigateTo = useCallback(
        (d: d3.SimulationNodeDatum & PaginatedFilterType) => {
            router.push(`/landingpage/${router.query.slug}/${router.query.filter}/${d.name}`)
        },
        [router]
    )
    const zoomEvents = useZoomToD3Element<PaginatedFilterType>(svgRef, dimensions, `.foreign-${selector}`, navigateTo)
    const pagination = useD3Pagination({
        simulation,
        selector,
        svgRef,
        pageSize: 16,
        pathname: `/landingpage/${router.query.slug}/${router.query.filter}`,
        total: data[0]?.total ?? 0,
    })

    // function getTotal() {
    //     const res = client.readQuery({
    //         query: Zoom3QueryDocument[router.query.slug as SupportedLandingPages],
    //         variables: {
    //             filterId: (router.query.filter as string) ?? '',
    //             page: parseInt((router.query.page as string) ?? '1'),
    //             pageSize: 16,
    //         },
    //     })

    //     if (!res?.zoomLevel3?.length) {
    //         return 0
    //     }

    //     return res.zoomLevel3[0].total
    // }

    return {
        svgRef,
        dataDimensions,
        ...zoomEvents,
        ...pagination,
        backgrounds,
    }
}

export function getId(d: Zoom3Query['zoomLevel3'][0]) {
    return d.uri ?? d.name ?? ''
}
