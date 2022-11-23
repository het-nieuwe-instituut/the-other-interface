import { Dimensions } from '@/features/galaxy/types/galaxy'
import dynamic from 'next/dynamic'
import { EntityNames } from 'src/generated/graphql'

export const DynamicGalaxyNoSsr = dynamic(() => import('../../../galaxies/MainGalaxy/Galaxy'), {
    ssr: false,
})

export const DynamicGalaxyContainer: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
    return (
        <DynamicGalaxyNoSsr
            zoomLevel1Data={{
                zoomLevel1: [
                    {
                        name: 'Personen en Instellingen',
                        count: 124985,
                        id: EntityNames.People,
                        __typename: 'ZoomLevel1Type',
                    },
                    {
                        name: 'Publicaties',
                        count: 157961,
                        id: EntityNames.Publications,
                        __typename: 'ZoomLevel1Type',
                    },
                    {
                        name: 'Archieven',
                        count: 694,
                        id: EntityNames.Archives,
                        __typename: 'ZoomLevel1Type',
                    },
                    {
                        name: 'Archiefbestanddelen',
                        count: 491047,
                        id: EntityNames.Archives,
                        __typename: 'ZoomLevel1Type',
                    },
                    {
                        name: 'Objecten',
                        count: 14303,
                        id: EntityNames.Objects,
                        __typename: 'ZoomLevel1Type',
                    },
                    {
                        name: 'Stories',
                        count: 2,
                        id: EntityNames.Stories,
                        __typename: 'ZoomLevel1Type',
                    },
                ],
            }}
            storiesData={{
                stories: {
                    __typename: 'StoryEntityResponseCollection',
                    data: [
                        {
                            __typename: 'StoryEntity',
                            id: '10',
                            attributes: {
                                __typename: 'Story',
                                title: 'test',
                                slug: 'test',
                            },
                        },
                        {
                            __typename: 'StoryEntity',
                            id: '11',
                            attributes: {
                                __typename: 'Story',
                                title: 'test2',
                                slug: 'test2',
                            },
                        },
                    ],
                    meta: {
                        __typename: 'ResponseCollectionMeta',
                        pagination: {
                            __typename: 'Pagination',
                            page: 1,
                        },
                    },
                },
            }}
            dimensions={dimensions}
        />
    )
}
