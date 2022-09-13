import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { useHomepageQuery } from 'src/generated/graphql'

export const HomepageContainer = () => {
    const { data, loading, error } = useHomepageQuery()

    if (loading) {
        return <p>loading</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <div>
            <DynamicComponentRenderer components={data?.homepage?.data?.attributes?.components} />{' '}
        </div>
    )
}
