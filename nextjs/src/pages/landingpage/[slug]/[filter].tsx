import { SupportedLandingPages } from '@/features/filters/FilterClouds/FilterClouds'
import { LandingpageFilterContainer } from '@/features/pages/containers/LandingpageFilterContainer/LandingpageFilterContainer'
import { GetServerSidePropsContext } from 'next'
import { getServerSideProps as mainGetServerSideProps } from '../[slug]'

export interface LandingPageQueryParams {
    slug: SupportedLandingPages
}

const Page = () => {
    return <LandingpageFilterContainer />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    return mainGetServerSideProps(context)
}
