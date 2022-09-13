import { addApolloState, initializeApollo } from '@/features/graphql/config/apollo'
import { HomepageContainer } from '@/features/pages/containers/HomepageContainer/HomepageContainer'
import { GetServerSidePropsContext } from 'next'
import { HomepageDocument } from 'src/generated/graphql'

const Page = () => {
    return <HomepageContainer />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const client = initializeApollo({ headers: context?.req?.headers })

    try {
        const result = await client.query({
            query: HomepageDocument,
        })

        if (result.errors) {
            return {
                redirect: {
                    destination: `/${result.networkStatus}?message=${result.errors[0].message}`,
                    permanent: false,
                },
            }
        }

        return addApolloState(client, {
            props: {},
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        return {
            redirect: {
                destination: `/error?message=${err.message}`,
                permanent: false,
            },
        }
    }
}
