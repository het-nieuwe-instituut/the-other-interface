'use client'

import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { GalaxyZoomAnimationStateProvider } from '@/features/galaxyInterface/galaxies/hooks/GalaxyZoomAnimationStateProvider'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { LandingPageComponentRenderer } from '@/features/modules/ModulesRenderer/LandingPageComponentRenderer'
import MobileOverlayProvider from '@/features/shared/components/MobileOverlayProvider/MobileOverlayProvider'
import SuspenseLoader from '@/features/shared/components/SuspenseLoader/SuspenseLoader'
import {
  useSearchParamCategory,
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

  return (
    <div>
      <GalaxyZoomAnimationStateProvider key={`${searchValue}-${category}`}>
        <GalaxyInterface>
          <MobileOverlayProvider>
            <CategoryGalaxy />
          </MobileOverlayProvider>
        </GalaxyInterface>
      </GalaxyZoomAnimationStateProvider>

      <div className="relative w-full bg-ivory-90 px-0 xl:px-6">
        <div className="mx-auto max-w-[1392px] px-6 pt-6">
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
      </div>
    </div>
  )
}
