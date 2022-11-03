import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { PocMenu } from 'src/features/poc/PocMenu'

export const DynamicObjectNoSsr = dynamic(() => import('../../features/poc/Object/ObjectUniverse'), {
    ssr: false,
})

const DynamicObjects: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>

            <main>
                <PocMenu />

                <DynamicObjectNoSsr dimensions={{ height: 1000, width: 1000 }} />
            </main>
        </div>
    )
}

export default DynamicObjects
