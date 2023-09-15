'use client'
import { CloudCategory } from '@/features/shared/utils/categories'
import { Box, Grid } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import { RelatedCategoryRecords, RelatedStories } from './fragments'

const relatedCategories: CloudCategory[] = ['people', 'objects', 'publications', 'archives']

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
        {relatedCategories.map(cloudCategory => (
          <RelatedCategoryRecords key={cloudCategory} category={cloudCategory} />
        ))}

        <RelatedStories />
      </Grid>
    </Box>
  )
}
