'use client'

import { BelowTheFoldWrapper } from '@/features/editorial/components/BelowTheFoldWrapper'
import { GenericCardGrid } from '@/features/editorial/components/GenericCardGrid'
import { GenericCarouselGridWithClientPagination } from '@/features/editorial/components/GenericCarouselGridWithClientPagination'
import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { MainGalaxy } from '@/features/galaxyInterface/galaxies/MainGalaxy/MainGalaxy'
import MobileOverlayProvider from '@/features/shared/components/MobileOverlayProvider/MobileOverlayProvider'
import SuspenseLoader from '@/features/shared/components/SuspenseLoader/SuspenseLoader'
import { EditorialSkeleton } from '@/features/ui/components/Skeletons/EditorialSkeleton'
import { HomepageQuery, ThemesQuery } from 'src/generated/graphql'
import { CategoryGalaxy } from '../../../galaxyInterface/galaxies/CategoryGalaxy/CategoryGalaxy'
import {
  useSearchParamCategory,
  useSearchParamFilters,
  useSearchParamSearchValue,
} from '@/features/shared/hooks/useZoom2Params'
import { GalaxyZoomAnimationStateProvider } from '@/features/galaxyInterface/galaxies/hooks/GalaxyZoomAnimationStateProvider'

export type Props = {
  homepage?: HomepageQuery
  themes?: ThemesQuery
  nextThemes?: ThemesQuery
  draftMode: boolean
  isStoriesGalaxy?: boolean
}

export const HomepageContainer: React.FC<Props> = ({ homepage, isStoriesGalaxy }) => {
  const editorialData = homepage?.homepage?.data?.attributes
  const category = useSearchParamCategory()
  const searchValue = useSearchParamSearchValue()
  const encodedFilters = useSearchParamFilters()

  return (
    <>
      <GalaxyInterface>
        <MobileOverlayProvider>
          {isStoriesGalaxy ? (
            <GalaxyZoomAnimationStateProvider
              key={`${category}-${searchValue}-${encodedFilters ?? ''}`}
            >
              <CategoryGalaxy />
            </GalaxyZoomAnimationStateProvider>
          ) : (
            <MainGalaxy />
          )}
        </MobileOverlayProvider>
      </GalaxyInterface>

      <BelowTheFoldWrapper className="relative w-full px-5 md:px-6 min-[1428px]:px-0">
        <div className="mx-auto max-w-[1392px] pt-6">
          <div className="grid grid-cols-6 gap-3 lg:grid-cols-12">
            <SuspenseLoader LoadingComponent={<EditorialSkeleton />}>
              <div className=" col-span-12 flex flex-col gap-20">
                {editorialData && (
                  <>
                    <PageHeader
                      title={editorialData?.Title || undefined}
                      preface={editorialData?.text || undefined}
                      constrainPreface={true}
                      showReadMore={false}
                    />

                    <div className="flex w-full flex-col gap-20 pb-20">
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
      </BelowTheFoldWrapper>
    </>
  )
}
