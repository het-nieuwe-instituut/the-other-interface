import { Dimensions } from '../../../types/galaxy'
import { mapArchiveComponent } from '@/features/galaxyInterface/galaxies/MainGalaxy/mappers/mapArchiveComponent'
import { mappedStoriesToCloudStoriesItems } from '@/features/galaxyInterface/galaxies/MainGalaxy/mappers/mappedStoriesToCloudStoriesItems'
import {
    mapZoom1ToStoriesMeta,
    mapZoomLevel1DataTocloudData,
} from '@/features/galaxyInterface/galaxies/MainGalaxy/mappers/mapZoomLevel1DataTocloudData'
import { times, uniqueId } from 'lodash'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { EntityNames, StoriesWithoutRelationsQuery } from 'src/generated/graphql'

export const DynamicGalaxyNoSsr = dynamic(() => import('../../../galaxies/MainGalaxy/Galaxy'), {
    ssr: false,
})

const zoom1Stub = {
    zoomLevel1: [
        {
            name: 'Personen en Instellingen',
            count: 124985,
            id: EntityNames.People,
            __typename: 'ZoomLevel1Type' as const,
        },
        {
            name: 'Publicaties',
            count: 157961,
            id: EntityNames.Publications,
            __typename: 'ZoomLevel1Type' as const,
        },
        {
            name: 'Archieven',
            count: 694,
            id: EntityNames.Archives,
            __typename: 'ZoomLevel1Type' as const,
        },
        {
            name: 'Archiefbestanddelen' as const,
            count: 491047,
            id: EntityNames.Archives,
            __typename: 'ZoomLevel1Type' as const,
        },
        {
            name: 'Objecten',
            count: 14303,
            id: EntityNames.Objects,
            __typename: 'ZoomLevel1Type' as const,
        },
        {
            name: 'Stories',
            count: 2,
            id: EntityNames.Stories,
            __typename: 'ZoomLevel1Type' as const,
        },
    ],
}

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
    const cloudData = useMemo(() => mapZoomLevel1DataTocloudData(zoom1Stub), [])
    const storiesData = useMemo(
        () => mappedStoriesToCloudStoriesItems(storiesWithoutRelationsQuery, cloudData),
        [cloudData]
    )
    const archiveComponent = useMemo(() => mapArchiveComponent(zoom1Stub), [])
    const storyMeta = useMemo(() => mapZoom1ToStoriesMeta(zoom1Stub), [])

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
