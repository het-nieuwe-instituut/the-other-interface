import { GalaxyInterface } from '@/features/galaxyInterface/GalaxyInterface/GalaxyInterface'
import { EditorialLayer } from '@/features/shared/components/Layers/EditorialLayer/EditorialLayer'
import { CloudCategory } from '@/features/shared/utils/categories'
import { CategoryGalaxy } from '../../../galaxyInterface/galaxies/CategoryGalaxy/CategoryGalaxy'
import { HomeOrLadingType } from 'src/app/landingpage/page'

interface Props {
  category: CloudCategory
  editorialData?: HomeOrLadingType
  description?: string | null
}

export const LandingpageContainer: React.FC<Props> = ({ editorialData, description }) => {
  return (
    <div>
      <GalaxyInterface>
        <CategoryGalaxy />
      </GalaxyInterface>

      {editorialData && (
        <EditorialLayer
          title={editorialData?.Title}
          preface={description}
          components={editorialData?.components}
        />
      )}
    </div>
  )
}
