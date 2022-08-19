import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Button, ChakraProvider } from '@chakra-ui/react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient());
    
    return (
      // Provide the client to your App
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
            <ChakraProvider>
              <Button as={'a'} href={'/galaxy'} >galaxy</Button>
              <Button as={'a'} href={'/starSystem'} >Star system</Button>
              <Button as={'a'} href={'/dynamicObjects'} >objects</Button>
              <Button as={'a'} href={'/galaxyUpdates'}>Galaxy updates</Button>
              <Button as={'a'} href={'/boundaries'} >Boundaries</Button>
              <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen={false} />
            </ChakraProvider>
        </Hydrate>
      </QueryClientProvider>
    );
}

export default MyApp
