import { ApolloClient, gql, NormalizedCacheObject, QueryOptions, useQuery } from '@apollo/client'
import { GetServerSidePropsContext } from 'next'

import {
    ArchivesRelationsDocument,
    ArchivesRelationsQuery,
    ArchivesRelationsQueryVariables,
    LandingpageBySlugDocument,
    LandingpageBySlugQuery,
    ObjectRelationsDocument,
    ObjectRelationsQuery,
    ObjectRelationsQueryVariables,
    PeopleRelationsDocument,
    PeopleRelationsQuery,
    PeopleRelationsQueryVariables,
    PublicationRelationsDocument,
    PublicationRelationsQuery,
    PublicationRelationsQueryVariables,
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
import { RecordQueryParams } from 'src/pages/landingpage/[slug]/[filter]/[collection]/[record]'

export enum SupportedQuerys {
    people = 'people',
    archives = 'archives',
    publications = 'publications',
    objects = 'objects',
    stories = 'stories',
}

const config = {
    [SupportedQuerys.publications]: {
        zoomLevelQuery: {
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
        relationsQuery: {
            query: (
                client: ApolloClient<NormalizedCacheObject>,
                options: Omit<QueryOptions<PublicationRelationsQueryVariables, PublicationRelationsQuery>, 'query'>
            ) =>
                client.query<PublicationRelationsQuery, PublicationRelationsQueryVariables>({
                    ...options,
                    query: PublicationRelationsDocument,
                }),
        },
    },
    [SupportedQuerys.archives]: {
        zoomLevelQuery: {
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
        relationsQuery: {
            query: (
                client: ApolloClient<NormalizedCacheObject>,
                options: Omit<QueryOptions<ArchivesRelationsQueryVariables, ArchivesRelationsQuery>, 'query'>
            ) =>
                client.query<ArchivesRelationsQuery, ArchivesRelationsQueryVariables>({
                    ...options,
                    query: ArchivesRelationsDocument,
                }),
        },
    },
    [SupportedQuerys.objects]: {
        zoomLevelQuery: {
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

        relationsQuery: {
            query: (
                client: ApolloClient<NormalizedCacheObject>,
                options: Omit<QueryOptions<ObjectRelationsQueryVariables, ObjectRelationsQuery>, 'query'>
            ) =>
                client.query<ObjectRelationsQuery, ObjectRelationsQueryVariables>({
                    ...options,
                    query: ObjectRelationsDocument,
                }),
        },
    },
    [SupportedQuerys.people]: {
        zoomLevelQuery: {
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
        relationsQuery: {
            query: (
                client: ApolloClient<NormalizedCacheObject>,
                options: Omit<QueryOptions<PeopleRelationsQueryVariables, PeopleRelationsQuery>, 'query'>
            ) =>
                client.query<PeopleRelationsQuery, PeopleRelationsQueryVariables>({
                    ...options,
                    query: PeopleRelationsDocument,
                }),
        },
    },
}

export type ZoomLevel5DetailResponses = GetZoom5RecordQuery

export const Zoom5RecordDataDocument = gql`
    query zoom5RecordData {
        zoom5landingPage @client
        zoom5detail @client
        zoom5relations @client
    }
`

export interface GetZoom5RecordQuery {
    zoom5landingPage?: NonNullable<LandingpageBySlugQuery['landingpages']['data'][0]>
    zoom5detail:
        | ZoomLevel5PublicationQuery['zoomLevel5Publication']
        | ZoomLevel5ArchivesQuery['zoomLevel5Archive']
        | ZoomLevel5ObjectQuery['zoomLevel5Object']
        | ZoomLevel5PersonQuery['zoomLevel5Person']
    zoom5relations?: ObjectRelationsQuery['relations']
}

export function useGetZoom5RecordTask() {
    const query = useQuery<GetZoom5RecordQuery>(Zoom5RecordDataDocument)

    if (!query.data) {
        return { ...query, data: query.previousData }
    }
    return query
}
export async function getZoom5RecordTask(
    client: ApolloClient<NormalizedCacheObject>,
    context: GetServerSidePropsContext
) {
    const queryParams = context.query as unknown as RecordQueryParams
    const slug = queryParams.slug
    const record = queryParams.record
    const type = record.split('-')[1] as SupportedQuerys
    const id: string = record.split('-')[0]

    if (type === SupportedQuerys.stories) {
        return
    }
    const configByType = config[type]

    const [detailQuery, landingPage, relations] = await Promise.all([
        configByType.zoomLevelQuery.query(client, { variables: { id: id } }),
        client.query<LandingpageBySlugQuery>({
            variables: {
                locale: context.locale,
                slug: slug,
            },
            query: LandingpageBySlugDocument,
        }),
        configByType.relationsQuery.query(client, { variables: { id: id } }),
    ])

    if (detailQuery.error || !detailQuery.data) {
        console.error('Detail query error')
        return
    }

    if (relations.error) {
        console.error('No detailQuery data')
        return
    }

    client.writeQuery<GetZoom5RecordQuery>({
        query: Zoom5RecordDataDocument,
        data: {
            zoom5landingPage: landingPage.data.landingpages.data[0],
            zoom5detail: configByType.zoomLevelQuery.accessor(detailQuery.data),
            zoom5relations: relations.data.relations,
        },
        overwrite: true,
    })
}
