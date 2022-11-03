import colors from './colors'
import spacing from './spacing'
import { breakpoints } from './breakpoints'
import textStyles from './typography'

const foundations = {
    colors,
    space: spacing,
    breakpoints,
    textStyles,
} as const

export default foundations
