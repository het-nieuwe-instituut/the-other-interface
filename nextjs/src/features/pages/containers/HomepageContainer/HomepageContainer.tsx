import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { MainGalaxy } from '@/features/galaxyInterface/galaxies/MainGalaxy/MainGalaxy'
import { EditorialLayer } from '@/features/shared/components/EditorialLayer/EditorialLayer'
import { Box } from '../../../shared/configs/chakra'
// import dynamic from 'next/dynamic'

import { HomepageQuery, StoryEntity, ThemesQuery } from 'src/generated/graphql'

export type Props = {
  homepage?: HomepageQuery
  themes?: ThemesQuery
}

export const HomepageContainer: React.FC<Props> = ({ homepage, themes }) => {
  const editorialData = homepage?.homepage?.data?.attributes
  const storyTitle = themes?.themes.data?.[0]?.attributes?.name
  const stories = themes?.themes.data?.[0]?.attributes?.stories?.data

  return (
    <Box backgroundColor="graph">
      <GalaxyInterface>
        <MainGalaxy stories={stories as StoryEntity[]} storyTitle={storyTitle} />
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
