import { StoryContainer } from '@/features/pages/containers/StoryContainer/StoryContainer'
import {  getZoom5StoryTask } from '@/features/pages/tasks/getZoom5StoryTask'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export interface StoryQueryParams {
    slug: string,
}

const Page = (pageProps: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <StoryContainer record={pageProps?.story} story={pageProps?.story} />
    )
}

export default Page

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const queryParams = context.query as unknown as StoryQueryParams
    const locale = context.locale ?? 'en'
    const slug = queryParams.slug

    const { story } = await getZoom5StoryTask(slug, locale)
	if (!story) {
		return { props: {} }
	}

    return { props: { story } }
}
