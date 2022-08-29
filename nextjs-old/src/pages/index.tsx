import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import randomstring from 'randomstring'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import Boundaries from '../Boundaries/Boundaries'

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

export const DynamicGalaxyNoSsr = dynamic(() => import('../Galaxy/Galaxy'), {
    ssr: false,
})
export const DynamicStarSystemNoSsr = dynamic(() => import('../StarSystem/StarSystem'), {
    ssr: false,
})
export const DynamicObjectNoSsr = dynamic(() => import('../Object/ObjectUniverse'), {
    ssr: false,
})
export const DynamicGalaxyUpdatestNoSsr = dynamic(() => import('../Galaxy/GalaxyUpdates'), {
    ssr: false,
})

export const DynamicBoundariesNoSsr = dynamic(() => import('../Boundaries/Boundaries'), {
    ssr: false,
})

const Home: NextPage = () => {
    const [stage, setStage] = useState('galaxyUpdates')

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
            </Head>

        </div>
    )
}

export default Home