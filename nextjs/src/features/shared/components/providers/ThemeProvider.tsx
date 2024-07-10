'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React, { PropsWithChildren } from 'react'
import { theme } from '../../styles/theme/theme'

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <EmotionThemeProvider theme={theme}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </EmotionThemeProvider>
  )
}
