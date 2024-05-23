'use client'
import { initApiClient } from './api'
import { getCookie } from 'cookies-next'

const initApiClientService = () => {
  const isMockedServer = Boolean(getCookie('isMockedServer'))

  return initApiClient({
    isMockedServer,
    host: process.env.NEXT_PUBLIC_HOST ?? '',
  })
}

export default initApiClientService
