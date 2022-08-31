/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'

export const DynamicGalaxyUpdatestNoSsr = dynamic(() => import('../../features/poc/Galaxy/GalaxyUpdates'), {
    ssr: false,
})

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>

            <DynamicGalaxyUpdatestNoSsr />
        </div>
    )
}

export default Home
