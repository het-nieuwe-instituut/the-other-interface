import ApiClient from '@/features/graphql/api'
import { HomepageContainer } from '@/features/pages/containers/HomepageContainer/HomepageContainer'
import { GetServerSidePropsContext } from 'next'

const Home = (props:  Awaited<ReturnType<typeof getServerSideProps>>['props'] ) => {
    return <HomepageContainer {...props} />
}

export default Home

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const locale = context.locale;

    const [homepage, zoomLevel1Data] = await Promise.all([
        ApiClient?.homepage({ locale }),
        ApiClient?.zoomLevel1()
    ])

    return  {
        props: {
            host: context.req.headers.host || null,
            homepage,
            zoomLevel1Data
        },
    }
}