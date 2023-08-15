import { breakpoints } from './breakpoints'
import colors from './colors'
import newTextStyles from './newTypography'
import spacing from './spacing'
import textStyles from './typography'

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
