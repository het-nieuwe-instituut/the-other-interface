import { getCookie } from 'cookies-next'

const isMockedServer = getCookie('isMockedServer')

const baseUrlWithRealData = process?.env?.parsed?.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL || ''

const baseUrlWithMockData = ''

export const imageBasePath = isMockedServer ? baseUrlWithMockData : baseUrlWithRealData
