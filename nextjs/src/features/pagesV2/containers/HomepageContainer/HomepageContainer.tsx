import { GalaxyInterface } from '@/features/galaxyInterfaceV2/GalaxyInterface/GalaxyInterface'
import { EditorialLayer } from '@/features/shared/components/EditorialLayer/EditorialLayer'
import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import { HomepageQuery, ThemesQuery } from 'src/generated/graphql'

export const DynamicMainGalaxyNoSsr = dynamic(
  () => import('../../../galaxyInterfaceV2/galaxies/MainGalaxy/MainGalaxy'),
  {
    ssr: false,
  }
)

export type Props = {
  homepage?: HomepageQuery
  themes?: ThemesQuery
}

export const HomepageContainer: React.FC<Props> = ({ homepage, themes }) => {
  const editorialData = homepage?.homepage?.data?.attributes
  const storyTitle = themes?.themes.data?.[0].attributes?.name

  return (
    <Box backgroundColor="graph">
      <GalaxyInterface storyTitle={storyTitle}>
        <DynamicMainGalaxyNoSsr storyTitle={storyTitle} />
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
