import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import randomstring from 'randomstring'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import Boundaries from '../Boundaries/Boundaries'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { times } from 'lodash'

export const DynamicBoundariesNoSsr = dynamic(() => import('../Boundaries/Boundaries'), {
    ssr: false,
})


export interface InstancesPerClass {
    "instance": string,
    "title": string
    parent: string
}


async function fetchInstancesPerClass() {
    const result = await fetch('https://api.collectiedata.hetnieuweinstituut.nl/queries/the-other-interface/instances-per-class/run')

    const instancesPerClass = await result.json() as InstancesPerClass[]
    const parents = times(instancesPerClass.length / 10, (i) => `test${i}`)


    return instancesPerClass.map(item => ({
        ...item,
        parent: parents[Math.floor(Math.random() * instancesPerClass.length / 10) + 1] ?? parents[0],
    })).slice(0, 1000)
}


export default () => {
    const { isLoading, isError, data } = useQuery(
        ["instances-per-class"],
        () => fetchInstancesPerClass(),
      );

    if(isLoading) {
        return <p>loading....</p>
    }

    if(isError || !data) {
        return <p>something went wrong</p>
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
            </Head>


            <main className={styles.main}>
                <h2>This demo uses real data</h2>
                <DynamicBoundariesNoSsr data={data} />
            </main>
        </div>
    )
}


export const getStaticProps = async () => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['instances-per-class'], () => fetchInstancesPerClass())
  
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
}