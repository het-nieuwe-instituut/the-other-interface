import { Loader } from '@/features/shared/components/Loading/Loading'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { EntityNames, useZoomLevel2Query } from 'src/generated/graphql'

export enum SupportedLandingPages {
    Publications = 'publications',
    People = 'people',
    Archives = 'archives',
    Objects = 'objects',
    Stories = 'stories',
}

type Props = {
    dimensions: {
        height: number
        width: number
    }
    type: SupportedLandingPages
}

const DynamicPaginatedFilterCloudsNoSsr = dynamic(() => import('./FilterClouds'), {
    ssr: false,
})

export const DynamicGalaxyNoSsr = dynamic(() => import('../../galaxy/Galaxy/Galaxy'), {
    ssr: false,
})

const TypeToEntityName: Record<string, EntityNames> = {
    publications: EntityNames.Publications,
    people: EntityNames.People,
    objects: EntityNames.Objects,
    archives: EntityNames.Archives,
}

export interface LandingPageQueryParams {
    slug: SupportedLandingPages
}

const FilterCloudsContainer: React.FunctionComponent<Props> = props => {
    const router = useRouter()
    const queryParams = router.query as unknown as LandingPageQueryParams
    const type = queryParams.slug
    const {
        data: filters,
        loading: isFiltersLoading,
        error: filtersError,
    } = useZoomLevel2Query({
        variables: {
            entityName: TypeToEntityName[type],
        },
        skip: !TypeToEntityName[type],
    })

    if (isFiltersLoading) {
        return <Loader />
    }

    if (filtersError) {
        return <p>{filtersError.message}</p>
    }

    return (
        <>
            {type === SupportedLandingPages.Stories ? (
                <DynamicGalaxyNoSsr dimensions={{ height: 800, width: props.dimensions.width }} />
            ) : (
                <DynamicPaginatedFilterCloudsNoSsr
                    zoomLevel2={filters?.zoomLevel2 ?? []}
                    dimensions={props.dimensions}
                    type={props.type}
                />
            )}
        </>
    )
}

export default FilterCloudsContainer
