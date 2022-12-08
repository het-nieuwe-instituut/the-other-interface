import { mapArchiveComponent } from '@/features/galaxyInterface/galaxies/MainGalaxy/mappers/mapArchiveComponent'
import { mappedStoriesToCloudStoriesItems } from '@/features/galaxyInterface/galaxies/MainGalaxy/mappers/mappedStoriesToCloudStoriesItems'
import {
    mapZoom1ToStoriesMeta,
    mapZoomLevel1DataTocloudData,
} from '@/features/galaxyInterface/galaxies/MainGalaxy/mappers/mapZoomLevel1DataTocloudData'
import HomepageContext from '@/features/pages/containers/HomepageContainer/HomepageContext'
import { times, uniqueId } from 'lodash'
import dynamic from 'next/dynamic'
import { useContext, useMemo } from 'react'
import { StoriesWithoutRelationsQuery } from 'src/generated/graphql'
import { Dimensions } from '../../../types/galaxy'

export const DynamicGalaxyNoSsr = dynamic(() => import('../../../galaxies/MainGalaxy/MainGalaxy'), {
    ssr: false,
})

const storiesWithoutRelationsQuery: StoriesWithoutRelationsQuery = {
    __typename: 'Query',
    storiesWithoutRelations: {
        __typename: 'StoryWithoutRelationsEntityResponseCollection',
        data: times(100, () => ({
            __typename: 'StoryWithoutRelationsEntity' as const,
            id: uniqueId(),
            attributes: {
                __typename: 'StoryWithoutRelations',
                title: 'title',
                slug: 'slug',
                shortDescription: 'short description',
            },
        })),
    },
}
export const DynamicGalaxyContainer: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
    const { zoomLevel1 } = useContext(HomepageContext)
    const cloudData = useMemo(() => mapZoomLevel1DataTocloudData(zoomLevel1), [zoomLevel1])
    const storiesData = useMemo(
        () => mappedStoriesToCloudStoriesItems(storiesWithoutRelationsQuery, cloudData),
        [cloudData]
    )
    const archiveComponent = useMemo(() => mapArchiveComponent(zoomLevel1), [zoomLevel1])
    const storyMeta = useMemo(() => mapZoom1ToStoriesMeta(zoomLevel1), [zoomLevel1])

    if (!zoomLevel1?.zoomLevel1.length) {
        return null
    }

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
