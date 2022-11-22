import { TypeToEntityName } from '@/features/galaxy/FilterClouds/FilterCloudsContainer'
import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import ApiClient from '@/features/graphql/api'
// import { addApolloState, getApolloClient } from '@/features/graphql/config/apollo'
import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import  { LandingpageProvider } from '@/features/pages/containers/LandingpageContainer/LandingpageContext'
// import { preparePageConfiguration } from '@/features/shared/utils/pageConfiguration'
import { GetServerSidePropsContext } from 'next'
import {  EntityNames, StoriesWithoutRelationsQuery, ZoomLevel2Query } from 'src/generated/graphql'
// import { LandingpageBySlugDocument, LandingpageBySlugQuery } from 'src/generated/graphql'

export interface LandingPageQueryParams {
    slug: SupportedLandingPages
}

const Page = (props:  Awaited<ReturnType<typeof getServerSideProps>>['props']) => {
    return (
        <LandingpageProvider zoomLevel2={props.zoomLevel2} stories={props.stories?.storiesWithoutRelations?.data}>
            <LandingpageContainer landingpage={props.landingpage} slug={props.slug}/>
        </LandingpageProvider>
    )
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const queryParams = context.query as unknown as LandingPageQueryParams
    const slug = queryParams.slug
    const locale = context.locale;
    const entityName = TypeToEntityName[slug]

    // const apolloClient = getApolloClient({ headers: context?.req?.headers })

    const landingpage = await ApiClient?.landingpageBySlug({slug, locale: context?.locale})
    
    let zoomLevel2 : ZoomLevel2Query | null = null
    let stories: StoriesWithoutRelationsQuery | null = null
    
    if (entityName) {
        zoomLevel2 = await ApiClient?.zoomLevel2({ entityName }) ?? null
    }

    if (slug === EntityNames.Stories.toLowerCase()) {
        stories = await ApiClient?.storiesWithoutRelations({pagination: { pageSize: 200 }, locale}) ?? null
    }

    // if (result.error || !result.data.landingpages?.data?.length) {
    //     return { notFound: true }
    // }

    // preparePageConfiguration(apolloClient, {
    //     host: context.req.headers.host ?? '',
    //     imagePath: process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL ?? '',
    // })

    // const apolloState = apolloClient.cache.extract()

    return {
        props: {
            slug,
            landingpage,
            zoomLevel2,
            stories
        },
    }
}
