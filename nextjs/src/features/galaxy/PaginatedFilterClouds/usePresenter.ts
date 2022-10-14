import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { Zoom3Query } from 'src/generated/graphql'
import { useFitDataToDimensions } from '../hooks/useFitToDataToDimensions'

import { useD3Pagination } from '../hooks/useD3Pagination'
import { useRandomBackgroundData } from '../hooks/useRandomColorData'
import { useZoomToD3Element } from '../hooks/useZoomToD3Element'
import { useD3Simulation } from './hooks/useD3Simulation'

import { useApolloClient } from '@apollo/client'
import { useTheme } from '@chakra-ui/react'
import { SupportedLandingPages, Zoom3QueryDocument } from './PaginatedFilterCloudsContainer'
import { PaginatedFilterType } from './types'

interface Dimensions {
    height?: number | null
    width?: number | null
}

export function usePresenter(dimensions: Dimensions, data: Zoom3Query['zoomLevel3'], selector: string) {
    const router = useRouter()
    const theme = useTheme()
    const client = useApolloClient()
    const dataDimensions = useFitDataToDimensions(dimensions, data, getId, d => d.count ?? 0)

    const getColor = useCallback(() => {
        return theme.colors.levels.z2.colors[`${router.query.slug}Filters`][router.query.filter as string]
    }, [router.query.filter, router.query.slug, theme.colors.levels.z2.colors])

    const backgrounds = useRandomBackgroundData(data, getId, getColor())
    console.log(data)
    const { svgRef, simulation } = useD3Simulation(dimensions, data, selector, dataDimensions)
    const navigateTo = useCallback(
        (d: d3.SimulationNodeDatum & PaginatedFilterType) => {
            router.push(`${router.query.slug}/${d.name}`)
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
        total: getTotal(),
    })

    function getTotal() {
        const res = client.readQuery({
            query: Zoom3QueryDocument[router.query.slug as SupportedLandingPages],
            variables: {
                filterId: (router.query.filter as string) ?? '',
                page: parseInt((router.query.page as string) ?? '0'),
                pageSize: 16,
            },
        })

        if (!res?.zoomLevel?.length) {
            return 0
        }

        return res.zoomLevel3[0].total
    }

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
