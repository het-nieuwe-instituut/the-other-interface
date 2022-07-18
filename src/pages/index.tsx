import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import randomstring from 'randomstring'

function createChild() {
    return {
        name: randomstring.generate(),
        children: [],
    }
}

const testData = [
    {
        name: 'publications',
        children: [
            createChild(),
            createChild(),
            createChild(),
            createChild(),
            createChild(),
            createChild(),
            createChild(),
        ],
    },
    {
        name: 'projects',
        children: [
            createChild(),
            createChild(),
            createChild(),
            createChild(),
            createChild(),
            createChild(),
            createChild(),
            createChild(),
            createChild(),
            createChild(),
        ],
    },
    {
        name: 'archives',
        children: [
            createChild(),
            createChild(),
            createChild(),
            createChild(),
            createChild(),
            createChild(),
            createChild(),
            createChild(),
            createChild(),
            createChild(),
        ],
    },
    {
        name: 'objects',
        children: [createChild(), createChild(), createChild(), createChild(), createChild(), createChild()],
    },
    {
        name: 'people',
        children: [createChild(), createChild(), createChild()],
    },
]

export const DynamicGalaxyNoSsr = dynamic(() => import('../Galaxy/homepage/components/Galaxy/Galaxy'), {
    ssr: false,
})
export const DynamicObjectNoSsr = dynamic(() => import('../Object/ObjectUniverse'), {
    ssr: false,
})

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
            </Head>

            <main className={styles.main}>
                {/* <DynamicGalaxyNoSsr data={testData} dimensions={{ height: 1000, width: 1000 }} /> */}
                <DynamicObjectNoSsr data={testData} dimensions={{ height: 1000, width: 1000 }} />
            </main>
        </div>
    )
}

export default Home
