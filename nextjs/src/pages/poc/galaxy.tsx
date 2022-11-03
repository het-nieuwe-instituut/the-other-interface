/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { PocMenu } from 'src/features/poc/PocMenu'

export const DynamicGalaxyNoSsr = dynamic(() => import('../../features/poc/GalaxyWithQuery/Galaxy'), {
    ssr: false,
})
export interface ObjectPerType {
    class: string
    numberOfInstances: string
}

async function fetchOnbjectsPerType() {
    const result = await fetch(
        'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/objects-per-type/run'
    )

    return (await result.json()) as ObjectPerType[]
}

function useQuery<T, Q extends () => ReturnType<Q>>(keys: T, query: Q) {
    const [isLoading, setIsloading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState<Awaited<ReturnType<Q>> | undefined>(undefined)

    useEffect(() => {
        async function handle() {
            try {
                setIsError(false)
                setIsloading(true)
                const result = await query()
                setIsloading(false)
                setData(result as Awaited<ReturnType<Q>> | undefined)
            } catch {
                setIsError(true)
            }
        }

        handle()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        isLoading,
        isError,
        data,
    }
}

function Page() {
    const { isLoading, isError, data } = useQuery(['galaxy'], () => fetchOnbjectsPerType())
    console.log()
    if (isLoading) {
        return <p>loading....</p>
    }

    if (isError || !data) {
        return <p>something went wrong</p>
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>

            <PocMenu />

            <main>
                {data[0].numberOfInstances}
                <h2>This demo uses real data</h2>
                <DynamicGalaxyNoSsr data={data as any} dimensions={{ height: 1000, width: 1000 }} />
            </main>
        </div>
    )
}

export default Page
