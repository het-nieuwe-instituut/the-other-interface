'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { useEffect, useState } from 'react'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'

const ReactQueryProvider = ({ children }: React.PropsWithChildren) => {
  const [client, setClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
          structuralSharing: false,
          retryDelay: 1,
          retry: 0,
        },
      },
    })
  )

  useEffect(() => {
    console.log('i am here')
    return () => {
      console.log('remove queries')
      // client.clear()
      // client.removeQueries()
      client.clear()
      console.log(client.getQueryCache())
    }
  }, [client])

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
