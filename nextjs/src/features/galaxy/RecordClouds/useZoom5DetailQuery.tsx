import { ApolloClient, NormalizedCacheObject, QueryOptions } from '@apollo/client'
import {
    useZoomLevel5ArchivesQuery,
    useZoomLevel5ObjectQuery,
    useZoomLevel5PersonQuery,
    useZoomLevel5PublicationQuery,
    ZoomLevel5ArchivesDocument,
    ZoomLevel5ArchivesQuery,
    ZoomLevel5ArchivesQueryVariables,
    ZoomLevel5ObjectDocument,
    ZoomLevel5ObjectQuery,
    ZoomLevel5ObjectQueryVariables,
    ZoomLevel5PersonDocument,
    ZoomLevel5PersonQuery,
    ZoomLevel5PersonQueryVariables,
    ZoomLevel5PublicationDocument,
    ZoomLevel5PublicationQuery,
    ZoomLevel5PublicationQueryVariables,
} from 'src/generated/graphql'

export enum SupportedQuerys {
    people = 'people',
    archives = 'archives',
    publications = 'publications',
    objects = 'objects',
}
export const config = {
    [SupportedQuerys.publications]: {
        query: (
            client: ApolloClient<NormalizedCacheObject>,
            options: Omit<QueryOptions<ZoomLevel5PublicationQueryVariables, ZoomLevel5PublicationQuery>, 'query'>
        ) =>
            client.query<ZoomLevel5PublicationQuery, ZoomLevel5PublicationQueryVariables>({
                ...options,
                query: ZoomLevel5PublicationDocument,
            }),
        useHook: useZoomLevel5PublicationQuery,
        accessor: (data?: ReturnType<typeof useZoomLevel5PublicationQuery>['data']) => data?.zoomLevel5Publication,
    },
    [SupportedQuerys.archives]: {
        query: (
            client: ApolloClient<NormalizedCacheObject>,
            options: Omit<QueryOptions<ZoomLevel5ArchivesQueryVariables, ZoomLevel5ArchivesQuery>, 'query'>
        ) =>
            client.query<ZoomLevel5ArchivesQuery, ZoomLevel5ArchivesQueryVariables>({
                ...options,
                query: ZoomLevel5ArchivesDocument,
            }),
        useHook: useZoomLevel5ArchivesQuery,
        accessor: (data?: ReturnType<typeof useZoomLevel5ArchivesQuery>['data']) => data?.zoomLevel5Archive,
    },
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
