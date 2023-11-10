'use client'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { EditorialLayer } from '@/features/shared/components/EditorialLayer/EditorialLayer'
import { StoryByIdQuery, LandingpageBySlugQuery } from 'src/generated/graphql'
import { Box } from '@chakra-ui/react'
import { DetailGalaxy } from '@/features/galaxyInterface/galaxies/DetailGalaxy/DetailGalaxy'
import { CATEGORIES } from '@/features/shared/utils/categories'
import { RecordLayer } from '@/features/shared/components/RecordLayer/RecordLayer'

export interface DetailpageEditorialLayer {
  title?: string | null
  description?: string | null
  components:
    | NonNullable<
        NonNullable<LandingpageBySlugQuery['landingpages']['data']>[0]['attributes']
      >['components']
    | NonNullable<
        NonNullable<StoryByIdQuery['storiesByLocale']['data']>[0]['attributes']
      >['components']
    | null
}
interface Props {
  editorialData: DetailpageEditorialLayer | null
  category: string
}

const CATEGORIES_TO_SHOW_EDITORIAL = ['objects', 'publications', 'people', 'archives']

export const DetailpageContainer: React.FC<Props> = ({ editorialData, category }) => {
  return (
    <Box backgroundColor="graph">
      <GalaxyInterface>
        <DetailGalaxy />
      </GalaxyInterface>

      {editorialData && category === CATEGORIES.stories && (
        <EditorialLayer
          title={editorialData.title}
          preface={editorialData.description}
          components={editorialData.components}
        />
      )}

      {CATEGORIES_TO_SHOW_EDITORIAL.includes(category) && <RecordLayer data={['test']} />}
    </Box>
  )
}
