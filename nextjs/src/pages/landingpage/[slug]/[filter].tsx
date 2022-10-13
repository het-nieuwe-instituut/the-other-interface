import { LandingpageFilterContainer } from '@/features/pages/containers/LandingpageFilterContainer/LandingpageFilterContainer'
import { GetServerSidePropsContext } from 'next'
import { EntityNames } from 'src/generated/graphql'
import { getServerSideProps as mainGetServerSideProps } from '../[slug]'

export interface LandingPageQueryParams {
    slug: EntityNames
}

const Page = () => {
    return <LandingpageFilterContainer />
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    return mainGetServerSideProps(context)
}
