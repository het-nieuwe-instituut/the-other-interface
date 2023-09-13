'use client'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { EditorialLayer } from '@/features/shared/components/EditorialLayer/EditorialLayer'

import { Category } from '@/features/shared/utils/categories'

import { StoryByIdQuery } from 'src/generated/graphql'
import { Box } from '@/features/shared/configs/chakra'

interface Props {
  category: Category
  id: string
  data: StoryByIdQuery | null
}

export const DetailpageContainer: React.FC<Props> = ({ id, category, data }) => {
  console.log('data', data)
  const editorialData = data?.stories?.data?.[0]?.attributes

  return (
    <Box backgroundColor="graph">
      <GalaxyInterface>
        <Box color={'white'}>{category}</Box>
      </GalaxyInterface>

      {editorialData && (
        <EditorialLayer
          title={editorialData.title}
          preface={editorialData.description}
          components={editorialData.components}
        />
      )}
    </Box>
  )
}
