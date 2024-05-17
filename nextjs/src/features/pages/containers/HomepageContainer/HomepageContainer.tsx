'use client'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { MainGalaxy } from '@/features/galaxyInterface/galaxies/MainGalaxy/MainGalaxy'

import { Box } from '../../../shared/configs/chakra'
import { HomepageQuery, ThemesQuery } from 'src/generated/graphql'
import { EditorialLayer } from '@/features/shared/components/Layers/EditorialLayer/EditorialLayer'

export type Props = {
  homepage?: HomepageQuery
  themes?: ThemesQuery
  nextThemes?: ThemesQuery
  draftMode: boolean
}

export const HomepageContainer: React.FC<Props> = ({ homepage, draftMode }) => {
  const editorialData = homepage?.homepage?.data?.attributes

  return (
    <Box>
      <GalaxyInterface>
        <MainGalaxy isDraftMode={draftMode} />
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
