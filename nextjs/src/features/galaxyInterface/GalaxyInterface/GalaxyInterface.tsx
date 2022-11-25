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

const GalaxySwitch: React.FC<{ activeZoom: ZoomStates | null; sizes: ReturnType<typeof useSize> }> = props => {
    const { activeZoom, sizes } = props
    const galaxyIncluded = [
        ZoomStates.Zoom0,
        ZoomStates.Zoom0ToZoom1,
        ZoomStates.Zoom1ToZoom0,
        ZoomStates.Zoom1Stories,
        ZoomStates.Zoom1,
        ZoomStates.Zoom2ToZoom1,
        ZoomStates.Zoom1ToZoom2,
        ZoomStates.Zoom1ToZoom1Stories,
        ZoomStates.Zoom1StoriesToZoom1,
        ZoomStates.Zoom1StoriesToZoom5,
    ]
    if (!activeZoom) {
        return <p>not able to render anything</p>
    }
    if (galaxyIncluded.includes(activeZoom)) {
        return <DynamicGalaxyContainer dimensions={{ height: 800, width: sizes?.width }} />
    }
    return null
}

const MemoizedGalaxySwitch = memo(GalaxySwitch)
