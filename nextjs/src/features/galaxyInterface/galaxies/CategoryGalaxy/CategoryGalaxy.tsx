import { Box } from '@chakra-ui/react'
import { Records } from './fragments'

const CategoryGalaxy: React.FC = () => {
  return (
    <Box
      position="relative"
      width="100vw"
      height="100vh"
      overflow={'hidden'}
      backgroundColor={'navyAlpha.100'}
    >
      <Records />
    </Box>
  )
}

export default CategoryGalaxy
