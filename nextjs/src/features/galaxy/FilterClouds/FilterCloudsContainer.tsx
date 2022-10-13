import { Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { EntityNames, useZoomLevel2Query } from 'src/generated/graphql'
import { LandingPageQueryParams } from 'src/pages/landingpage/[slug]'

export enum SupportedLandingPages {
    Publications = 'publications',
    People = 'people',
    Archives = 'archives',
    Objects = 'objects',
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

const TypeToEntityName: Record<string, EntityNames> = {
    publications: EntityNames.Publications,
    people: EntityNames.People,
    objects: EntityNames.Objects,
    archives: EntityNames.Archives,
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
    })

    if (isFiltersLoading) {
        return <Text>Loading</Text>
    }

    if (filtersError) {
        return <p>{filtersError.message}</p>
    }

    return (
        <>
            <DynamicPaginatedFilterCloudsNoSsr
                zoomLevel2={filters?.zoomLevel2 ?? []}
                dimensions={props.dimensions}
                type={props.type}
            />
        </>
    )
}

export default FilterCloudsContainer
