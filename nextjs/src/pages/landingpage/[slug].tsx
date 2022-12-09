import { TypeToEntityName } from '@/features/galaxy/FilterClouds/FilterCloudsContainer'
import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { ZoomStates } from '@/features/galaxyInterface/types/galaxy'
import ApiClient from '@/features/graphql/api'
import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import { LandingpageProvider } from '@/features/pages/containers/LandingpageContainer/LandingpageContext'
import { prepareReduxState } from '@/features/shared/configs/store'
import { GetServerSidePropsContext } from 'next'
import { EntityNames } from 'src/generated/graphql'

export interface LandingPageQueryParams {
    slug: SupportedLandingPages
}

const Page = (props: Awaited<ReturnType<typeof getServerSideProps>>['props']) => {
    console.log(props.stories)
    return (
        <LandingpageProvider
            zoomLevel2={props.zoomLevel2 ?? null}
            stories={props.stories?.storiesWithoutRelations?.data}
        >
            <LandingpageContainer landingpage={props.landingpage} slug={props.slug} />
        </LandingpageProvider>
    )
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const queryParams = context.query as unknown as LandingPageQueryParams
    const slug = queryParams.slug
    const locale = context.locale
    const entityName = TypeToEntityName[slug]
    const [landingpage, zoomLevel2, stories] = await Promise.all([
        ApiClient?.landingpageBySlug({ slug, locale: context?.locale }),
        entityName ? ApiClient?.zoomLevel2({ entityName }) : null,
        slug === EntityNames.Stories.toLowerCase()
            ? ApiClient?.storiesWithoutRelations({ pagination: { pageSize: 200 }, locale })
            : null,
    ])

    return {
        props: {
            slug,
            landingpage,
            zoomLevel2,
            stories,
            reduxState: prepareReduxState({
                galaxyInterface: {
                    activeZoom:
                        slug === EntityNames.Stories.toLowerCase() ? ZoomStates.Zoom1Stories : ZoomStates.Zoom2Initial,
                    params: { slug },
                },
            }),
        },
    }
}
