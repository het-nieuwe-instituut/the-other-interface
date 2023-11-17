'use client'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { StoryByIdQuery, LandingpageBySlugQuery } from 'src/generated/graphql'
import { Box } from '@chakra-ui/react'
import { DetailGalaxy } from '@/features/galaxyInterface/galaxies/DetailGalaxy/DetailGalaxy'
import { RecordLayer } from '@/features/shared/components/Layers/RecordLayer/RecordLayer'
import { StoryLayer } from '@/features/shared/components/Layers/StoryLayer/StoryLayer'
import { isCloudCategory, isStoryCategory } from '@/features/shared/utils/categories'
import { usePresenter } from './usePresenter'

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
  category: string
  isDraftMode: boolean
}

export const DetailpageContainer: React.FC<Props> = ({ category, isDraftMode }) => {
  usePresenter(isDraftMode)

  const Layer = () => {
    if (isCloudCategory(category)) return <RecordLayer />
    if (isStoryCategory(category)) return <StoryLayer />
    return null
  }

  return (
    <Box backgroundColor="graph">
      <GalaxyInterface>
        <DetailGalaxy />
      </GalaxyInterface>

      <Layer />
    </Box>
  )
}
