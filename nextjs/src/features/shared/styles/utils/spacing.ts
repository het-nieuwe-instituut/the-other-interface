import spacing from '../theme/foundations/spacing'

type Spacings = keyof typeof spacing

// function will map the correct spacing according to the style system
export function getResponsiveSpacing(space: Spacings) {
  if (space === 'md') {
    return {
      base: 'md',
      md: '2md',
    }
  }

  if (space === 'xl') {
    return {
      base: 'xl',
      md: '2xl',
    }
  }

  return space
}
// shorthand for getResponsiveSpacing
export const grs = getResponsiveSpacing
