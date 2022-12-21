/* eslint-disable @typescript-eslint/no-explicit-any */

import { Random } from '@/features/galaxy/utils/math'
import HomepageContext from '@/features/pages/containers/HomepageContainer/HomepageContext'
import { useContext, useMemo, useRef } from 'react'
import { StoriesItem } from '../../galaxies/MainGalaxy/types'
// import { useZoomLevel1Query } from 'src/generated/graphql'
import { useStoriesTooltip } from './hooks/useStoriesTooltip'
import { getDataPoints, getTriangles } from './utils/storiesSystemUtils'

export function usePresenter(stories: StoriesItem[]) {
    const { zoomLevel1: data } = useContext(HomepageContext)
    const storiesTooltip = useStoriesTooltip()
    const random = useRef(new Random(123))

    const triangles = useMemo(() => {
        return getTriangles()
    }, [])
    const dataPoints = useMemo(
        () => getDataPoints(() => random.current.nextNumber(), stories, triangles),
        [stories, triangles]
    )

    return {
        triangles,
        dataPoints,
        items: data?.zoomLevel1 ?? [],
        loading: false,
        ...storiesTooltip,
    }
}
