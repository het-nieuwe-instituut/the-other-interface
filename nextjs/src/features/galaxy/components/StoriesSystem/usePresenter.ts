/* eslint-disable @typescript-eslint/no-explicit-any */

import HomepageContext from '@/features/pages/containers/HomepageContainer/HomepageContext'
import { useContext, useMemo } from 'react'
// import { useZoomLevel1Query } from 'src/generated/graphql'
import { useStoriesTooltip } from './hooks/useStoriesTooltip'
import { getDataPoints, getTriangles, InstancesPerClass } from './utils/storiesSystemUtils'

export function usePresenter(stories: InstancesPerClass[]) {
    const { zoomLevel1: data } = useContext(HomepageContext)
    const storiesTooltip = useStoriesTooltip()

    const triangles = useMemo(() => {
        return getTriangles()
    }, [])
    const dataPoints = useMemo(() => getDataPoints(stories, triangles), [stories, triangles])

    return {
        triangles,
        dataPoints,
        items: data?.zoomLevel1 ?? [],
        loading: false,
        ...storiesTooltip,
    }
}
