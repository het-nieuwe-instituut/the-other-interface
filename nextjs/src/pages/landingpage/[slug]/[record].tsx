import { ZoomStates } from '@/features/galaxyInterface/types/galaxy'
import ApiClient from '@/features/graphql/api'
import { RecordContainer } from '@/features/pages/containers/RecordContainer/RecordContainer'
import { getZoom5RecordTask } from '@/features/pages/tasks/getZoom5RecordTask'
import { SupportedQuerys } from '@/features/pages/tasks/zoom5Config'
import { prepareReduxState } from '@/features/shared/configs/store'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export interface RecordQueryParams {
    record: string
    slug: SupportedQuerys,
    filter: string
    collection: string
}

const Page = (pageProps: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <RecordContainer
            key={pageProps.record}
            zoom5={pageProps?.zoom5}
            landingpage={pageProps?.landingpage}
            record={pageProps?.record}
        />
    )
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const queryParams = context.query as unknown as RecordQueryParams
    const record = queryParams.record
    const slug = queryParams.slug

    const [landingpage, zoom5] = await Promise.all([
        ApiClient?.landingpageBySlug({ slug, locale: context?.locale }),
        getZoom5RecordTask(slug, record),
    ])

    return {
        props: {
            record,
            zoom5: zoom5,
            landingpage,
            reduxState: prepareReduxState({
                galaxyInterface: {
                    activeZoom: ZoomStates.Zoom5Initial,
                    params: { slug, record: record },
                },
            }),
        },
    }
}