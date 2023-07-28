import { GalaxyInterfaceProvider } from '@/features/galaxyInterfaceV2/stores/GalaxyInterfaceProvider'
import { galaxyInitialState } from '@/features/galaxyInterfaceV2/stores/galaxyInterface.store'
import { ZoomStates } from '@/features/galaxyInterfaceV2/types/galaxy'

interface Props {
  children: React.ReactNode
  activeZoom: ZoomStates
}

export const HomepageProvider: React.FC<Props> = ({ activeZoom, children }) => {
  return (
    <GalaxyInterfaceProvider initialState={{ ...galaxyInitialState, activeZoom }}>
      {children}
    </GalaxyInterfaceProvider>
  )
}
