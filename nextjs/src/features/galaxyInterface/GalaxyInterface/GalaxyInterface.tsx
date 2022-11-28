import Breadcrumbs, { BreadcrumbsRenderModes } from '@/features/galaxy/components/Breadcrumbs/Breadcrumbs'
import { ScrollToTop } from '@/features/pages/utils/utils'
import { GalaxyFooter } from '@/features/shared/components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyTopRight } from '@/features/shared/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { GalaxyWrapper } from '@/features/shared/components/GalaxyWrapper/GalaxyWrapper'
import useScroll from '@/features/shared/hooks/useScroll'
import { Box, Button } from '@chakra-ui/react'
import { useSize } from '@chakra-ui/react-use-size'
import { memo, useRef } from 'react'
import { ZoomStates } from '../types/galaxy'
import { DynamicFilterCloudsContainer } from './components/containers/DynamicFilterCloudsContainer'
import { DynamicGalaxyContainer } from './components/containers/DynamicGalaxyContainer'
import { usePresenter } from './usePresenter'

const DEBUG = true
export const GalaxyInterface: React.FC = () => {
    const { activeZoom, setActiveZoom } = usePresenter()
    const graphRef = useRef<HTMLDivElement | null>(null)
    const sizes = useSize(graphRef)
    const { scrollPosition } = useScroll()

    return (
        <>
            <Breadcrumbs
                bg={scrollPosition >= 750 ? 'graph' : 'trasparent'}
                onWrapperClick={ScrollToTop}
                mode={scrollPosition >= 750 ? BreadcrumbsRenderModes.STICKY : BreadcrumbsRenderModes.DEFAULT}
            />
            <GalaxyWrapper renderTopRight={() => <GalaxyTopRight />} renderBottom={() => <GalaxyFooter />}>
                <Box backgroundColor="graph" height="800px" ref={graphRef}>
                    {sizes?.height && sizes?.width && (
                        <Box position={'fixed'}>
                            <MemoizedGalaxySwitch activeZoom={activeZoom} sizes={sizes} />
                        </Box>
                    )}
                </Box>
            </GalaxyWrapper>

            {DEBUG && (
                <Box zIndex={100000}>
                    {Object.values(ZoomStates).map(t => {
                        return (
                            <Button key={t} onClick={() => setActiveZoom(t)}>
                                {t}
                            </Button>
                        )
                    })}
                </Box>
            )}
        </>
    )
}

const mainGalaxyIncluded = [
    ZoomStates.Zoom0,
    ZoomStates.Zoom0ToZoom1,
    ZoomStates.Zoom1ToZoom0,
    ZoomStates.Zoom1Stories,
    ZoomStates.Zoom1,
    ZoomStates.Zoom1ToZoom2,
    ZoomStates.Zoom1ToZoom1Stories,
    ZoomStates.Zoom1StoriesToZoom1,
    ZoomStates.Zoom1StoriesToZoom5,
    ZoomStates.ZoomOutToZoom1,
]
const landingGalaxyIncluded = [
    ZoomStates.Zoom2,
    ZoomStates.Zoom2Initial,
    ZoomStates.Zoom2ToZoom3,
    ZoomStates.Zoom2ToZoom1,
]

const GalaxySwitch: React.FC<{ activeZoom: ZoomStates | null; sizes: ReturnType<typeof useSize> }> = props => {
    const { activeZoom, sizes } = props

    if (!activeZoom) {
        return <p>not able to render anything</p>
    }
    if (mainGalaxyIncluded.includes(activeZoom)) {
        return <DynamicGalaxyContainer dimensions={{ height: 800, width: sizes?.width }} />
    }
    if (landingGalaxyIncluded.includes(activeZoom)) {
        return <DynamicFilterCloudsContainer dimensions={{ height: 800, width: sizes?.width }} />
    }
    return null
}

const MemoizedGalaxySwitch = memo(GalaxySwitch)
