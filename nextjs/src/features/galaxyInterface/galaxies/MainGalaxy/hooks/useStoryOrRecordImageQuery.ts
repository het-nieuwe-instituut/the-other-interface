import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'

export const getStoryOrRecordImageQueryKey = (id: string) => ['story-or-record-image', id]

export const useStoryOrRecordImageQuery = ({ id }: { id: string }) => {
  const queryClient = useQueryClient()
  return useQuery(getStoryOrRecordImageQueryKey(id), async () => {
    return (queryClient.getQueryData(getStoryOrRecordImageQueryKey(id)) ?? null) as string | null
  })
}

export const useSetStoryOrRecordImageToCache = () => {
  const queryClient = useQueryClient()
  return useCallback(
    ({ id, image }: { id: string; image: string }) => {
      queryClient.setQueryData(getStoryOrRecordImageQueryKey(id), image)
    },
    [queryClient]
  )
}
