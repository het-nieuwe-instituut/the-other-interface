'use client'
import { initApiClient } from './api'
import { getCookie } from 'cookies-next'

const initApiClientService = () => {
  const isMockedServer = getCookie('isMockedServer') as boolean

  return initApiClient({ isMockedServer, hostHeader: process.env.NEXT_PUBLIC_HOST })
}

export default initApiClientService
