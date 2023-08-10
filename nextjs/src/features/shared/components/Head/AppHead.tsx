import Head from 'next/head'

export const AppHead: React.FunctionComponent = () => {
  return (
    <Head>
      <link
        rel="preload"
        href="/fonts/ImpactNieuw/ImpactNieuw-2012.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Social/ABCSocial-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Social/ABCSocial-Bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Social/ABCSocial-BoldItalic.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href=" /fonts/Social/ABCSocial-RegularItalic.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Cerial/Cerial.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
    </Head>
  )
}
