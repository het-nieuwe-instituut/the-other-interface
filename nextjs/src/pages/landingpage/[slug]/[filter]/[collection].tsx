import { zoom4QueryTask } from '@/features/galaxy/Collections/zoom4QueryTask'
import ApiClient from '@/features/graphql/api'
import { LandingpageCollectionProvider } from '@/features/pages/containers/LandingpageCollectionContainer/LadingpageCollectionContext'
import { LandingCollectionContainer } from '@/features/pages/containers/LandingpageCollectionContainer/LandingCollectionContainer'
// import { zoom3Query } from '@/features/pages/containers/LandingpageFilterContainer/zoom3Query.mapper'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { LandingPageFilterQueryParams } from '../[filter]'

export interface LandingPageFilterCollectionQueryParams extends LandingPageFilterQueryParams {
    collection: string,
    page: string
}

const Page = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <LandingpageCollectionProvider zoomLevel4={props.zoomLevel4 ?? null}>
            <LandingCollectionContainer landingpage={props.landingpage} />
        </LandingpageCollectionProvider>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const queryParams = context.query as unknown as LandingPageFilterCollectionQueryParams
    const slug = queryParams.slug
    const filterId = queryParams.filter
    const collection = queryParams.collection

    const landingpage = await ApiClient?.landingpageBySlug({slug, locale: context?.locale})
    
    const zoomLevel4 =  await zoom4QueryTask(slug, {
        filter: filterId,
        page: queryParams.page ?? '1',
        collection
    })

    return {
        props: {
            landingpage,
            zoomLevel4,
        },
    }
}

export default Page
