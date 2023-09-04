import { Box } from '../../configs/chakra'
import { Navigation } from '../Navigation/Navigation'

interface Props {
  children: React.ReactNode
}

export const NavigationOverlayProvider = (props: Props) => {
  return (
    <Box overflow={'hidden'}>
      <Navigation />
      {props.children}
    </Box>
  )
}
