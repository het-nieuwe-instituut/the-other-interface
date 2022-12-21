import { ZoomStates } from '@/features/galaxyInterface/types/galaxy'
import ApiClient from '@/features/graphql/api'
import { LandingpageFilterContainer } from '@/features/pages/containers/LandingpageFilterContainer/LandingpageFilterContainer'
import { LandingpageFilterProvider } from '@/features/pages/containers/LandingpageFilterContainer/LandingpageFilterContext'
import { zoom3Query } from '@/features/pages/containers/LandingpageFilterContainer/zoom3Query.mapper'
import { prepareReduxState } from '@/features/shared/configs/store'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { LandingPageQueryParams } from '../[slug]'

export interface LandingPageFilterQueryParams extends LandingPageQueryParams {
    filter: string
    page: string
}

const Page = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <LandingpageFilterProvider zoomLevel3={props.zoomLevel3 ?? null}>
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

    const [landingpage, zoomLevel3] = await Promise.all([
        ApiClient?.landingpageBySlug({ slug, locale: context?.locale }),
        zoom3Query[slug]?.({ filterId, page, pageSize: 16 }),
    ])

    return {
        props: {
            landingpage,
            zoomLevel3,
            reduxState: prepareReduxState({
                galaxyInterface: { activeZoom: ZoomStates.Zoom3Initial, params: { slug, filter: filterId, page: queryParams.page } },
            }),
        },
    }
}
