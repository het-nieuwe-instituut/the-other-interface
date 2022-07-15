import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const testData = [
    {
        name: 'publications',
        children: ['test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test'],
    },
    {
        name: 'projects',
        children: ['test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test'],
    },
    {
        name: 'archives',
        children: ['test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test'],
    },
    {
        name: 'objects',
        children: ['test', 'test', 'test', 'test', 'test', 'test', 'test'],
    },
    {
        name: 'people',
        children: ['test', 'test', 'test', 'test'],
    },
]

export const DynamicGalaxyNoSsr = dynamic(() => import('../Galaxy/homepage/components/Galaxy/Galaxy'), {
    ssr: false,
})

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
            </Head>

            <main className={styles.main}>
                <DynamicGalaxyNoSsr data={testData} dimensions={{ height: 1000, width: 1000 }} />
            </main>
        </div>
    )
}

export default Home
