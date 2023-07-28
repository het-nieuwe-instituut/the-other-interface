import { Box } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

export const GalaxyWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Box display="block" position="relative" pointerEvents="none">
      {children}
    </Box>
  )
}
