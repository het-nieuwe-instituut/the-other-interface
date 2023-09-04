'use client'
import { Box } from '@chakra-ui/react'
import { Records } from './fragments'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyRecordsFilter } from '../../components/GalaxyWrapper/GalaxyRecordsFilter/GalaxyRecordsFilter'
import { useRouter } from 'next/router'
import { CloudCategory } from '@/features/shared/types/categories'

const CategoryGalaxy: React.FC = () => {
  const {
    query: { category = '' },
  } = useRouter()

  return (
    <Box position="relative" width="100vw" height="100vh" overflow={'hidden'}>
      <Records />

      <GalaxyFooter
        renderFooterCenter={<GalaxyRecordsFilter category={category as CloudCategory} />}
      />
    </Box>
  )
}

export default CategoryGalaxy
