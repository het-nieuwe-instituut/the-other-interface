import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useTypeSafeTranslation } from 'src/common/hooks/translations'
import { getTranslation, setAppLanguage } from 'src/common/utils/translations'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    const { t, lang } = useTypeSafeTranslation('common')
    const example = t('commonTest', { count: 12 })

    useEffect(() => {
        async function t() {
            const t = await getTranslation('nl', 'common')
            console.log(t('commonTest'))
        }
        t()
    })

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content={t('commonTest', { count: 12 })} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <button onClick={async () => await setAppLanguage('en')}>EN</button>
                <button onClick={async () => await setAppLanguage('nl')}>NL</button>
                <h1 className={styles.title}>{example}</h1>
                <h1 className={styles.title}>{}</h1>
            </main>
        </div>
    )
}

export default Home
