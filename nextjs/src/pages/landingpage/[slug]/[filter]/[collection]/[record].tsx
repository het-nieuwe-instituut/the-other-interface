import ApiClient from '@/features/graphql/api'
import { RecordContainer } from '@/features/pages/containers/RecordContainer/RecordContainer'
import { getZoom5RecordTask } from '@/features/pages/tasks/getZoom5RecordTask'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { LandingPageFilterCollectionQueryParams } from '../[collection]'

export interface RecordQueryParams extends LandingPageFilterCollectionQueryParams {
    record: string
}

const Page = (pageProps: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <RecordContainer key={pageProps.record} zoom5={pageProps?.zoom5} landingpage={pageProps?.landingpage} record={pageProps?.record} />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const queryParams = context.query as unknown as RecordQueryParams
    const record = queryParams.record
    const slug = queryParams.slug

    const [ landingpage,  zoom5 ] = await Promise.all([
        ApiClient?.landingpageBySlug({slug, locale: context?.locale}),
        getZoom5RecordTask(record)
    ])

    // const { zoom5detail, zoom5relations} = await getZoom5RecordTask(record)
    // const landingpage = a

    // preparePageConfiguration(apolloClient, {
    //     host: context.req.headers.host ?? '',
    //     imagePath: process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL ?? '',
    // })

    // const apolloState = apolloClient.cache.extract()

    return  {
        props: {
            record,
            zoom5,
            landingpage
        },
    }
}
