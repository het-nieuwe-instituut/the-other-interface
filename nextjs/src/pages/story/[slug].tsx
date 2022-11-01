import { getApolloClient } from '@/features/graphql/config/apollo'
import { StoryContainer } from '@/features/pages/containers/StoryContainer/StoryContainer'
import { GetZoom5StoryQuery, getZoom5StoryTask } from '@/features/pages/tasks/getZoom5StoryTask'
import { preparePageConfiguration } from '@/features/shared/utils/pageConfiguration'
import { GetServerSidePropsContext } from 'next'

export interface StoryQueryParams {
    slug: string
}

interface Props {
    data: GetZoom5StoryQuery
}

const Page = ({ data }: Props) => {
    return <StoryContainer data={data} />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const apolloClient = getApolloClient({ headers: context?.req?.headers })

    const data = await getZoom5StoryTask(apolloClient, context)

    preparePageConfiguration(apolloClient, {
        host: context.req.headers.host ?? '',
        imagePath: process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL ?? '',
    })

    return { props: { data } }
}
