import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient());
    
    return (
      // Provide the client to your App
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </Hydrate>
      </QueryClientProvider>
    );
}

export default MyApp
