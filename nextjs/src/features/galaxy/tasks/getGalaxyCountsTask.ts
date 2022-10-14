import { getApolloClient } from "@/features/graphql/config/apollo"
import { GetServerSidePropsContext } from "next"
import { ZoomLevel1Document, ZoomLevel1Query } from "src/generated/graphql"


const getGalaxyCountsTask = async (context: GetServerSidePropsContext) => {
    const apolloClient = getApolloClient({ headers: context?.req?.headers })
    
    const result = await apolloClient.query<ZoomLevel1Query>({
        variables: {
            locale: context.locale,
        },
        query: ZoomLevel1Document,
    })

    return result
}

export default getGalaxyCountsTask
