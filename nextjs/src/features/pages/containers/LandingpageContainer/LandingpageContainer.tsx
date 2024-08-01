'use client'

import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { GalaxyZoomAnimationStateProvider } from '@/features/galaxyInterface/galaxies/hooks/GalaxyZoomAnimationStateProvider'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { LandingPageComponentRenderer } from '@/features/modules/ModulesRenderer/LandingPageComponentRenderer'
import MobileOverlayProvider from '@/features/shared/components/MobileOverlayProvider/MobileOverlayProvider'
import SuspenseLoader from '@/features/shared/components/SuspenseLoader/SuspenseLoader'
import {
  useSearchParamCategory,
  useSearchParamFilters,
  useSearchParamSearchValue,
} from '@/features/shared/hooks/useZoom2Params'
import { EditorialSkeleton } from '@/features/ui/components/Skeletons/EditorialSkeleton'
import {
  LandingPageArchiveQuery,
  LandingPageObjectQuery,
  LandingPagePeopleQuery,
  LandingPagePublicationQuery,
} from 'src/generated/graphql'
import { CategoryGalaxy } from '../../../galaxyInterface/galaxies/CategoryGalaxy/CategoryGalaxy'
import { BelowTheFoldWrapper } from '@/features/editorial/components/BelowTheFoldWrapper'
import {
  useDecodedSearchFilters,
  useEncodedSearchFilters,
} from '@/features/shared/hooks/search/useFilters'
import { useGetRawPath } from '@/features/ui/utils/route'

export interface LandingPageProps {
  editorialData?:
    | LandingPageArchiveQuery['landingPageArchive']['data']
    | LandingPageObjectQuery['landingPageObject']['data']
    | LandingPagePeopleQuery['landingPagePeople']['data']
    | LandingPagePublicationQuery['landingPagePublication']['data']
}
export const LandingpageContainer: React.FC<LandingPageProps> = ({ editorialData }) => {
  const category = useSearchParamCategory()
  const searchValue = useSearchParamSearchValue()
  const encodedFilters = useSearchParamFilters()
  return (
    <div>
      <GalaxyZoomAnimationStateProvider key={`${category}-${searchValue}-${encodedFilters ?? ''}`}>
        <GalaxyInterface>
          <MobileOverlayProvider>
            <CategoryGalaxy />
          </MobileOverlayProvider>
        </GalaxyInterface>
      </GalaxyZoomAnimationStateProvider>

      <BelowTheFoldWrapper className="relative w-full px-6 min-[1428px]:px-0">
        <div className="mx-auto max-w-[1392px] pt-6">
          <div className="grid grid-cols-6 gap-3 lg:grid-cols-12">
            <SuspenseLoader LoadingComponent={<EditorialSkeleton />}>
              <div className="col-span-12 flex flex-col gap-4">
                {editorialData && (
                  <>
                    <PageHeader
                      title={editorialData?.attributes?.title || undefined}
                      preface={editorialData?.attributes?.text || undefined}
                      constrainPreface={true}
                      showReadMore={false}
                    />

                    <LandingPageComponentRenderer
                      grid={editorialData?.attributes?.grid}
                      highlight={editorialData?.attributes?.highlight}
                      carousel={editorialData?.attributes?.carousel}
                      imageCarousel={editorialData?.attributes?.imageCarousel}
                    />
                  </>
                )}
              </div>
            </SuspenseLoader>
          </div>
        </div>
      </BelowTheFoldWrapper>
    </div>
  )
}
