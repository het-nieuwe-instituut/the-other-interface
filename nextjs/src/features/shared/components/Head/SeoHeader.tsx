import Head from 'next/head'

export interface ISeo {
    title: string
    imageUrl?: string
    description?: string
    fullUrl: string
    preventIndexing?: boolean
}
export const SeoHeader: React.FunctionComponent<ISeo> = props => {
    const {
        title,
        imageUrl,
        description = 'Het Nieuwe Instituut - The other interface',
        fullUrl,
        preventIndexing,
    } = props
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullUrl} />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {imageUrl && (
                <>
                    <meta property="og:image" content={imageUrl} />
                    <meta property="og:image:type" content="image/jpeg" />
                    <meta property="og:image:width" content="3240" />
                    <meta property="og:image:height" content="2160" />
                </>
            )}

            {preventIndexing && (
                <>
                    <meta name="robots" content="noindex"></meta>
                    <meta name="googlebot" content="noindex"></meta>
                </>
            )}
        </Head>
    )
}
