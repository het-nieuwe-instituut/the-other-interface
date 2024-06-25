import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { DynamicComponentRenderer } from '@/features/modules/ModulesRenderer/ModulesRenderer'
import { LayerWrapper } from '@/features/shared/components/Layers/LayerWrapper'
import { CloudCategory } from '@/features/shared/utils/categories'
import { LandingpageBySlugQuery } from 'src/generated/graphql'
import { CategoryGalaxy } from '../../../galaxyInterface/galaxies/CategoryGalaxy/CategoryGalaxy'

interface Props {
  category: CloudCategory
  editorialData?: LandingpageBySlugQuery['landingpages']['data'][0]['attributes']
}

export const LandingpageContainer: React.FC<Props> = ({ editorialData }) => {
  return (
    <div>
      <GalaxyInterface>
        <CategoryGalaxy />
      </GalaxyInterface>

      <LayerWrapper
        LeftContent={
          <PageHeader
            title={editorialData?.Title || undefined}
            preface={editorialData?.Description || undefined}
            constrainPreface={true}
          />
        }
        BottomContent={<DynamicComponentRenderer components={editorialData?.components} />}
      />
    </div>
  )
}
