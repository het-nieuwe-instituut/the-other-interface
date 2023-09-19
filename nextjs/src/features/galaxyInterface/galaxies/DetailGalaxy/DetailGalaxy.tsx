'use client'
import { CLOUD_CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { Box, Grid } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import { RelatedCategory, RelatedStories } from './fragments'
import { GridParams } from './fragments/types'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'

const relatedCategories: Array<{ category: CloudCategory; grid: GridParams }> = [
  { category: CLOUD_CATEGORIES.people, grid: { gridRow: '1 / 2', gridColumn: '1 / 2' } },
  { category: CLOUD_CATEGORIES.objects, grid: { gridRow: '1 / 2', gridColumn: '3 / 4' } },
  { category: CLOUD_CATEGORIES.publications, grid: { gridRow: '2 / 3', gridColumn: '3 / 4' } },
  { category: CLOUD_CATEGORIES.archives, grid: { gridRow: '2 / 3', gridColumn: '1 / 2' } },
]

export const DetailGalaxy: React.FC = () => {
  const params = useParams()
  const category = params?.category
  const id = params?.id

  if (!category || !id) return null

  return (
    <Box position="relative" width="100vw" height="100vh" overflow={'hidden'}>
      <Grid
        position="absolute"
        w="96vw"
        h="70%"
        top="6%"
        left="2vw"
        right="2vw"
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2, 1fr)"
      >
        {relatedCategories.map(({ category: cloudCategory, grid }) => (
          <RelatedCategory
            key={cloudCategory}
            category={cloudCategory}
            gridRow={grid.gridRow}
            gridColumn={grid.gridColumn}
          />
        ))}

        <RelatedStories gridRow="1 / 3" />
      </Grid>

      <GalaxyFooter />
    </Box>
  )
}
