import { addApolloState, getApolloClient } from '@/features/graphql/config/apollo'
import { RecordContainer } from '@/features/pages/containers/RecordContainer/RecordContainer'
import { getZoom5RecordTask } from '@/features/pages/tasks/getZoom5RecordTask'
import { preparePageConfiguration } from '@/features/shared/utils/pageConfiguration'
import { GetServerSidePropsContext } from 'next'
import { LandingPageFilterCollectionQueryParams } from '../[collection]'

export interface RecordQueryParams extends LandingPageFilterCollectionQueryParams {
    record: string
}

const Page = () => {
    return <RecordContainer />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const queryParams = context.query as unknown as RecordQueryParams
    const record = queryParams.record
    const apolloClient = getApolloClient({ headers: context?.req?.headers })

    await getZoom5RecordTask(apolloClient, context)

    preparePageConfiguration(apolloClient, {
        host: context.req.headers.host ?? '',
        imagePath: process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL ?? '',
    })

    const apolloState = apolloClient.cache.extract()

    return addApolloState(apolloState, {
        props: {
            record,
        },
    })
}
