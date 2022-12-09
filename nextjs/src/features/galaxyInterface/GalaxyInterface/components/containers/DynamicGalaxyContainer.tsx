import { mapArchiveComponent } from '@/features/galaxyInterface/galaxies/MainGalaxy/mappers/mapArchiveComponent'
import { mappedStoriesToCloudStoriesItems } from '@/features/galaxyInterface/galaxies/MainGalaxy/mappers/mappedStoriesToCloudStoriesItems'
import {
    mapZoom1ToStoriesMeta,
    mapZoomLevel1DataTocloudData,
} from '@/features/galaxyInterface/galaxies/MainGalaxy/mappers/mapZoomLevel1DataTocloudData'
import HomepageContext from '@/features/pages/containers/HomepageContainer/HomepageContext'
import LandingpageContext from '@/features/pages/containers/LandingpageContainer/LandingpageContext'
import dynamic from 'next/dynamic'
import { useContext, useMemo } from 'react'
import { EntityNames } from 'src/generated/graphql'
import { Dimensions } from '../../../types/galaxy'

export const DynamicGalaxyNoSsr = dynamic(() => import('../../../galaxies/MainGalaxy/MainGalaxy'), {
    ssr: false,
})

export const DynamicGalaxyContainer: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
    const { zoomLevel1 } = useContext(HomepageContext)
    const { stories } = useContext(LandingpageContext)
    const cloudData = useMemo(() => mapZoomLevel1DataTocloudData(zoomLevel1), [zoomLevel1])
    const storiesData = useMemo(
        () => {
            const storiesCount = zoomLevel1?.zoomLevel1.find(item => item.id === EntityNames.Stories)?.count ?? 0
            const endData = stories ? stories : Array(storiesCount).fill(0)
            console.log(mappedStoriesToCloudStoriesItems(endData), 'end data')
            return mappedStoriesToCloudStoriesItems(endData)
        },
        [zoomLevel1, stories]
    )
    const archiveComponent = useMemo(() => mapArchiveComponent(zoomLevel1), [zoomLevel1])
    const storyMeta = useMemo(() => mapZoom1ToStoriesMeta(zoomLevel1), [zoomLevel1])

    // if (!zoomLevel1?.zoomLevel1.length) {
    //     return null
    // }

    return (
        <DynamicGalaxyNoSsr
            cloudData={cloudData}
            storiesData={storiesData}
            storiesMetaData={storyMeta}
            archiveComponent={archiveComponent}
            dimensions={dimensions}
        />
    )
}
