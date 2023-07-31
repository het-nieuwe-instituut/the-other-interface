import { getCookie } from 'cookies-next'

const test = getCookie('test')

const baseUrlWithRealData = process?.env?.parsed?.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL
  ? process.env.parsed.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL
  : ''

const baseUrlWithMockData = ''

export const imageBasePath = test ? baseUrlWithRealData : baseUrlWithMockData
