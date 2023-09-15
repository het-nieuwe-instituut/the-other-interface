'use client'
import { Box } from '@chakra-ui/react'
import { Records } from './fragments'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyRecordsFilter } from '../../components/GalaxyWrapper/GalaxyRecordsFilter/GalaxyRecordsFilter'
import { useSearchParams } from 'next/navigation'
import { CloudCategory } from '@/features/shared/utils/categories'
import { Zoom2Query } from 'src/generated/graphql'

type Props = {
  zoom2: Zoom2Query
}

export const CategoryGalaxy: React.FC<Props> = ({ zoom2 }) => {
  const searchParams = useSearchParams()
  const category = searchParams?.get('category')

  return (
    <Box position="relative" width="100vw" height="100vh" overflow={'hidden'}>
      <Records zoom2={zoom2} />

      <GalaxyFooter
        renderFooterCenter={
          <GalaxyRecordsFilter
            category={category as CloudCategory}
            total={zoom2?.zoomLevel2?.total}
          />
        }
      />
    </Box>
  )
}
