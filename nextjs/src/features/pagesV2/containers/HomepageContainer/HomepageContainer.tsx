import { HomepageQuery } from 'src/generated/graphql'
import { ZoomStates } from '@/features/galaxyInterfaceV2/types/galaxy'

import { HomepageProvider, Homepage } from './fragments'

type Props = {
  homepage?: HomepageQuery
  activeZoom: ZoomStates
}

export const HomepageContainer: React.FC<Props> = ({ homepage, activeZoom }) => {
  return (
    <HomepageProvider activeZoom={activeZoom}>
      <Homepage data={homepage} />
    </HomepageProvider>
  )
}
