import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { useLandingpageQuery } from 'src/generated/graphql'

export const LandingpageContainer = () => {
    const { data, loading, error } = useLandingpageQuery()

    if (loading) {
        return <p>loading</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <div>
            <DynamicComponentRenderer components={data?.landingpage?.data?.attributes?.components} />
        </div>
    )
}
