import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { useLandingpageBySlugQuery } from 'src/generated/graphql'

interface Props {
    slug: string
}
export const LandingpageContainer: React.FC<Props> = props => {
    const { data, loading, error } = useLandingpageBySlugQuery({
        variables: {
            slug: props.slug,
        },
    })

    if (loading) {
        return <p>loading</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        <div>
            <DynamicComponentRenderer components={data?.landingpages?.data[0].attributes?.components} />
        </div>
    )
}
