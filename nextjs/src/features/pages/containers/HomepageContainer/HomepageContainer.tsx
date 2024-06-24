'use client'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { MainGalaxy } from '@/features/galaxyInterface/galaxies/MainGalaxy/MainGalaxy'
import { EditorialLayer } from '@/features/shared/components/Layers/EditorialLayer/EditorialLayer'
import MobileOverlayProvider from '@/features/shared/components/MobileOverlayProvider/MobileOverlayProvider'
import { HomepageQuery, ThemesQuery } from 'src/generated/graphql'

export type Props = {
  homepage?: HomepageQuery
  themes?: ThemesQuery
  nextThemes?: ThemesQuery
  draftMode: boolean
}

export const HomepageContainer: React.FC<Props> = ({ homepage }) => {
  const editorialData = homepage?.homepage?.data?.attributes

  return (
    <>
      <GalaxyInterface>
        <MobileOverlayProvider>
          <MainGalaxy />
        </MobileOverlayProvider>
      </GalaxyInterface>

      {editorialData && (
        <EditorialLayer
          title={editorialData.Title}
          preface={editorialData.description}
          components={editorialData.components}
        />
      )}
    </>
  )
}
