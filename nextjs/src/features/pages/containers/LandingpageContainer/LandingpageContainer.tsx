import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
// import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { LayerWrapper } from '@/features/shared/components/Layers/LayerWrapper'
import { CategoryGalaxy } from '../../../galaxyInterface/galaxies/CategoryGalaxy/CategoryGalaxy'
import MobileOverlayProvider from '@/features/shared/components/MobileOverlayProvider/MobileOverlayProvider'
import {
  LandingPageArchiveQuery,
  LandingPageObjectQuery,
  LandingPagePeopleQuery,
  LandingPagePublicationQuery,
} from 'src/generated/graphql'
import { LandingPageComponentRenderer } from '@/features/modules/ModulesRenderer/LandingPageModulesRenderer'

export interface LandingPageProps {
  editorialData?:
    | LandingPageArchiveQuery['landingPageArchive']['data']
    | LandingPageObjectQuery['landingPageObject']['data']
    | LandingPagePeopleQuery['landingPagePeople']['data']
    | LandingPagePublicationQuery['landingPagePublication']['data']
}

export const LandingpageContainer: React.FC<LandingPageProps> = ({ editorialData }) => {
  console.log(editorialData)
  return (
    <div>
      <GalaxyInterface>
        <MobileOverlayProvider>
          <CategoryGalaxy />
        </MobileOverlayProvider>
      </GalaxyInterface>

      <LayerWrapper
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
      />
    </div>
  )
}
