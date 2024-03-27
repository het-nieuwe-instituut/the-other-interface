'use client'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { Box } from '@chakra-ui/react'
import { StoryByIdQuery, LandingpageBySlugQuery } from 'src/generated/graphql'
import { DetailGalaxy } from '@/features/galaxyInterface/galaxies/DetailGalaxy/DetailGalaxy'
import { RecordLayer } from '@/features/record/containers/RecordLayer/RecordLayer'
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
    | NonNullable<NonNullable<StoryByIdQuery['storyByLocale']['data']>['attributes']>['components']
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
    <Box>
      <GalaxyInterface>
        <DetailGalaxy />
      </GalaxyInterface>

      <Layer />
    </Box>
  )
}
