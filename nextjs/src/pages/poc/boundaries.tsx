import dynamic from 'next/dynamic'
import Head from 'next/head'
import times from 'lodash/times'
import { useEffect, useState } from 'react'

export const DynamicBoundariesNoSsr = dynamic(() => import('../../features/poc/Boundaries/Boundaries'), {
    ssr: false,
})

export interface InstancesPerClass {
    instance: string
    title: string
    parent: string
}

async function fetchInstancesPerClass() {
    const result = await fetch(
        'https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/instances-per-class/run'
    )

    const instancesPerClass = (await result.json()) as InstancesPerClass[]
    const parents = times(instancesPerClass.length / 10, i => `test${i}`)

    return instancesPerClass
        .map(item => ({
            ...item,
            parent: parents[Math.floor((Math.random() * instancesPerClass.length) / 10) + 1] ?? parents[0],
        }))
        .slice(0, 1000)
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

const Boundaries = () => {
    const { isLoading, isError, data } = useQuery(['instances-per-class'], () => fetchInstancesPerClass())

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

            <main>
                <h2>This demo uses real data</h2>
                <DynamicBoundariesNoSsr data={data} />
            </main>
        </div>
    )
}

export default Boundaries
