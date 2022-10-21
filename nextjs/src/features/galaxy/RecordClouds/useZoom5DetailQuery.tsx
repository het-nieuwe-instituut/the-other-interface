import { ApolloClient, NormalizedCacheObject, QueryOptions } from '@apollo/client'
import {
    useZoomLevel5ObjectQuery,
    useZoomLevel5PersonQuery,
    ZoomLevel5ObjectDocument,
    ZoomLevel5ObjectQuery,
    ZoomLevel5ObjectQueryVariables,
    ZoomLevel5PersonDocument,
    ZoomLevel5PersonQuery,
    ZoomLevel5PersonQueryVariables,
} from 'src/generated/graphql'

export enum SupportedQuerys {
    people = 'people',
    // 'archives' = 'archives',
    // 'publications' = 'publications',
    objects = 'objects',
}
export const config = {
    // ['archivesOther']: {
    //     useHook: useZoomLevel5ArchivesOtherQuery,
    //     accessor: (data?: ReturnType<typeof useZoomLevel5ArchivesOtherQuery>['data']) => data?.zoomLevel5ArchivesOther,
    // },
    // ['archivesFonds']: {
    //     useHook: useZoomLevel5ArchivesFondsQuery,
    //     accessor: (data?: ReturnType<typeof useZoomLevel5ArchivesFondsQuery>['data']) => data?.zoomLevel5ArchivesFonds,
    // },
    // ['publicationsSerial']: {
    //     useHook: useZoomLevel5PublicationsSerialQuery,
    //     accessor: (data?: ReturnType<typeof useZoomLevel5PublicationsSerialQuery>['data']) =>
    //         data?.zoomLevel5PublicationsSerial,
    // },
    // ['publicationsArticle']: {
    //     useHook: useZoomLevel5PublicationsArticleQuery,
    //     accessor: (data?: ReturnType<typeof useZoomLevel5PublicationsArticleQuery>['data']) =>
    //         data?.zoomLevel5PublicationsArticle,
    // },
    // ['publicationsAudiovisual']: {
    //     useHook: useZoomLevel5PublicationsAudiovisualQuery,
    //     accessor: (data?: ReturnType<typeof useZoomLevel5PublicationsAudiovisualQuery>['data']) =>
    //         data?.zoomLevel5PublicationsAudiovisual,
    // },
    // ['publicationsBook']: {
    //     useHook: useZoomLevel5PublicationsBookQuery,
    //     accessor: (data?: ReturnType<typeof useZoomLevel5PublicationsBookQuery>['data']) =>
    //         data?.zoomLevel5PublicationsBook,
    // },
    [SupportedQuerys.objects]: {
        query: (
            client: ApolloClient<NormalizedCacheObject>,
            options: Omit<QueryOptions<ZoomLevel5ObjectQueryVariables, ZoomLevel5ObjectQuery>, 'query'>
        ) =>
            client.query<ZoomLevel5ObjectQuery, ZoomLevel5ObjectQueryVariables>({
                ...options,
                query: ZoomLevel5ObjectDocument,
            }),
        useHook: useZoomLevel5ObjectQuery,
        accessor: (data?: ReturnType<typeof useZoomLevel5ObjectQuery>['data']) => data?.zoomLevel5Object,
    },
    [SupportedQuerys.people]: {
        query: (
            client: ApolloClient<NormalizedCacheObject>,
            options: Omit<QueryOptions<ZoomLevel5PersonQueryVariables, ZoomLevel5PersonQuery>, 'query'>
        ) =>
            client.query<ZoomLevel5PersonQuery, ZoomLevel5PersonQueryVariables>({
                ...options,
                query: ZoomLevel5PersonDocument,
            }),
        useHook: useZoomLevel5PersonQuery,
        accessor: (data?: ReturnType<typeof useZoomLevel5PersonQuery>['data']) => data?.zoomLevel5Person,
    },
}

function getConfig<T extends keyof typeof config>(type: T) {
    return config[type] as typeof config[T]
}

export const dataAccessor = {
    // ['archivesOther']: 'zoomLevel5ArchivesOther' as const,
    // ['archivesFonds']: 'zoomLevel5ArchivesFonds' as const,
    // ['publicationsSerial']: 'zoomLevel5PublicationsSerial' as const,
    // ['publicationsArticle']: 'zoomLevel5PublicationsSerial' as const,
    // ['publicationsAudiovisual']: 'zoomLevel5PublicationsSerial' as const,
    // ['publicationsBook']: 'zoomLevel5PublicationsSerial' as const,
    [SupportedQuerys.objects]: 'zoomLevel5Object' as const,
    [SupportedQuerys.people]: 'zoomLevel5Person' as const,
}

export type ZoomLevel5DetailResponses = ReturnType<typeof useZoomLevel5DetailQuery>['data']

export function useZoomLevel5DetailQuery<T extends keyof typeof config>(
    type: T,
    options: { variables: Parameters<typeof config[keyof typeof config]['useHook']>[0]['variables'] }
) {
    const configByType = getConfig<T>(type)
    const query = configByType.useHook({
        variables: options.variables,
    })

    return {
        ...query,
        data: configByType.accessor(query.data),
    }
}
