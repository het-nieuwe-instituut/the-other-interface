import ApiClient from '@/features/graphql/api'
import { LandingpageFilterContainer } from '@/features/pages/containers/LandingpageFilterContainer/LandingpageFilterContainer'
import { LandingpageFilterProvider } from '@/features/pages/containers/LandingpageFilterContainer/LandingpageFilterContext'
import { zoom3Query } from '@/features/pages/containers/LandingpageFilterContainer/zoom3Query.mapper'
import { GetServerSidePropsContext } from 'next'
import {  LandingPageQueryParams } from '../[slug]'

export interface LandingPageFilterQueryParams extends LandingPageQueryParams {
    filter: string
    page: string
}

const Page = (props:  Awaited<ReturnType<typeof getServerSideProps>>['props']) => {
    return (
        <LandingpageFilterProvider zoomLevel3={props.zoomLevel3}>
            <LandingpageFilterContainer landingpage={props?.landingpage} />
        </LandingpageFilterProvider>
    )
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const queryParams = context.query as unknown as LandingPageFilterQueryParams
    const slug = queryParams.slug
    const filterId = queryParams.filter
    const page = parseInt(queryParams.page ?? 1)

    const landingpage = await ApiClient?.landingpageBySlug({slug, locale: context?.locale})
    
    const zoomLevel3 =  await zoom3Query[slug]?.({ filterId, page, pageSize: 16  }) ?? null


    return {
        props: {
            landingpage,
            zoomLevel3,
        },
    }
}
