import { breakpoints } from './breakpoints'
import colors from './colors'
import spacing from './spacing'
import textStyles from './typography'
import newTextStyles from './newTypography'

const foundations = {
  colors,
  space: spacing,
  breakpoints,
  textStyles,
} as const

export const newFoundations = {
  colors,
  space: spacing,
  breakpoints,
  textStyles: newTextStyles,
} as const

export default foundations
