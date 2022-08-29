import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import randomstring from 'randomstring'
import styles from '../styles/Home.module.css'

function createChild(): any {
    return {
        name: randomstring.generate(),
        children: [
            {
                name: randomstring.generate(),
                children: [
                    {
                        name: randomstring.generate(),
                        children: [],
                    },
                ],
            },
            {
                name: randomstring.generate(),
                children: [],
            },
        ],
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

export const DynamicGalaxyUpdatestNoSsr = dynamic(() => import('../Galaxy/GalaxyUpdates'), {
    ssr: false,
})

const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
            </Head>

            <DynamicGalaxyUpdatestNoSsr />
        </div>
    )
}

export default Home
