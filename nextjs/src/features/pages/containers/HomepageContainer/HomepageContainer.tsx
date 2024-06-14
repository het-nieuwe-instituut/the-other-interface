'use client'

import { HomepageCarouselGrid } from '@/features/editorial/components/HomepageCarouselGrid'
import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { MainGalaxy } from '@/features/galaxyInterface/galaxies/MainGalaxy/MainGalaxy'
import SuspenseLoader from '@/features/shared/components/SuspenseLoader/SuspenseLoader'
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
        <MainGalaxy />
      </GalaxyInterface>
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
                    />

                    <div className="flex w-full">
                      {editorialData?.carousel && (
                        <>
                          <div className="hidden w-full lg:block">
                            <HomepageCarouselGrid carousel={editorialData.carousel} />
                          </div>
                          <div className="block w-full lg:hidden">
                            <HomepageCarouselGrid cols={1} carousel={editorialData.carousel} />
                          </div>
                        </>
                      )}
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
