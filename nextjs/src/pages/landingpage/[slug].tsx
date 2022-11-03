import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { addApolloState, getApolloClient } from '@/features/graphql/config/apollo'
import { LandingpageContainer } from '@/features/pages/containers/LandingpageContainer/LandingpageContainer'
import { preparePageConfiguration } from '@/features/shared/utils/pageConfiguration'
import { GetServerSidePropsContext } from 'next'
import { LandingpageBySlugDocument, LandingpageBySlugQuery } from 'src/generated/graphql'

export interface LandingPageQueryParams {
    slug: SupportedLandingPages
}

const Page = () => {
    return <LandingpageContainer />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const queryParams = context.query as unknown as LandingPageQueryParams
    const slug = queryParams.slug

    const apolloClient = getApolloClient({ headers: context?.req?.headers })

    const result = await apolloClient.query<LandingpageBySlugQuery>({
        variables: {
            locale: context.locale,
            slug: slug,
        },
        query: LandingpageBySlugDocument,
    })

    if (result.error || !result.data.landingpages?.data?.length) {
        return { notFound: true }
    }

    preparePageConfiguration(apolloClient, {
        host: context.req.headers.host ?? '',
        imagePath: process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL ?? '',
    })

    const apolloState = apolloClient.cache.extract()

    return addApolloState(apolloState, {
        props: {
            slug,
        },
    })
}
