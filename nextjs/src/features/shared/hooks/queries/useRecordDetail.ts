'use client'
import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { getZoom3RecordTask } from '@/features/pages/tasks/getZoom3Record'
import { Category } from '../../utils/categories'

export function useRecordDetail(type: Category, id: string) {
  const api = initApiClientService()

  const queryFn = () => getZoom3RecordTask(type, { id }, api)

  return useQuery({
    queryKey: ['record-detail', id],
    queryFn,
  })
}
