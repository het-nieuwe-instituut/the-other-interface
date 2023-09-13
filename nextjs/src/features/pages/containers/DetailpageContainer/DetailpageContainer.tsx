'use client'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { EditorialLayer } from '@/features/shared/components/EditorialLayer/EditorialLayer'

import { Category } from '@/features/shared/utils/categories'

import { StoryByIdQuery, LandingpageBySlugQuery } from 'src/generated/graphql'
import { Box } from '@/features/shared/configs/chakra'

export interface DetailpageEditorialLayer {
  title?: string | null
  description?: string | null
  components:
    | NonNullable<
        NonNullable<LandingpageBySlugQuery['landingpages']['data']>[0]['attributes']
      >['components']
    | NonNullable<NonNullable<StoryByIdQuery['stories']['data']>[0]['attributes']>['components']
    | null
}

interface Props {
  category: Category
  id: string
  editorialData: DetailpageEditorialLayer
}

export const DetailpageContainer: React.FC<Props> = ({ id, category, editorialData }) => {
  console.log('data', editorialData)

  return (
    <Box backgroundColor="graph">
      <GalaxyInterface>
        <Box color={'white'}>{category}</Box>
        <Box color={'white'}>{id}</Box>
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
