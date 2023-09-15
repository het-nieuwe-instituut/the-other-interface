'use client'
import { Box } from '@chakra-ui/react'
import { Records } from './fragments'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyRecordsFilter } from '../../components/GalaxyWrapper/GalaxyRecordsFilter/GalaxyRecordsFilter'
import { useSearchParams } from 'next/navigation'
import { CloudCategory } from '@/features/shared/utils/categories'

export const CategoryGalaxy: React.FC = () => {
  const searchParams = useSearchParams()
  const category = searchParams?.get('category')

  return (
    <Box position="relative" width="100vw" height="100vh" overflow={'hidden'}>
      <Records />

      <GalaxyFooter
        renderFooterCenter={<GalaxyRecordsFilter category={category as CloudCategory} />}
      />
    </Box>
  )
}
