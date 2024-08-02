'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface Props {
  children: React.ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // The default behavior of react-query is to refetch data when the window regains focus, but it does not really make sense for our use case, data will not be updated that often
      refetchOnWindowFocus: false,
      // to reduce the number of requests, we disable the retry on error
      retry: 0,
    },
  },
})

const ReactQueryProvider = ({ children }: Props) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryProvider
