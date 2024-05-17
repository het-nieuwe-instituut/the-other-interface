'use client'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { MainGalaxy } from '@/features/galaxyInterface/galaxies/MainGalaxy/MainGalaxy'

import { Box } from '../../../shared/configs/chakra'
import { HomepageQuery, StoryEntity, ThemesQuery } from 'src/generated/graphql'
import { EditorialLayer } from '@/features/shared/components/Layers/EditorialLayer/EditorialLayer'
import { usePresenter } from './usePresetner'

export type Props = {
  homepage?: HomepageQuery
  themes?: ThemesQuery
  nextThemes?: ThemesQuery
  draftMode: boolean
}

export const HomepageContainer: React.FC<Props> = ({ homepage, draftMode }) => {
  const { stories, nextStories, storyTitle, pagination, isLoading } = usePresenter(draftMode)
  const editorialData = homepage?.homepage?.data?.attributes

  return (
    <Box>
      <GalaxyInterface>
        <MainGalaxy
          stories={stories as StoryEntity[]}
          nextStories={nextStories as StoryEntity[]}
          storyTitle={storyTitle}
          pagination={pagination}
          isLoading={isLoading}
        />
      </GalaxyInterface>

      {editorialData && (
        <EditorialLayer
          title={editorialData.Title}
          preface={editorialData.description}
          components={editorialData.components}
        />
      )}
    </Box>
  )
}
