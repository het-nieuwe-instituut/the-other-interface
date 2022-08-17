import type { InferGetStaticPropsType } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import styles from '../styles/Home.module.css'

export const DynamicGalaxyNoSsr = dynamic(() => import('../GalaxyWithQuery/Galaxy'), {
    ssr: false,
})

export interface ObjectPerType {
    class: string
    numberOfInstances: string
}

async function fetchOnbjectsPerType() {
    const result = await fetch('https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/objects-per-type/run')

    return await result.json() as ObjectPerType[]
}

function Page(props: InferGetStaticPropsType<typeof getStaticProps>) {
    const { isLoading, isError, data } = useQuery(
        ["galaxy"],
        () => fetchOnbjectsPerType(),
      );

    if(isLoading) {
        return <p>loading....</p>
    }

    if(isError || !data) {
        return <p>something went wrong</p>
    }

    console.log(data)
      
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
            </Head>

            <main className={styles.main}>
                <DynamicGalaxyNoSsr data={data} dimensions={{ height: 1000, width: 1000 }} />
            </main>
        </div>
    )
}

export const getStaticProps = async () => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['galaxy'], () => fetchOnbjectsPerType())
  
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
}

export default Page
