import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import { PocMenu } from 'src/features/poc/PocMenu'

export const DynamicStarSystemNoSsr = dynamic(
  () => import('../../features/poc/StarSystem/StarSystem'),
  {
    ssr: false,
  }
)

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <PocMenu />

      <DynamicStarSystemNoSsr dimensions={{ height: 1000, width: 1000 }} />
    </div>
  )
}

export default Home
