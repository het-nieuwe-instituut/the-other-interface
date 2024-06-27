import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
// import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
// import { LayerWrapper } from '@/features/shared/components/Layers/LayerWrapper'
import { CategoryGalaxy } from '../../../galaxyInterface/galaxies/CategoryGalaxy/CategoryGalaxy'
import MobileOverlayProvider from '@/features/shared/components/MobileOverlayProvider/MobileOverlayProvider'
import {
  LandingPageArchiveQuery,
  LandingPageObjectQuery,
  LandingPagePeopleQuery,
  LandingPagePublicationQuery,
} from 'src/generated/graphql'
import { LandingPageComponentRenderer } from '@/features/modules/ModulesRenderer/LandingPageComponentRenderer'
import SuspenseLoader from '@/features/shared/components/SuspenseLoader/SuspenseLoader'

export interface LandingPageProps {
  editorialData?:
    | LandingPageArchiveQuery['landingPageArchive']['data']
    | LandingPageObjectQuery['landingPageObject']['data']
    | LandingPagePeopleQuery['landingPagePeople']['data']
    | LandingPagePublicationQuery['landingPagePublication']['data']
}

export const LandingpageContainer: React.FC<LandingPageProps> = ({ editorialData }) => {
  return (
    <div>
      <GalaxyInterface>
        <MobileOverlayProvider>
          <CategoryGalaxy />
        </MobileOverlayProvider>
      </GalaxyInterface>

      {/* <LayerWrapper
        LeftContent={
          <PageHeader
            title={editorialData?.attributes?.title || undefined}
            preface={editorialData?.attributes?.text || undefined}
            constrainPreface={true}
            showReadMore={false}
          />
        }
        BottomContent={
          <LandingPageComponentRenderer
            grid={editorialData?.attributes?.grid}
            highlight={editorialData?.attributes?.highlight}
            carousel={editorialData?.attributes?.carousel}
            imageCarousel={editorialData?.attributes?.imageCarousel}
          />
        }
      /> */}

      <div className="relative w-full bg-ivory-90 px-0 xl:px-6">
        <div className="mx-auto max-w-[1392px] px-6 pt-6">
          <div className="grid grid-cols-6 gap-3 lg:grid-cols-12">
            <SuspenseLoader>
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
