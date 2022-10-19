import { SupportedLandingPages } from '@/features/galaxy/PaginatedFilterClouds/PaginatedFilterCloudsContainer'
import { LandingCollectionContainer } from '@/features/galaxy/Collections/LandingCollectionContainer'

export interface LandingPageQueryParams {
    slug: SupportedLandingPages
}

const Page = () => {
    return <LandingCollectionContainer />
}

export default Page
