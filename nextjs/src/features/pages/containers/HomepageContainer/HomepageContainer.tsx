import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { useRouter } from 'next/router'
import { useHomepageQuery } from 'src/generated/graphql'

export const HomepageContainer = () => {
    const { locale } = useRouter()
    const { data, loading, error } = useHomepageQuery({ variables: { locale } })

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
