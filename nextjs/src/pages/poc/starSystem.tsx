import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export const DynamicStarSystemNoSsr = dynamic(() => import('../../features/poc/StarSystem/StarSystem'), {
    ssr: false,
})

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
            </Head>

            <DynamicStarSystemNoSsr dimensions={{ height: 1000, width: 1000 }} />
        </div>
    )
}

export default Home
