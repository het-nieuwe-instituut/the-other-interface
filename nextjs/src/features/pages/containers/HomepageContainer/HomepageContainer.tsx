'use client'

import { GenericCarouselGridWithClientPagination } from '@/features/editorial/components/GenericCarouselGridWithClientPagination'
import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { MainGalaxy } from '@/features/galaxyInterface/galaxies/MainGalaxy/MainGalaxy'
import SuspenseLoader from '@/features/shared/components/SuspenseLoader/SuspenseLoader'
import { HomepageQuery, ThemesQuery } from 'src/generated/graphql'
import { CategoryGalaxy } from '../../../galaxyInterface/galaxies/CategoryGalaxy/CategoryGalaxy'
import { GenericCardGrid } from '@/features/editorial/components/GenericCardGrid'

export type Props = {
  homepage?: HomepageQuery
  themes?: ThemesQuery
  nextThemes?: ThemesQuery
  draftMode: boolean
  isStoriesGalaxy?: boolean
}

export const HomepageContainer: React.FC<Props> = ({ homepage, isStoriesGalaxy }) => {
  const editorialData = homepage?.homepage?.data?.attributes

  return (
    <>
      <GalaxyInterface>{isStoriesGalaxy ? <CategoryGalaxy /> : <MainGalaxy />}</GalaxyInterface>

      <div className="relative w-full bg-ivory-90 px-0 xl:px-6">
        <div className="mx-auto max-w-[1392px] px-6 pt-6">
          <div className="grid grid-cols-6 gap-3 lg:grid-cols-12">
            <SuspenseLoader>
              <div className=" col-span-12 flex flex-col gap-4">
                {editorialData && (
                  <>
                    <PageHeader
                      title={editorialData?.Title || undefined}
                      preface={editorialData?.text || undefined}
                      constrainPreface={true}
                      showReadMore={false}
                    />

                    <div className="flex w-full flex-col">
                      {editorialData?.carousel && (
                        <GenericCarouselGridWithClientPagination
                          carousel={editorialData.carousel}
                        />
                      )}

                      {editorialData?.grid && <GenericCardGrid grid={editorialData.grid} />}
                    </div>
                  </>
                )}
              </div>
            </SuspenseLoader>
          </div>
        </div>
      </div>
    </>
  )
}
