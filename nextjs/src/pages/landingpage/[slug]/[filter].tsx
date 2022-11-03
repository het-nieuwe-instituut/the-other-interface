import { LandingpageFilterContainer } from '@/features/pages/containers/LandingpageFilterContainer/LandingpageFilterContainer'
import { GetServerSidePropsContext } from 'next'
import { getServerSideProps as mainGetServerSideProps, LandingPageQueryParams } from '../[slug]'

export interface LandingPageFilterQueryParams extends LandingPageQueryParams {
    filter: string
}

const Page = () => {
    return <LandingpageFilterContainer />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    return mainGetServerSideProps(context)
}
