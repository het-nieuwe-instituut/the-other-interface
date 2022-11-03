import { LandingCollectionContainer } from '@/features/pages/containers/LandingpageCollectionContainer/LandingCollectionContainer'
import { LandingPageFilterQueryParams } from '../[filter]'

export interface LandingPageFilterCollectionQueryParams extends LandingPageFilterQueryParams {
    collection: string
}

const Page = () => {
    return <LandingCollectionContainer />
}

export default Page
