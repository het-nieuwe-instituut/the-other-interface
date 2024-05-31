'use client'
import { useLayoutEffect } from 'react'
import bootstrap from '.'

export const Bootstrap = () => {
  useLayoutEffect(() => bootstrap(), [])
  return null
}
