import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import React, { PropsWithChildren } from 'react'
import { newTheme } from '../../styles/theme/newTheme'
import { theme } from '../../styles/theme/theme'

export const ThemeProviderContext = React.createContext({
  theme: newTheme,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeString, setThemeString] = React.useState<'newTheme' | 'oldTheme'>('oldTheme')
  const themes = {
    newTheme: newTheme,
    oldTheme: theme,
  }
  const selectedTheme = themes[themeString]
  console.log(themeString, selectedTheme)
  return (
    <ThemeProviderContext.Provider
      value={{
        theme: selectedTheme,
        toggleTheme: () => setThemeString(themeString === 'oldTheme' ? 'newTheme' : 'oldTheme'),
      }}
    >
      <EmotionThemeProvider theme={selectedTheme}>
        <ChakraProvider theme={selectedTheme}>{children}</ChakraProvider>
      </EmotionThemeProvider>
    </ThemeProviderContext.Provider>
  )
}
