import '@emotion/react'

import { AppTheme } from '../styles/theme/theme'

declare module '@emotion/react' {
  export function useTheme(): AppTheme
}
