import { useQuery } from 'react-query'
import axiosInstance from '../../utils/axiosInstance'

const fetchPreviewConfig = async () => {
  try {
    const { data, headers } = await axiosInstance.get('/ni-toi-preview-link/preview-config')

    if (!headers['content-type'].includes('application/json')) {
      throw new Error('Not found')
    }

    return data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

export function usePreviewConfig() {
  const queryFn = async () => fetchPreviewConfig()

  return useQuery(['preview-config'], queryFn)
}
