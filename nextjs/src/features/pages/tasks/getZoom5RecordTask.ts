import { config, SupportedQuerys } from '@/features/galaxy/RecordClouds/useZoom5DetailQuery'
import { ApolloClient, gql, NormalizedCacheObject, useQuery } from '@apollo/client'
import { GetServerSidePropsContext } from 'next'

import {
    LandingpageBySlugDocument,
    LandingpageBySlugQuery,
    ObjectRelationsDocument,
    ObjectRelationsQuery,
    ObjectRelationsQueryVariables,
    ZoomLevel5ObjectQuery,
} from 'src/generated/graphql'
import { RecordQueryParams } from 'src/pages/landingpage/[slug]/[filter]/[collection]/[record]'

const Zoom5RecordDataDocument = gql`
    query zoom5RecordData {
        landingPage @client
        detail @client
        relations @client
    }
`

interface GetZoom5RecordQuery {
    landingPage: NonNullable<LandingpageBySlugQuery['landingpages']['data'][0]>
    detail: ZoomLevel5ObjectQuery['zoomLevel5Object']
    relations: ObjectRelationsQuery['relations']
}

export function useGetZoom5RecordTask() {
    const query = useQuery<GetZoom5RecordQuery>(Zoom5RecordDataDocument)

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
    const detailConfig = config[type]
    const [detailQuery, landingPage, relations] = await Promise.all([
        detailConfig.query(client, { variables: { id: id } }),
        client.query<LandingpageBySlugQuery>({
            variables: {
                locale: context.locale,
                slug: slug,
            },
            query: LandingpageBySlugDocument,
        }),
        client.query<ObjectRelationsQuery, ObjectRelationsQueryVariables>({
            variables: {
                id,
            },
            query: ObjectRelationsDocument,
        }),
    ])

    if (detailQuery.error || !detailQuery.data) {
        console.error('Detail query error')
        return
    }

    if (relations.error) {
        console.error('No detailQuery data')
        return
    }

    console.log(relations.data.relations)

    client.writeQuery({
        query: Zoom5RecordDataDocument,
        data: {
            landingPage: landingPage.data.landingpages.data[0],
            detail: detailConfig.accessor(detailQuery.data),
            relations: relations.data.relations,
        },
    })
}
